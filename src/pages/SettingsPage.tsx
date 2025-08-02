import React, { useState, useEffect } from 'react';
import { TextField, Box, Typography, Paper, Button } from '@mui/material';
import { useCharacterNames } from '../contexts/CharacterNameContext';
import { commonCharacters } from '../novels/mock';

const SettingsPage: React.FC = () => {
  const { names, setName, clearName, clearAllNames } = useCharacterNames();
  const [localNames, setLocalNames] = useState<{ [key: string]: string }>({});

  // コンテキストのnamesが変更されたら、ローカルの状態を更新
  useEffect(() => {
    setLocalNames(names);
  }, [names]);

  const handleLocalNameChange = (characterKey: string, newName: string) => {
    setLocalNames(prev => ({
      ...prev,
      [characterKey]: newName,
    }));
  };

  const handleRegisterName = (characterKey: string) => {
    setName(characterKey, localNames[characterKey] || '');
  };

  const handleClearName = (characterKey: string) => {
    clearName(characterKey);
    setLocalNames(prev => {
      const newNames = { ...prev };
      delete newNames[characterKey];
      return newNames;
    });
  };

  const handleClearAllNames = () => {
    clearAllNames();
    setLocalNames({});
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 2, maxWidth: 600 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        名前変換
      </Typography>
      <Box sx={{ mb: 4 }}>
        {commonCharacters.map((char) => (
          <Box key={char.key} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
              label={char.defaultName}
              variant="outlined"
              margin="normal"
              value={localNames[char.key] || ''}
              onChange={(e) => handleLocalNameChange(char.key, e.target.value)}
              placeholder={`デフォルト: ${char.defaultName}`}
              sx={{ mr: 2, width: '200px' }} // 幅を固定
            />
            <Button variant="contained" onClick={() => handleRegisterName(char.key)} sx={{ mr: 1 }}>
              登録
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => handleClearName(char.key)}>
              クリア
            </Button>
          </Box>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleClearAllNames}>
        全てクリア
      </Button>
    </Paper>
  );
};

export default SettingsPage;

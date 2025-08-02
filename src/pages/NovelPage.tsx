import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { novels, commonCharacters } from '../novels/mock';
import { useCharacterNames } from '../contexts/CharacterNameContext';

const NovelPage: React.FC = () => {
  const { novelId } = useParams<{ novelId: string }>();
  const { names } = useCharacterNames();
  const novel = novels.find((n) => n.id === novelId);
  const [novelContent, setNovelContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNovelContent = async () => {
      if (!novelId) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/src/novels/${novelId}/content.txt`);
        if (!response.ok) {
          throw new Error(`Failed to fetch novel content: ${response.statusText}`);
        }
        const text = await response.text();
        setNovelContent(text);
      } catch (err) {
        console.error(err);
        setError('小説の本文を読み込めませんでした。');
      } finally {
        setLoading(false);
      }
    };

    fetchNovelContent();
  }, [novelId]);

  if (!novel) {
    return <Typography>小説が見つかりません。</Typography>;
  }

  if (loading) {
    return <Typography>本文を読み込み中...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const getProcessedContent = () => {
    let processedContent = novelContent || '';

    commonCharacters.forEach((char) => {
      const userDefinedName = names[char.key];
      const displayName = userDefinedName && userDefinedName.trim() !== '' ? userDefinedName : char.defaultName;
      const regex = new RegExp(`{{${char.key}}}`, 'g');
      processedContent = processedContent.replace(regex, displayName);
    });

    return processedContent;
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
        {novel.title}
      </Typography>
      

      <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-wrap' }}>
        {getProcessedContent()}
      </Typography>
    </Box>
  );
};

export default NovelPage;

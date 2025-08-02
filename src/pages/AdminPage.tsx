import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const AdminPage: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        README
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          管理者プロフィール
        </Typography>
        <Typography variant="h6" gutterBottom>
          名前: [あなたのペンネーム]
        </Typography>
        <Typography variant="body1" paragraph>
          役割: 小説書き
        </Typography>
        <Typography variant="body1">
          このサイトは、私が趣味で書いている小説を公開するために立ち上げました。
          拙い文章ではありますが、皆様に少しでも楽しんでいただけたら幸いです。
          感想などいただけると、創作の励みになります！
        </Typography>
      </Box>
    </Paper>
  );
};

export default AdminPage;

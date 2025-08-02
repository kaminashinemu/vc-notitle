import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { novels } from '../novels/mock';

const NovelListPage: React.FC = () => {
  return (
    <List>
      {novels.map((novel) => (
        <React.Fragment key={novel.id}>
          <ListItem button component={RouterLink} to={`/novels/${novel.id}`}>
            <ListItemText
              primary={<Typography variant="h6">{novel.title}</Typography>}
              secondary={
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {novel.description}
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default NovelListPage;

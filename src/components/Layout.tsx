import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box, Toolbar } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <Box sx={{ p: 2, pt: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
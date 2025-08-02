import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import TopPage from '../pages/TopPage';
import NovelListPage from '../pages/NovelListPage';
import NovelPage from '../pages/NovelPage';
import SettingsPage from '../pages/SettingsPage';
import AdminPage from '../pages/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
      {
        path: 'novels',
        element: <NovelListPage />,
      },
      {
        path: 'novels/:novelId',
        element: <NovelPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
]);

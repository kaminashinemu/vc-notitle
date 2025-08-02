import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CharacterNameProvider } from './contexts/CharacterNameContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CharacterNameProvider>
        <RouterProvider router={router} />
      </CharacterNameProvider>
    </ThemeProvider>
  </React.StrictMode>
);

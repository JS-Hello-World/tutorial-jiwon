import { StrictMode } from 'react';
import { createRoot as aa } from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import ThemeProvider from './components/ThemeProvider/ThemeProvider.tsx';

aa(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

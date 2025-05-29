import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

export type ThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

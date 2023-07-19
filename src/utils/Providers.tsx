'use client';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { SessionProvider } from 'next-auth/react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

interface IAuthProvider {
  children: React.ReactNode;
}

export default function Providers({ children }: IAuthProvider) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </SessionProvider>
    </StyleSheetManager>
  );
}

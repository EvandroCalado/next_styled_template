import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import isPropValid from '@emotion/is-prop-valid';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>,
  );
};

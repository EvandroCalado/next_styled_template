import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../src/styles/global-styles';
import Providers from '../src/utils/Providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={inter.className}>
      <Providers>
        <GlobalStyles />
        <Story />
      </Providers>
    </div>
  ),
];

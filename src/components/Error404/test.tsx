import React from 'react';
import Error404 from '.';
import { renderTheme } from '@/styles/render-theme';

describe('Error404', () => {
  test('renders the correct titles', () => {
    const { getByText } = renderTheme(<Error404 />);

    expect(getByText('ERRO 404')).toBeInTheDocument();
    expect(getByText('Página não encontrada !')).toBeInTheDocument();
  });
});

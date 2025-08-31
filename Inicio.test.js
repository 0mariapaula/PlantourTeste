import React from 'react';
import { render } from '@testing-library/react-native';
import Inicio from './app/inicio';

describe('Inicio', () => {
  it('deve renderizar o texto de boas-vindas', () => {
    const { getByText } = render(<Inicio />);
    expect(getByText(/bem-vindo/i)).toBeTruthy();
  });
});

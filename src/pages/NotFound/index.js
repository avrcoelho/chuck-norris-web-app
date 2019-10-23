import React from 'react';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <i className="fa fa-exclamation-circle" />
      <p>Página não encontrada!</p>
    </Container>
  );
}

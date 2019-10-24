import React, { useEffect } from 'react';

import { Container } from './styles';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Facts | Erro';
  }, []);

  return (
    <Container>
      <i className="fa fa-exclamation-circle" />
      <p>Página não encontrada!</p>
    </Container>
  );
}


import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Link } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        Chuck Norris
      </Link>
    </Container>
  );
}

export default withRouter(Header);

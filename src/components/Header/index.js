
import React from 'react';
import { withRouter } from 'react-router-dom';

import avatar from '../../assets/images/chuck-norris.png';

import { Container, Link } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={avatar} alt="avatar" />
        <span>Facts</span>
      </Link>
    </Container>
  );
}

export default withRouter(Header);

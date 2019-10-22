import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ErrorInfo({ error }) {
  return (
    <Container>{error}</Container>
  );
}

ErrorInfo.propTypes = {
  error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
};

ErrorInfo.defaultProps = {
  error: null,
};

export default ErrorInfo;

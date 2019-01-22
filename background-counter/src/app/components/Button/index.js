import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

function Button({ children, onClick }) {
  return (
    <Container onClick={onClick} className="my-button" type="button">
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

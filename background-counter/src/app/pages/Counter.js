import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../components/Button';
import counter from '../../counter';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

function Counter({ count = 0, add, subtract }) {
  return (
    <Container>
      <Button onClick={subtract}>-</Button>
      <h1>{count}</h1>
      <Button onClick={add}>+</Button>
    </Container>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    count: counter.selectors.getCount(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        add: counter.actions.add,
        subtract: counter.actions.subtract,
      },
      dispatch
    )
);

export default enhance(Counter);

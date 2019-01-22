import * as types from './actionTypes';

const INITIAL_STATE = {
  count: 0,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case types.ADD:
      return { ...state, count: state.count + 1 };
    case types.SUBTRACT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

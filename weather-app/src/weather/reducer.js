import * as types from './actionTypes';

const INITIAL_STATE = {
  data: null,
  error: null,
  fetching: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_WEATHER:
      return { ...state, fetching: true, error: null };
    case types.GET_WEATHER_SUCCESS:
      return { ...state, fetching: false, data: payload };
    case types.GET_WEATHER_FAILURE:
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
};

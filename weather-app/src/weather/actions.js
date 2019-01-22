import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';

export const getWeather = ({ latitude, longitude }) => ({
  [RSAA]: {
    endpoint: `http://localhost:3001/weather?longitude=${longitude}&latitude=${latitude}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    types: [
      types.GET_WEATHER,
      types.GET_WEATHER_SUCCESS,
      types.GET_WEATHER_FAILURE,
    ],
  },
});

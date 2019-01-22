import { NAME } from './constants';

export const getWeather = payload => ({
  alias: `${NAME}.getWeather`,
  payload,
});

import { NAME } from './constants';

export const getCount = state => state[NAME].count || 0;

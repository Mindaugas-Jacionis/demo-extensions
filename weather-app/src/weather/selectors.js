import idx from 'idx';
import { NAME } from './constants';

export const isFetching = state => idx(state, s => s[NAME].fetching) || false;
export const getError = state => idx(state, s => s[NAME].error) || null;
export const getData = state => idx(state, s => s[NAME].data) || null;

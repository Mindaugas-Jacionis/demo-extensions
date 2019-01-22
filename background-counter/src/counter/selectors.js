import idx from 'idx';
import { NAME } from './constants';

export const getCount = state => idx(state, s => s[NAME].count) || 0;

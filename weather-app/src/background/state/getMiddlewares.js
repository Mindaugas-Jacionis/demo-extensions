import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

export default applyMiddleware(apiMiddleware);

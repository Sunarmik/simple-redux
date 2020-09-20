import { applyMiddleware, createStore } from 'redux';
import apiMiddleware from './middleware/api';
import logMiddleware from './middleware/log';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, {}, applyMiddleware(logMiddleware, apiMiddleware));

window.store = store;

export default store;

// store.js
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from 'redux';
import rootReducer from './components/reducers';

const store = createStore(rootReducer);

export default store;

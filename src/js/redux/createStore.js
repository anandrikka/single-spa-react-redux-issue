import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

function reducer1(state, action) {
  return state;
}

function reducer2(state, action) {
  return state;
}

export function createAppStore() {
  const rootReducer = combineReducers({
    reducer1,
    reducer2
  });

  let composeEnhancers = compose;

  if (ENV.ENV !== 'production') {
    if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}

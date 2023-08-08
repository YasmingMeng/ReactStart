import  {configureStore, compose}  from '@reduxjs/toolkit';
import  rootReducer  from './reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = configureStore({
    reducer: {rootReducer},
    composeEnhancers: composeEnhancers(),
});

export default store; 
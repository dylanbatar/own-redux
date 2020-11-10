import { createStore } from './store';
import { reducer } from './reducer';

// initial data reducer
const init = [{ bug: '1' }, { bug: '2' }];

const store = createStore(reducer, init);

store.dispatch({ type: 'ADD', payload: { bug: '3' } });

store.dispatch({ type: 'ADD', payload: { bug: '4' } });

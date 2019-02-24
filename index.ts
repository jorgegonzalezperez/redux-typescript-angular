import { Store } from "./store/model/store";
import { CounterReducer } from "./store/counter.reducers";

// create a new store
let store = new Store<number>(CounterReducer, 0);
console.log(store.getState()); // -> 0

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 1

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 2

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // -> 1
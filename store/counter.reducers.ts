import { Reducer } from './interfaces/reducer.interface';
import { Action } from './interfaces/action.interface';
import { CounterActionsTypes } from './counter.actions';

let reducer: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case CounterActionsTypes.INCREMENT:
            return state + 1;
            break;
        case CounterActionsTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

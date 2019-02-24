import { Reducer } from './model/reducer';
import { Action } from './model/action';
import { CounterActionsTypes } from './counter.actions';

export const CounterReducer: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case CounterActionsTypes.INCREMENT:
            return state + 1;
        case CounterActionsTypes.DECREMENT:
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
};

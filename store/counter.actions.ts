import { Action } from "./interfaces/action.interface";

export enum CounterActionsTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

let incrementAction: Action = { type: CounterActionsTypes.INCREMENT };
let decrementAction: Action = { type: CounterActionsTypes.DECREMENT };

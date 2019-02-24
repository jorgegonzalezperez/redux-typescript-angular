import { Action } from "./model/action";

export enum CounterActionsTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    PLUS = 'PLUS'
}

let incrementAction: Action = { type: CounterActionsTypes.INCREMENT };
let decrementAction: Action = { type: CounterActionsTypes.DECREMENT };
let plusAction: Action = { type: CounterActionsTypes.PLUS };
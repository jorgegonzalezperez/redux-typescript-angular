import { Reducer } from "./reducer";
import { Action } from "./action";

export class Store<T> {
    private state: T;

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
    }
}
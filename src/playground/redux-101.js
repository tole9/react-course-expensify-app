import { createStore } from 'redux';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy

});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});

const setCount = ( { count = 100 } = {} ) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return  {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.count
        };
        case 'RESET':
        return {
            count: action.count
        };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));


// RESET - set the count equal to zero

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount());
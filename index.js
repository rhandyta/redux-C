const redux = require("redux");
const createStore = redux.createStore;

// action
const BUY_SHOES = "BUY_SHOES";

// State
const initialShoes = {
    stock: 50,
};

// reducer
const reducer = (state = initialShoes, action) => {
    switch (action.type) {
        case BUY_SHOES:
            return {
                ...state,
                stock: state.stock - 2,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
const unsub = store.subscribe(() =>
    console.log(`subscribe dijalankan=>`, store.getState())
);

store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
unsub();
store.dispatch({ type: BUY_SHOES });

console.log(store.getState());

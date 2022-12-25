const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// action
const BUY_SHOES = "BUY_SHOES";
const BUY_GLOVES = "BUY_GLOVES";

// State
const initialShoes = {
    stock: 50,
};
const initialGloves = {
    stock: 20,
};

// reducer
const shoesReducer = (state = initialShoes, action) => {
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

const glovesReducer = (state = initialGloves, action) => {
    switch (action.type) {
        case BUY_GLOVES:
            return {
                ...state,
                stock: state.stock - 2,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducer({
    shoes: shoesReducer,
    gloves: glovesReducer,
});

// const storeShoes = createStore(shoesReducer);
// const storeGloves = createStore(glovesReducer);
const store = createStore(rootReducer);

const unsub = store.subscribe(() =>
    console.log(`subscribe dijalankan=>`, store.getState())
);

// DISPATCH SHOES
store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
// unsub();

// DISPATCH GLOVES
store.dispatch({ type: BUY_GLOVES });

console.log(store.getState());

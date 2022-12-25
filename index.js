const redux = require("redux");
const createStore = redux.createStore;

// action
const BUY_SHOES = "BUY_SHOES";
const BUY_GLOVES = "BUY_GLOVES";

// State
const initialShoes = {
    stock: 50,
};
const initialGloves = {
    stock: 50,
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

const storeShoes = createStore(shoesReducer);
const storeGloves = createStore(glovesReducer);

const unsub = storeShoes.subscribe(() =>
    console.log(`subscribe dijalankan=>`, storeShoes.getState())
);

// DISPATCH SHOES
storeShoes.dispatch({ type: BUY_SHOES });
unsub();
storeShoes.dispatch({ type: BUY_SHOES });

// DISPATCH GLOVES
storeGloves.dispatch({ type: BUY_GLOVES });

console.log(storeShoes.getState());
console.log(storeGloves.getState());

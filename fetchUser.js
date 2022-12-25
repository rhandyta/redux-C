const redux = require("redux");
const createStore = redux.createStore;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const middlewareThunk = require("redux-thunk").default;

// Action
const FETCH_USER_REQ = "FETCH_USER_REQ";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

// State
const initialUser = {
    loading: false,
    user: [],
    error: "",
};

// function action

const fetchUserReq = () => {
    return {
        type: FETCH_USER_REQ,
    };
};
const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user,
    };
};
const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error,
    };
};

// reducer

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case FETCH_USER_REQ:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case FETCH_USER_ERROR:
            return {
                loading: false,
                user: [],
                error: action.payload,
            };
    }
};

const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserReq());
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                dispatch(fetchUserSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchUserError(err.message));
            });
    };
};

const store = createStore(userReducer, applyMiddleware(middlewareThunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());

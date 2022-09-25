const { createStore, applyMiddleware } = require("redux");

const { delayActionMiddleware } = require("./middlewares");
//intial state
const initialState = {
    todos: [],
}

//reducer 
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.playload,
                    },
                ],
            };
        case "todo/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.playload],
            };
        default:
            break;
    }
}

//store 
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware));

//subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch action
store.dispatch({
    type: "todos/todoAdded",
    payload: "Learn payload from LWS",
});


/*
    output:
    { todos: [ { title: undefined } ] }
*/

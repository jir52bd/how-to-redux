import { applyMiddleware, createStore } from "redux";
// import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";

//create our first midelware
const myMiddleware = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Store: ${JSON.stringify(store.getState())}`);

    const upCommingState = [action].reduce(rootReducer, store.getState());
    

    console.log(`Upcomming State: ${JSON.stringify(upCommingState)}`);

    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(myMiddleware));

export default store;
//select dom element
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

//action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
    return {
        type: INCREMENT,
        playLoad: value,
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        playLoad: value,
    }
}


//initial state 
const initialState = {
    value: 0,
}

//create reducer function
function counterReducer(state = initialState, action) {
    if(action.type === INCREMENT){
        return{
            ...state,
            value: state.value + action.playLoad,
        };

    }else if(action.type === DECREMENT){
        return{
            ...state,
            value: state.value - action.playLoad,
        };
    }else {
        return state;
    }
}


//create store
const store = Redux.createStore(counterReducer);

//create render function to get state
const render = () => {
    const state = store.getState(); // to get initial state value
    counterEl.innerText = state.value.toString();
}


//update UI initially
render();

//subscribe store rander
store.subscribe(render);


//button click listener
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(5));
})


decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
})







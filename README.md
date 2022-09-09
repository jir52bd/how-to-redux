
 <p align="center">
    <h3 align="center">কেন Reducers কে reducers বলা হয় ?</h3>
</p>

Reduce অর্থ হলো ছোট করে নিয়ে আসা।  Reducer মূলত এসেছে JavaScript এর  ```reducer.array()``` function এর কনসেপ্ট টা কে কাজে লাগিয়েছে ।  Array reducer একটা বড় Array কে সিঙ্গেল ভ্যালুতে রিডিউস করে নিয়ে আসে। 

```ruby
let array = [1, 2, 3, 4, 5];

console.log(
    array.reduce((previousResult, currentValue) => {
        return previousResult + currentValue;
    }, 0)
);

//output: 15

```
তেমনি, রিডাক্সের ```reducer function```, actions গুলোকে reduce করে ```updateState``` রিটার্ন করে।

```ruby
const actions = [
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
];

const initialState = {
    value: 0,
};

const counterReducer = (state, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

const finalResult = actions.reduce(counterReducer, initialState);

console.log(finalResult);

//output: { value: 2}  // 1+1+1-1 > 2
```

const state = {
    value: 5,
};

function impure(multipal){
    state.value = state.value * multipal;
}

impure(5);

console.log(state);

impure(10);

console.log(value);


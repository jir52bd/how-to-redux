let array = [1, 2, 3, 4, 5];

console.log(
    array.reduce((previousResult, currentValue) => {
        return previousResult + currentValue;
    }, 0)
);

//output: 15


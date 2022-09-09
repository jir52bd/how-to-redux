//variable premative value

let test = 5;

let test2 = test;

console.log(test);
console.log(test2);

//output 5, 5

test = 6;
 console.log(test);
 console.log(test2);

 //output 6, 5

 //arrays obects that are mutabil
const array = [1, 5, 8];

const array2 = array;

console.log(`array = [${array}]`);
console.log(`array2 = [${array2}]`);

// output :array = [1, 5, 8]
//         array2 = [1, 5, 8]

array2[1] = 10;

console.log(`array2 = [${array2}]`);
console.log(`array = [${array}]`);

// output :array2 = [1, 10, 8]
//         array = [1, 10, 8]


//in Resux

const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 6,
    },
};


// create reducer function
function counterReducer(state = initialState, action) {
if (action.type === TEST) {
        const updatedState = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,
            },
        };

        return updatedState;
    } else {
        return state;
    }
}



















/* eslint-disable no-unused-vars */

let foo;

foo = [0];
foo = [
    0,
    1,
];
foo = [
    0,
    1,
    2,
];
foo = [];

foo = [
    {
        "bar": 1,
        "zaz": 2,
    },
];

// array-bracket-newline error
foo = [
];

// array-bracket-newline error
foo = [
    1,
];

// array-bracket-newline error
foo = [1,
];

// array-bracket-newline error
foo = [
    1,];

// array-bracket-newline error
foo = [1, 2];

// array-bracket-spacing error
foo = [ 1 ];

// array-bracket-spacing error
foo = [ 1, 2 ];

// array-element-newline error
foo = [
    1, 2,
]

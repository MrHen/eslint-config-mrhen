/* eslint-disable no-unused-vars */

let foo;

// object-bracket-newline error
foo = {
};

// object-bracket-newline error
foo = { "foo": 0 };

// object-bracket-newline error
foo = { "foo": 0,
};

// object-bracket-newline error
foo = {
    "foo": 0 };

// object-bracket-newline error
foo = { "foo": 0, "bar": 1 };

// object-element-newline error
foo = {
    "foo": 0, "bar": 1,
};

// object-curly-newline error
const { beta } = foo;

// prefer-destructuring error
const alfa = foo.alfa;

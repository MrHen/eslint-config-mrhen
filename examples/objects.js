/* eslint-disable no-unused-vars */

let foo;

foo = {
    foo: 0,
};
foo = {
    foo: 0,
    bar: 1,
};
foo = {
    foo: 0,
    bar: 1,
    zaz: 2,
};
foo = {};

// object-bracket-newline error
foo = {
};

// object-bracket-newline error
foo = { foo: 0 };

// object-bracket-newline error
foo = { foo: 0,
};

// object-bracket-newline error
foo = {
    foo: 0 };

// object-bracket-newline error
foo = { foo: 0, bar: 1 };

// object-element-newline error
foo = {
    foo: 0, bar: 1,
};

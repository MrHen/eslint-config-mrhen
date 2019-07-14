const foo = [
    1,
    2,
    3,
];

function plusOne(n) {
    return n + 1;
}

foo.map(plusOne).map(plusOne);

foo.map(plusOne)
    .map(plusOne);

foo.map(plusOne)
    .map(plusOne);

foo.flatMap((bar) => { return bar; });

// unicorn/prefer-flat-map error
foo.map((bar) => { return bar; }).flat();

// dot-location error
foo.map(plusOne).
    map(plusOne);

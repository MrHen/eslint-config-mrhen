const foo = [
    1,
    2,
    3,
];

foo
    .map((value) => {
        return value;
    })
    .map((value) => {
        return value;
    });

foo("alfa", "beta");

foo(
    "alfa",
    "beta",
    "charlie",
);

foo(
    "alfa",
    {
        beta: "beta",
        charlie: "charlie",
    },
    "delta",
);

foo({
    beta: "beta",
    charlie: "charlie",
});

foo("alfa", {
    beta: "beta",
    charlie: "charlie",
});

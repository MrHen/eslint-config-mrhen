const STATUS_OKAY = 200;

let response;
let status;
let numbers = [0, 1, 2, 3, 4, 5];
let number = 0;

response = {
    status: STATUS_OKAY,
};

status = STATUS_OKAY;
numbers = number[2];
number += 1;

// no-magic-numbers error
response = {
    status: 404,
};

// no-magic-numbers error
status = 404;

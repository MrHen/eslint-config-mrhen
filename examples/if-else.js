function alfa(foo) {
    if (foo === 'foo') {
        return 'foo';
    }
    if (foo === 'bar') {
        return 'bar';
    }

    return 'zaz';
}

// no-else-return error
function beta(foo) {
    if (foo === 'foo') {
        return 'foo';
    } else if (foo === 'bar') {
        return 'bar';
    } else {
        return 'zaz';
    }
}

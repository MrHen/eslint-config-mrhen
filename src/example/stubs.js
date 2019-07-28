export const loadData = function() {
    return Promise.resolve({
        "hello": "world",
    });
};

export const updateData = function(options) {
    const {
        hello,
    } = options || {};

    return Promise.resolve({
        hello,
    });
};

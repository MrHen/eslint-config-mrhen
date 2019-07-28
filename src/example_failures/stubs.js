export const loadData = function loadData() {
    return Promise.resolve({
        "hello": "world",
    });
};

export function updateData(options) {
    const {
        hello,
    } = options || {};

    return Promise.resolve({
        hello,
    });
};

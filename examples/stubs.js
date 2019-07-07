export function loadData() {
    Promise.resolve({
        'hello': 'world',
    });
};

export function updateData(options) {
    const {
        hello,
    } = options || {};

    Promise.resolve({
        hello,
    });
};

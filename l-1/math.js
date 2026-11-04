function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

module.exports = {
    addFn: add,
    subFn: sub
};

// second way to export
// exports.add1 = (a,b)=>a+b;
// exports.sub1 = (a,b)=>a-b;
module.exports = function reverse (n) {
    let str = String(n);
    let result = '';

    if (n < 0)
        str = str.slice(1);

    for (let i = 0; i < str.length; i++){
        result += str.at(-1);
        str = str.slice(0, -1);
    }
    result += str.at(-1);

    return (Number(result));
}
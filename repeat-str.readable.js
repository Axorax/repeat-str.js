function repeatStr(times = 1, input = " ") {
    if (typeof times !== "number" || !Number.isInteger(times)) {
        throw new TypeError("The first argument must be a number.");
    }
    if (!Array.isArray(input) && typeof input !== "string") {
        throw new TypeError("The second argument must be a string or an array.");
    }
    if (Array.isArray(input)) {
        return input.map((item) => item.repeat(times));
    } else {
        return input.repeat(times);
    }
}

// Examples:
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// console.log(repeatStr(30, "hello"))
// console.log(repeatStr(30, ["hello", "hi"]))
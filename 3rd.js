function getsum(num1, num2, num3) {
    if (num2 === void 0) { num2 = 0; }
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
}
function avg(a, b, c) {
    return (a + b + c) / 3;
}
function fullname(fn, ln) {
    if (ln == undefined) {
        return fn;
    }
    return fn + ln;
}
var fname = "rahul";
var lname = "kumar";
console.log(getsum(45, 67, 34));
console.log(getsum(45, 48));
console.log(fullname(fname));
console.log(fullname(fname, lname));

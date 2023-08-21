"use strict";
//pop function
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
    a.pop();
}
console.log("ARRAY WITH POP FUNCTION", a);
// push function
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
    b.push(111);
}
console.log("ARRAY WITH PUSH FUNCTION", b);
// shift function
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
    c.shift();
}
console.log("ARRAY WITH SHIFT FUNCTION", c);
// // unshift function
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
    d.unshift(111);
}
console.log("ARRAY WITH UNSHIFT FUCNTION", d);
//splice fucntion
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
    e.splice(5, 0, 111);
}
console.log("ARRAY WITH SPLICE FUCNTION", e);

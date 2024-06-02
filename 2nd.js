var courses;
var marks;
var result;
courses = ['c++', 'c', 'java', 'python'];
marks = [56, 56, 66, 46];
var s = marks.reduce(function (k, n) { return k + n; });
var x; //object,null,tuple
x = "yes";
console.log(x);
var y;
var item; //tuple
item = ['watch', 23, true, 'black'];
console.log(courses);
console.log(marks);
console.log("Total marks " + s);
result = s > 200 ? true : false;
console.log("Pass " + result);

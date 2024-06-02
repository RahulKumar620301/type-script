let courses:string[];
let marks:number[];
let result:boolean;

courses=['c++','c','java','python'];
marks=[56,56,66,46]
let s=marks.reduce((k,n)=>k+n)




let x:any; //object,null,tuple
x="yes";
console.log(x)




let y:number|boolean;





let item:[string,number,boolean,string|number];//tuple
item=['watch',23,true,'black']


console.log(courses)
console.log(marks)
console.log("Total marks "+s)
result=s>200?true:false;
console.log("Pass "+result);
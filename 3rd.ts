function getsum(num1:number,num2:number=0,num3:number=0):number{
	return num1+num2+num3;
}
function avg(a:number,b:number,c:number):number{
	return (a+b+c)/3;
}

function fullname(fn:string,ln?:string):string{
	if(ln==undefined)
	{
		return fn;
	}
	return fn+ln;
}

let fname:string="rahul";
let lname:string="kumar";
console.log(getsum(45,67,34))
console.log(getsum(45,48))
console.log(fullname(fname))
console.log(fullname(fname,lname))
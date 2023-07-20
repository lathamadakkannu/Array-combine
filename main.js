var a=[10,15,30,46,78,37,29];
document.write("a=[10,15,30,46,78,37,29] "+"<br>"+"<br>");
var c=[45,78,23];
document.write("a=[45,78,23] "+"<br>"+"<br>");
	for(let i=0; i<c.length; i++){
		a.push(c[i]);
	}
	console.log(a);
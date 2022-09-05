let btn= document.getElementById('btn');

btn.addEventListener('click',function(){
	let numOne = document.getElementById('numOne').value;
	let numTwo = document.getElementById('numTwo').value;


	if (numOne==numTwo) {
		document.getElementById('checkValue').innerHTML = "<span style='color:red'>Both Number Are Equal</span>";
	}else if (numOne<numTwo) {
		document.getElementById('checkValue').innerHTML ="<span style='color:red'>"+numOne+"</span>" + " Is Less than " +"<span style='color:green'>" +numTwo+"</span>";
	}else{
		document.getElementById('checkValue').innerHTML ="<span style='color:red'>"+numOne+"</span>" + " Is Greater than " +"<span style='color:green'>" +numTwo+"</span>" ;
	}
	
});
function calcultor(){
    var firstNo = document.getElementById('firstNumber');
	var secondNo = document.getElementById('secondNumber');
	var operation = document.getElementById('Operations');
	
	var tets = document.getElementsByClassName('ifd');
	
	var result;
	
	
	console.log("Class Name is " + tets.value)
	console.log("operation" + operation.value)

	if(operation.value === "add"){
		result = firstNo.valueAsNumber + secondNo.valueAsNumber;
	}else if(operation.value === "substract"){
		result = firstNo.valueAsNumber - secondNo.valueAsNumber;
	}else if(operation.value === "multiply"){
		result = firstNo.valueAsNumber * secondNo.valueAsNumber;
	}else if(operation.value === "divide"){
		result = firstNo.valueAsNumber / secondNo.valueAsNumber;
	}else{
		alert("something went wrong, please try again.");
	}
	
	console.log("Result is " + result)
	
    document.getElementById('result').innerHTML = result;
	
}

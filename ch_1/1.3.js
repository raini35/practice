var ab = "hello" 
var ba = "lleho"

function permutation_check(a, b){
	var list_array = {}; 
	var list_array2 = {}; 
	if(a.length != b.length) {
		return false;
	}
	
	for(var i = 0; i < a.length; i++) {
		var num = a.charCodeAt(i)
		console.log(num); 
		if(num in list_array) {
			list_array[num] = list_array[num] + 1; 
		}
		else {
		list_array[num] = 1; 
		}
	}
	
	for(var h = 0; h < b.length; h++) {
		var num2 = b.charCodeAt(h)
		console.log(num2); 
		if(num2 in list_array2) {
			list_array2[num2] = list_array2[num2] + 1; 
		}
		else {
		list_array2[num2] = 1; 
		}
	}
	
	//ROAD BLOCK: 
	//IN ORDER TO DO THIS I WOULD NEED TO BE ABLE TO COMPARE 
	//HASH TABLES - JAVASCRIPT DOES NOT HAVE THAT IMPLEMENTATION 
	//AND IT WOULD REQUIRE A LOT OF CODE
	 
	 if(list_array == list_array2) {
		return true; 
	}
	else {
		return false; 
	}
	
}

//Two ways to do this: 
//1. Sort each string and then compare it - Nice and simple 
//2. Treat characters as ascii values and then compare the counts 
function corrected_permutation_check(a, b){
	var list_array = {}; 
	var list_array2 = {}; 
	if(a.length != b.length) {
		return false;
	}
	
	for(var i = 0; i < a.length; i++) {
		var num = a.charCodeAt(i)
		list_array[num]++; 
	}
	
	for(var h = 0; h < b.length; h++) {
		var num2 = b.charCodeAt(h)
		if(--list_array[num2] < 0) {
			return false;  
		}
		
	}
	
	return true; 
	
}
var truth = permutation_check(ab, ba); 
var truth2 = corrected_permutation_check(ab, ba); 
console.log(truth);
console.log(truth2);  


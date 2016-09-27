//Used recursion to reverse the string
var reverse_string = function(string) {
	if(string.length <= 1)
		return string; 
	else 
		return reverse_string(string.substring(1)) + string[0]; 
}

var string = reverse_string("Hello"); 

console.log(string); 

//Used a stack to reverse the string
function reverse_string_two(string) {
	var temp = string.split(""); 
	var reverse_string = [];
	var to_add; 
	 
	while(temp.length) {
		to_add = temp.pop(); 
		reverse_string.push(to_add); 
		
	}

	return reverse_string.join(''); 
}

var string2 = reverse_string_two("ooool"); 
console.log(string2); 
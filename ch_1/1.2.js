var reverse_string = function(string) {
	if(string.length <= 1)
		return string; 
	else 
		return reverse_string(string.substring(1)) + string[0]; 
}

var string = reverse_string("Hello"); 

console.log(string); 
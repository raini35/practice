function check_uniqueness_of(string) {
	
	//ASCII only has 256 characters
	if(string.length > 256) {
		return false; 
	}
	
	var bool_array = []; 
	
	for(var i = 0; i < string.length; i++) {
	
		var val_to_check = string.charCodeAt(i); 
		
		if(bool_array[val_to_check]) {
			return false; 
		}
		
		bool_array[val_to_check] = true; 
		
	}
	
	return true; 
}

var sample_string = "oo"
var val = check_uniqueness_of(sample_string); 

console.log(val); 
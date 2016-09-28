var string = "abcd"; 
var output = ""; 
var array = string.split(''); 
var same = true; 
var hash = {}; 

for(var i = 0; i < array.length; i++) {
	if(hash[array[i]]) {
		hash[array[i]]++; 
	}
	else {
		hash[array[i]] = 1;
	}

}

for (var key in hash) {
	if (hash[key] > 1) {
		same = false; 
	}
	
	output = output + key + hash[key]; 
}

if(same) {
	console.log(string); 
}
else {
	console.log(output); 
}


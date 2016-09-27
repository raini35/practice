var string = "Mr. John Smith  "; 
var stack = [];  
var changed_stack = []; 

for(var i = 0; i < string.length; i++) {
	stack.push(string[i]); 

}

while(stack.length) {
	var to_add = stack.pop(); 
	if (to_add == ' ')	{
	changed_stack.push('%20'); 
	}
	else { 
	changed_stack.push(to_add); 
	}

}

changed_stack = changed_stack.reverse();

while(changed_stack[changed_stack.length - 1] == "%20") {
	
	changed_stack.pop(); 
}
changed_stack = changed_stack.join('');
 
console.log(changed_stack); 
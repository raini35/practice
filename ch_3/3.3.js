function StackofStacks(size) {
	this.stack = [[]]; 
	this.size = size; 
}

StackofStacks.prototype.add_stack = function() {
	this.stack.push([]); 
}

StackofStacks.prototype.push = function(value) {
	if(this.stack.length == 0) {
		this.stack[0].push(value); 
		return;
	}
	else {
		var last = this.stack.length - 1; 
		if(this.stack[last].length == this.size) {
			this.add_stack();  
			last = last + 1; 
			this.stack[last].push(value); 
		}
		else {
			this.stack[last].push(value); 
		}
		
		return; 
	}
	
}

StackofStacks.prototype.pop = function() {
	var last = this.stack.length - 1; 
	if(this.stack.length == 0) {
		console.log("Error: Cannot pop an empty Stack."); 
		return;
	}
	else {
		var value = this.stack[last].pop(); 
		
		if(last !== 0 && this.stack[last].length == 0)
			this.stack.pop(); 
		
		
		return value; 
	}
	
}

var hello = new StackofStacks(10); 
hello.pop();
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
hello.push(5);
console.log(hello.stack[0]); 
hello.pop();
hello.pop();
hello.pop();

console.log(hello.stack); 

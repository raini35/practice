function MyQueue() {
	this.stackNew = []; 
	this.stackOld = []; 
	this.size = this.stackNew.length + this.stackOld.length; 
}

MyQueue.prototype.add = function(value) {
	this.stackNew.push(value); 
	return; 
}

MyQueue.prototype.shiftStacks = function() {
	if(this.stackOld.length == 0) {
		while(this.stackNew.length !== 0) {
			this.stackOld.push(this.stackNew.pop()); 
		}
	}
}

MyQueue.prototype.remove = function() {
	this.shiftStacks(); 
	this.stackOld.pop(); 
	return 
}


MyQueue.prototype.peek = function() {
	this.shiftStacks(); 
	return this.stackOld.pop(); 
}

var hello = new MyQueue();
hello.add(5);
hello.add(4);
hello.add(3);
hello.add(2);
hello.add(1);
console.log(hello);
console.log(hello.remove());
console.log(hello);
console.log(hello.remove());
console.log(hello);
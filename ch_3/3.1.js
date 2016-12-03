//STACKS & QUEUES
/*SOLUTION USING JAVA
int stackSize = 100; 
int[] array = new int [stackSize * 3]; 
int[] positionOfTopFor = {-1, -1, -1};

int accessTopOf(int stackNum) {
	return stackNum * stackSize + stackPointer[stackNum];
}

void push(int stackNum, int value) throws Exception {
	
	if(positionofTopFor[stackNum] + 1 >= stackSize) {
		throw new Exception("Out of space."); 
	}
	
	positionOfTopFor[stackNum]++; 
	array[accessTopOf(stackNum)] = value; 
}

int pop(int stackNum) throws Exception {
	if(positionOfTopFor[stackNum] == -1) {
		throw new Exception("Trying to pop an empty stack."); 
	}
	
	int value =array[positionOfTopFor(stackNum)]; 
	array[accessTopOf(stackNum)] = 0; 
	positionOfTopFor[stackNum]--; 
	return value; 
}

int peek(int stackNum) {
	int index = accessTopOf(stackNum); 
	return array[index]; 
}

boolean isEmpty(int stackNum) {
	return accessTopOf[stackNum] == -1; 
}
*/

//JAVASCRIPT VERSION
function Stack(size) {
	this.stackSize = size; 
	this.array = [];
	this.positionOfTopFor = [-1, -1, -1]; 
}
//FUNCTION TO CALCULATE THE POSITION OF THE TOP OF THE STACK
//input: which stack to access
//output: position to calculate the new index of top 
Stack.prototype.getIndexOfTopFor = function(stackNum) {
	//Not adding one after call to psoitionOfTopFor is based
	//on my addition to increment the top before calling 
	//changeIndexOfTopFor()
	//Look at push function for more details
	return stackNum * this.stackSize + this.positionOfTopFor[stackNum]; 
}
//FUNCTION TO ADD A VALUE TO THE RIGHT STACK 
//input: which stack to access and value
//output: none
//exceptions: is stack full?
Stack.prototype.push = function (value, stackNum) {
	if(this.getIndexOfTopFor[stackNum] >= -1) 
		return console.log("Out of space.");
		
	this.positionOfTopFor[stackNum]++; 
	this.array[this.getIndexOfTopFor(stackNum)] = value; 
	return;
	
}

//FUNCTION TO REMOVE THE TOP OF THE STACK 
//input: which stack to access
//exceptions: is stack empty?
Stack.prototype.pop = function(stackNum) {
	if(this.positionOfTopFor[stackNum] == -1) 
		return console.log("Empty stack.");
	
	var value = this.array[this.getIndexOfTopFor(stackNum)] 
	this.array[this.getIndexOfTopFor(stackNum)] = 0; 
	this.positionOfTopFor[stackNum]--;
	
	return;
}

//FUNCTION TO SEE IF SPECIFIC STACK IS EMPTY 
//input: which stack to access
Stack.prototype.isEmpty = function (stackNum) {
	return this.positionOfTopFor[stackNum] == -1;
}
//FUNCTION TO RETURN THE TOP OF A CERTAIN STACK 
//exceptions: is stack empty? 
Stack.prototype.topOf = function (stackNum) {
	var index = this.getIndexOfTopFor(stackNum);
	return this.array[index];
}

var hello = new Stack(100);
console.log(hello);
hello.push(3, 0);
hello.push(3, 0);
hello.push(3, 0);
hello.pop(0);
hello.pop(1);
console.log(hello.topOf(0));
console.log(hello);
console.log(hello.isEmpty(0));
console.log(hello.isEmpty(1));
console.log(hello.isEmpty(2));
hello.push(3, 0);
console.log(hello);
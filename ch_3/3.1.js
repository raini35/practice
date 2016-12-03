//STACKS & QUEUES
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


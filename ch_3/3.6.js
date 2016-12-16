function SortStack() {
	this.unsorted = []; 
	this.sorted = []; 
}

SortStack.prototype.push = function(value) {
	if(this.sorted.length == 0) {
		this.sorted.push(value); 
		return;
	}
	else {
		this.lookForTheSpotToPlace(value); 
		this.sorted.push(value); 	
		this.putBackValues(); 
	} 	
}

SortStack.prototype.peekAtTopOfSortList = function() {
	return this.sorted[this.sorted.length - 1]; 
}

SortStack.prototype.lookForTheSpotToPlace = function(value) {
	while(value < this.peekAtTopOfSortList()) {
		var biggerValue = this.sorted.pop(); 
		this.unsorted.push(biggerValue);
	}
	
	return;
}
SortStack.prototype.putBackValues = function() {
	while(this.unsorted.length !== 0) {
		var value = this.unsorted.pop(); 
		this.sorted.push(value);
	}
	
	return;
}

var hello = new SortStack(); 
hello.push(1); 
console.log(hello);
hello.push(2);
hello.push(5);
hello.push(0);
console.log(hello);
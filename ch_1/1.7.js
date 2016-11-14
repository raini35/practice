function check_for_zeroes(array) {
	var m = array.length; 
	var n = array[0].length; 
	
	check(array, m, n); 
}

function check(array, row, col) {
	var columns = []; 
	var rows = []; 
	for(var i = 0; i < row; i++) {
		for(var j = 0; j < col; j++) {
			if(array[i][j] == 0) {
				columns.push(j); 
				rows.push(i); 
			}
		}
	}
	
	turn_row_zero(array, rows); 
	turn_col_zero(array, columns); 
}

function turn_row_zero(array, rows) {
	for(var j = 0; j < rows.length; j++) {
		var row = rows[j]; 
		for(var i = 0; i < array[0].length; i++) {
			array[row][i] = 0; 
		}
	}
}

function turn_col_zero(array, cols) {
	for( var j = 0; j < cols.length; j++) {
		var col = cols[j]; 
		for(var i = 0; i < array.length; i++) {
			array[i][col] = 0; 
		}
	}
}	


function print_array(array) {
	var string = ""; 
	for(var i =0; i < array.length; i++) {
		for(var j = 0; j < array[i].length; j++) {
			string = string + array[i][j] + " "; 
		}
		string = string + "\n"; 
	}
	
	console.log(string); 
}
var array = [[1,1,3],[1,1,3],[1,1,3],[1,1,3],[1,0,3]]
console.log(array); 

check_for_zeroes(array); 

console.log(array);

print_array(array);  

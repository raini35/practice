var image = [
	[1, 2], 
	[3, 4], 
	
]; 

console.log(image); 

/*top -> right
right ->bottom 
bottom -> left
left -> top

[1][1] -> [1][2]
[1][2] -> [2][2]
[2][2] -> [2][1]
[2][1] -> [1][1]
*/

var top = image[0][0]
var right = image[0][1]
var bottom = image[1][1] 
var left = image[1][0]

image[0][0] = left
image[0][1] = top
image[1][1] = right
image[1][0] = bottom

console.log(image); 

//`Work from the outer most edge to the inner most edge 
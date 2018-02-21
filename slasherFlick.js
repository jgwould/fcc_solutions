//.splice() takes two paramaters so to speak. First paramater asks where the beginning of the array will be when returned. The second paramater asks HowMany will be returned. 

function slasher(arr, HowMany){
	arr.splice(0, HowMany);
	return arr;
}

slasher([1, 2, 3, 4], 2);

//so in this instance we start at the 0 place on the array and the splice function removes the first two parts of that array. 
//thus, arr returns [3, 4];
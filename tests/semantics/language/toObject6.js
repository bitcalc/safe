var x;
if (@BoolTop) 
	x = undefined;
else if (@BoolTop) 
	x = null;
else if (@BoolTop) 
	x = true;
else if (@BoolTop) 
	x = 1;
else if (@BoolTop)
	x = "str";
else
	x = {};
		
x.p = 1;
	
var __result1 = x.p;
var __expect1 = 1;

var __result2 = x.p;
var __expect2 = undefined;

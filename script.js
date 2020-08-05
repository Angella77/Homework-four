<script>
document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; // required to not refresh the page; just leave this here
} //this ends the submit function


if (result == 0) {result2 = "I don't think you studied."};
if (result == 25) {result2 = "You need to spend more time. Try again."};
if (result == 50) {result2 = "I think you could do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
document.getElementById("grade2").innerHTML = result2; 


</script>


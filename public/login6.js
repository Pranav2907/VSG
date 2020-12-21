function register() {
	if(document.getElementById("unReg").value=="" && document.getElementById("pwReg").value=="") 
	{
		alert("Please enter a username and password!")
	}
	else
	{
   		un = document.getElementById("unReg").value;    
   		pw = document.getElementById("pwReg").value;
    	alert("You are now registered!");
   	}
 }
function login() {
	if(document.getElementById("unLog").value=="" && document.getElementById("pwLog").value=="") 
	{
		alert("Please enter a username and password!");
	}
	else
	{
    	if(document.getElementById("unLog").value==un && document.getElementById("pwLog").value==pw) 
    	{
    		alert("Logged In!");
    		window.open('homepage.html')
		}
		else 
		{
    		alert("Incorrect username or password!");
		}
	}
}
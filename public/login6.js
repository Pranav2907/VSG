let username, password;
function register() {
	if (
		document.getElementById("unReg").value == "" &&
		document.getElementById("pwReg").value == ""
	) {
		alert("Please enter a username and password!");
	} else {
		username = document.getElementById("unReg").value;
		password = document.getElementById("pwReg").value;
		alert("You are now registered!");
	}
}
function login() {
	if (
		document.getElementById("unLog").value == "" &&
		document.getElementById("pwLog").value == ""
	) {
		alert("Please enter a username and password!");
	} else {
		if (
			document.getElementById("unLog").value == username &&
			document.getElementById("pwLog").value == password
		) {
			alert("Logged In!");
			window.location.href = "homepage.html";
		} else {
			alert("Incorrect username or password!");
		}
	}
}

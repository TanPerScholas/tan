function firstfocus() {
	document.getElementsByName("userid")[0].focus();
}

function userid_validation(min , max) {
	var userid_val = document.forms["registration"]["userid"].value;
	var id = document.getElementsByName("userid")[0].value;
	var n = id.length;

	if (userid_val == "") {
 		alert("User ID should not be empty!");
 		return false;
 	}
	
 
 	if (n < 5) {
 		alert ("Please enter userid with at least 5 characters");
 	}

 	else if (n > 12) {
 		alert ("Please enter userid with less than 12 characters");
 	}

 	else
 		document.getElementsByName("passid")[0].focus();
		
 }

 function passid_validation(min , max) {
	var passid_val = document.forms["registration"]["passid"].value;
	var id = document.getElementsByName("passid")[0].value;
	var n = id.length;

	if (passid_val == "") {
 		alert("User Password should not be empty");
 		return false;
 	}
	
	
	if (n < 7) {
		alert ("Please enter password with at least 7 characters");
		
	}

	else if (n > 12) {
		alert ("Please enter userid with less than 12 characters");
		
	}

	else
		document.getElementsByName("username")[0].focus();
		
}

function allLetter() {
	var username_val = document.forms["registration"]["username"].value;
	var username_txt = document.getElementsByName("username")[0].value;
	var txt_length = username_txt.length;

	if (username_val == "") {
 		alert("User's name must be filled out");
 		return false;
 	}

	else
		document.getElementsByName("email")[0].focus();
}


function ValidateEmail() {
	var email_val = document.forms["registration"]["email"].value;
	var email_txt = document.getElementsByName("email")[0].value;
	var txt_length = email_txt.length;

	if (email_val == "") {
 		alert("Email must be filled out");
		return false;
}
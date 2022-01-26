
function validation(formObj) {
	var firstName = document.getElementById('first_name').value;
	
	var lastName = formObj.last_name.value;
	
	var email = reg.email.value.trim();
	var phone = reg.phone.value.trim();
	var count = 0;
	var error = [];
	
	console.log(phone);
	
	if(firstName == '') {
		//alert('please enter your name');
		//return false;
		document.getElementById('error_firstName').innerHTML = 'please enter your first name';
		error.push('Please enter firstname');
		count++;	
	} else {
		document.getElementById('error_firstName').innerHTML = '';
	}
	
	if(lastName == '') {
		//alert('please enter your lastName');
		//return false;
		document.getElementById('error_lastname').innerHTML = 'please enter your lastname';
		error.push('Please enter Lastname');
		count++;
	} else {
		document.getElementById('error_lastname').innerHTML = '';
	}
	
	
	if(email == '') {
		//alert('please enter email id');
		//return false;
		document.getElementById('error_email').innerHTML = 'please enter your email id';
		error.push('Please add email ID');
		count++;
	} else if (email.indexOf('@') < 0) { 
		document.getElementById('error_email').innerHTML = 'please enter proper email id';
		error.push('Please add proper email ID');
		count++;
	} else {
		document.getElementById('error_email').innerHTML = '';
	}
	
	if(phone == '') {
		document.getElementById('error_phone').innerHTML = 'please enter phone number';
		error.push('Please enter Phone Number');
		count++;
	} else if( isNaN(phone) == true) {
		document.getElementById('error_phone').innerHTML = 'please enter phone number in digit';
		error.push('Please enter only digit');
		count++;
	} else if(phone.length != 10) {
		document.getElementById('error_phone').innerHTML = 'please enter phone number in 10 digit';
		error.push('Phone number limit should be 10 digit');
		count++;
	} else {
		document.getElementById('error_phone').innerHTML = '';
	}
	
	console.log(error);
	var mesg = "";
	for(let err of error) {
		mesg = mesg + '<li>' + err + '</li>';
		console.log(mesg);
	}
	//console.log(mesg);
	document.getElementById('errmes').innerHTML = mesg;
	
	
	
	if(count == 0) {
		return true;
	} else {
		return false;
	}
	
}
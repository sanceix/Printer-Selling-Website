/*java script for form validation */

function validateForm() {
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;

  //alert(messageDetails);
  if (email == "" || password == "") {
    alert("Please fill out the missing fields");
  } else {
    alert("You have signed up successfully!!");
  }
}

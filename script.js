document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pNumber = document.getElementById("pNumber").value;

  // Create a string with the form values
  var formData =
    "First Name: " +
    fName +
    "\nLast Name: " +
    lName +
    "\nPhone Number: " +
    pNumber +
    "\nEmail ID: " +
    email;

  // Display the form values in an alert window
  alert(formData);
});






/* alert(`Last Name:${lName}`);
alert(`Phone Number:${pNumber}`);
alert(`Email:${email}`); */
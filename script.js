document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var fullName = document.getElementById("fullName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  // Generate a unique code (For simplicity, this example uses a random number)
  var uniqueCode = Math.floor(Math.random() * 1000000);

  // Send notification to Munakyalo Agrofresh
  sendNotification(fullName, phoneNumber, uniqueCode);

  alert("Registration successful! Your unique code is: " + uniqueCode);
});

function sendNotification(fullName, phoneNumber, uniqueCode) {
  // Code to send notification to Munakyalo Agrofresh
  console.log("Sending notification to Munakyalo Agrofresh:");
  console.log("Name: " + fullName);
  console.log("Phone Number: " + phoneNumber);
  console.log("Unique Code: " + uniqueCode);
}

// Function to validate the syntax of the input
function validateSyntax() {
  // Get the input value
  let input = document.getElementById("petInput").value;
  let result = "";
  let dotClass = "";

  // Regular expression to match "pet_" followed by 4 digits and letters
  let regex = /^pet_[0-9]{4}[a-zA-Z]+$/g;

  // Test the input against the regular expression
  if (regex.test(input)) {
    result = "Valid Syntax";
    dotClass = "valid";
  } else {
    result = "Invalid Syntax";
    dotClass = "invalid";
  }

  // Display the result with a colored dot indicating validity
  document.getElementById(
    "result"
  ).innerHTML = `${result} <span class="${dotClass}"></span>`;
}

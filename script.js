function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = "";
  let dotClass = "";

  // Regular expression to match "pet_" followed by letters and numbers
  let regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = "Valid Syntax";
    dotClass = "valid";
  } else {
    result = "Invalid Syntax";
    dotClass = "invalid";
  }

  document.getElementById(
    "result"
  ).innerHTML = `${result} <span class="${dotClass}"></span>`;
}

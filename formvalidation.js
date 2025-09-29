function validateForm() {
  let inputs = document.querySelectorAll("#signupForm input");
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      valid = false;
      setTimeout(() => input.classList.remove("error"), 500);
    }
  });

  // ✅ Email format check
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email regex
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("error");
    valid = false;
    setTimeout(() => emailInput.classList.remove("error"), 500);
  }

  if (valid) {
    alert("User signed up");
  }
}
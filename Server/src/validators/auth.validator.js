// email validator
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); // updated regex
}

function validateAllowedDomain(email) {
  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  return allowedDomains.includes(domain);
}

// password validator
function validatePassword(password) {
  return password.length >= 6 && /\d/.test(password);
}

//username validator
function validateName(name) {
  // Name must be 3-20 characters, letters and spaces only
  const regex = /^[a-zA-Z\s]{3,20}$/;
  return regex.test(name);
}

module.exports = { validateEmail, validatePassword, validateName, validateAllowedDomain };
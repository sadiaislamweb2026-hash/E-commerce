function updateDateTime() {
  const e = document.getElementById("datetime");
  if (e) e.textContent = new Date().toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);
function addCart(name) {
  alert(name + " has been added to your cart!");
}
function signupUser(e) {
  e.preventDefault();
  alert("Registration successful! You can now login.");
  window.location.href = "login.html";
}
function loginUser(e) {
  e.preventDefault();
  alert("Login form submitted successfully!");
}

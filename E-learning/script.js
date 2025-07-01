// Shared across all pages
function openLogin() {
  document.getElementById("login-modal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signup-modal").style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function signup() {
  const user = document.getElementById("signup-username").value;
  const pass = document.getElementById("signup-password").value;
  if (user && pass) {
    localStorage.setItem(`user_${user}`, pass);
    alert("Signup successful! Please log in.");
    closeModal("signup-modal");
  } else {
    alert("Fill all fields!");
  }
}

function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;
  const savedPass = localStorage.getItem(`user_${user}`);
  if (pass === savedPass) {
    localStorage.setItem("loggedInUser", user);
    alert("Login successful!");
    window.location.reload();
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}

// Display user info on load
window.onload = () => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    document.getElementById("greet-user").textContent = `👋 Hi, ${user}`;
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) logoutBtn.style.display = "inline";
  }
};

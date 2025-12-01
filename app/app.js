import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Now you can use auth and db throughout your app

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// Single, reliable click handler for the hamburger icon.
// Uses plain DOM API to avoid duplicate jQuery handlers and selector bugs.
var hamburger = document.getElementById("hamburger-icon");
if (hamburger) {
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
  });
}

// Handle login button text change
onAuthStateChanged(auth, (user) => {
  const loginButton = document.getElementById("login");
  const loginLink = loginButton?.querySelector("a");

  if (user) {
    // User is logged in
    if (loginLink) {
      loginLink.textContent = "Logout";
      loginLink.href = "#";
    }

    // Remove old click handler and add logout handler
    loginButton?.removeEventListener("click", handleLoginClick);
    loginButton?.addEventListener("click", handleLogoutClick);
  } else {
    // User is logged out
    if (loginLink) {
      loginLink.textContent = "Login";
      loginLink.href = "pages/login.html";
    }

    // Remove old click handler and add login redirect
    loginButton?.removeEventListener("click", handleLogoutClick);
  }
});

function handleLogoutClick(e) {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully");
      window.location.href = "pages/login.html";
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}

function handleLoginClick(e) {
  // This will be removed when user logs in
}

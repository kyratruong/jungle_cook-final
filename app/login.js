import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase-config.js";

let canSeeInformation = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
    canSeeInformation = true;
  } else {
    console.log("No user is signed in.");
    canSeeInformation = false;
  }
});

document.getElementById("login-btn").onclick = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User logged in successfully");
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
};

document.getElementById("signup-btn").onclick = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;

      // 2. Update the user's profile with the display name
      updateProfile(user, {
        displayName: `${fName} ${lName}`,
      })
        .then(() => {
          // Profile updated!
          console.log("User display name updated successfully!");
        })
        .catch((error) => {
          // An error occurred while updating the profile
          console.error("Error updating profile: ", error);
        });
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
};

import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const SignInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        Swal.fire({
          title: " Welcome To Amar Doctor 😃",
          width: 600,
          padding: "3em",
          background: "#fff url()",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://c.tenor.com/4d4VLoLuZNkAAAAC/hooray-letsgo.gif")
            left top
            no-repeat
          `,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        // Sign-out successful.
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed Out successfully",
        });
        refreshPage();
      })
      .catch((error) => {
        // An error happened.
        console.log("Lipu ! A Error Found");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(`haha`, user);
      } else {
        // User is signed out
        // ...
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    SignInUsingGoogle,
    error,
    logout,
  };
};
export default useFirebase;

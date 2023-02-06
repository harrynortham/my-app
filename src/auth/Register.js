import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import validator from "validator";
import { Link } from "react-router-dom";

//CREATE PASSWORD RULES TO SUGGEST STRONG PASSWORD TO USERS
//At least one uppercase letter
//At least one lowercase letter
//At least one digit
//At least one special symbol
//Should be more than 8 characters

//SEND LINK TO VALIDATE EMAIL ADDRESS
//CREATE PAGE TO RESET FORGOTTEN PASSWORD

export default function Register() {
  //set state for fields and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    //validate user input first with validator package
    //send email verification email

    if (!validator.isEmail(email)) {
      setError("this email is invalid");
    } else if (password.length < 6) {
      setError("password too short. please enter 6 characters or more");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User signed in? Does this work when asking for email verification?
          let user = userCredential.user;
          console.log(user);
          //FUNCTION to send verification email

          //FUNCTION to create users collection in firestore and save first name / last name, use the UID as the document ID
        })
        .catch((error) => {
          //show firebase auth errors
          const errorCode = {
            "auth/email-already-in-use": "Email is already in use",
            "auth/invalid-email": "Invalid email address",
            "auth/operation-not-allowed":
              "Could not create account at this time",
            "auth/weak-password": "Password is too weak",
          };
          setError(errorCode[error.code]);
        });
    }
  }

  return (
    <div className="App bg-slate-900 p-8 h-screen">
      <div className="container mx-auto bg-slate-800 rounded-xl p-8 max-w-lg">
        <h1 className="text-slate-50 text-2xl">Registration</h1>

        {error && (
          <div
            className="bg-red-100 text-red-700 px-3 py-2 rounded mt-5"
            role="alert"
          >
            <strong className="font-bold">Error </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              type="text"
              placeholder="Email Address"
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="flex items-center justify-between mt-7">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
            >
              Create account
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-8">
          <div className="text-sm text-white ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

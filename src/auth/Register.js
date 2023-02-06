import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import validator from "validator";

export function Register(props) {
  //set State for validation and eror messages
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    //validate user input first with validator package
    //send email verification email

    createUserWithEmailAndPassword(auth, "dummy@dummy.com", "dummy1")
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ..
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(errorCode);
      });
  }

  return (
    <div className="App bg-slate-900 p-8 h-screen">
      <div className="container mx-auto bg-slate-800 rounded-xl p-8 max-w-lg">
        <h1 className="text-slate-50 text-2xl">Registration</h1>

        {/* Add conditional rendering to display success/ check email for verification email or go to dashboard message upon successful signup */}

        {error && (
          <div
            className="bg-red-100 text-red-700 px-4 py-3 rounded mt-5"
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
              id="email"
              type="text"
              placeholder="Email Address"
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
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

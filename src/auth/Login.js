import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="App bg-slate-900 p-8 h-screen">
      <div className="container mx-auto bg-slate-800 rounded-xl p-8 max-w-lg">
        <h1 className="text-slate-50 text-2xl">Log in</h1>

        <form className="mt-5">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
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
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-7">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-white ">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register{" "}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

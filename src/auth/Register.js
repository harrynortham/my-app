import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register(props) {
  //const subject = props.subject;
  //variables can be dispayed using curly braces: {subject}

  //component props, props are the same as attributes used in html, example <App subject="Clarice" />

  //https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

  //console.log(props);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <div className="App bg-slate-900 p-8 h-screen">
      <div className="container mx-auto bg-slate-800 rounded-xl p-8 max-w-lg">
        {/*<p className="text-3xl text-white font-bold mb-5">Welcome {subject}!</p>*/}
        <p className="text-slate-50 text-lg">
          React and Tailwind CSS in action
        </p>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

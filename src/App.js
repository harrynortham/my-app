import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const subject = props.subject;
  //variables can be dispayed using curly braces: {subject}

  //component props, props are the same as attributes used in html, example <App subject="Clarice" />

  //https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

  console.log(props);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Welcome {subject}!
          </p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

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
      <header className="App-header bg-slate-900">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container mx-auto bg-slate-800 rounded-xl p-8 m-10">
          <p className="text-3xl text-white font-bold mb-5">
            Welcome {subject}!
          </p>
          <p className="text-slate-50 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

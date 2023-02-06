import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Welcome to my app</h1>
      <div>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline inline-block "
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

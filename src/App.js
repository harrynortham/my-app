import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./NotFound";
import { Register } from "./auth/Register";

export default function App() {
  return (
    //find the secure way to write protected routes for logged in users
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

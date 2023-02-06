import { Route, Routes } from "react-router-dom";
import { MyApp } from "./Test";
import NotFound from "./NotFound";
import { Register } from "./auth/Register";

export default function App() {
  return (
    //find the secure way to write protected routes for logged in users
    <Routes>
      <Route path="/" element={<MyApp />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

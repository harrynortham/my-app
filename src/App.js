import { Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import "./App.css";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

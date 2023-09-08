import "./App.css";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Userhome from "./pages/user/Userhome";
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="" element={<Userhome />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

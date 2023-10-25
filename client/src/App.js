import "./App.css";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Userhome from "./Pages/user/Userhome";
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

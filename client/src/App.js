import "./App.css";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Userhome from "./Pages/user/Userhome";
import PrivateRoute from "./components/Routes/Private";
import Profile from "./Pages/user/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/home" element={<Userhome />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

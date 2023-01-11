import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={!user ? <Register /> : <Write />} />
          <Route
            path="/settings"
            element={!user ? <Register /> : <Settings />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

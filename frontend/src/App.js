import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Freelancers from "./pages/Freelancers";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public page */}
        <Route path="/" element={<Home />} />

        {/* Hirer-only pages */}
        <Route path="/freelancers" element={
          <ProtectedRoute role="hirer">
            <Freelancers />
          </ProtectedRoute>
        } />
        <Route path="/post-job" element={
          <ProtectedRoute role="hirer">
            <PostJob />
          </ProtectedRoute>
        } />

        {/* Job seeker-only page */}
        <Route path="/jobs" element={
          <ProtectedRoute role="jobseeker">
            <Jobs />
          </ProtectedRoute>
        } />

        {/* Messages - accessible by any logged-in user */}
        <Route path="/messages" element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        } />

        {/* Login/Register - public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

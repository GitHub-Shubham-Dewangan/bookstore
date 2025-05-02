import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all-books" element={<AllBooks />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/LogIn" element={<LogIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

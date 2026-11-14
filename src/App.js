import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [page, setPage] = useState(window.location.hash === "#admin" ? "admin" : "home");

  const navigate = (next) => {
    setPage(next);
    window.location.hash = next === "admin" ? "admin" : "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Navbar onNavigate={navigate} page={page} />
      {page === "booking" ? <Booking onNavigate={navigate} /> :
       page === "admin" ? <Admin onNavigate={navigate} /> :
       <Home onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
      <a className="floating-call" href="tel:09266084538" aria-label="Call clinic">☎</a>
    </div>
  );
}

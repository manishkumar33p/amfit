import React, { useState } from "react";
import "./Navbar.css";
export default function Navbar({onNavigate,page}){
 const [menuOpen,setMenuOpen]=useState(false);
 const go=(next)=>{setMenuOpen(false);onNavigate(next)};
 const homeLink=(id)=>{setMenuOpen(false);onNavigate("home");setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}),80)};
 return <><div className="topline"><div className="container topline-inner"><span>PERSONALISED SKIN & AESTHETIC CARE · NOIDA</span><a href="tel:09266084538">Call the clinic&nbsp; <b>092660 84538</b></a></div></div><header className="site-header"><div className="container nav-inner">
  <button className="brand" onClick={()=>go("home")} aria-label="Aimfit Dermaluxe home"><span className="brand-mark">A<span>✦</span></span><span className="brand-copy"><b>AIMFIT <i>DERMALUXE</i></b><small>SKIN · WELLNESS · CONFIDENCE</small></span></button>
  <button className={`mobile-menu-toggle ${menuOpen?"is-open":""}`} aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
  <nav className={menuOpen?"nav-menu nav-menu-open":"nav-menu"} aria-label="Main navigation"><button className={page==="home"?"active":""} onClick={()=>go("home")}>Home</button><button onClick={()=>homeLink("treatments")}>Treatments</button><button onClick={()=>homeLink("doctor")}>Our Doctor</button><button className={page==="admin"?"active":""} onClick={()=>go("admin")}>Admin</button><button className="mobile-book-link" onClick={()=>go("booking")}>Book Appointment&nbsp; →</button></nav>
  <button className="primary-btn nav-book" onClick={()=>go("booking")}>Book Appointment <span>↗</span></button>
 </div></header></>;
}

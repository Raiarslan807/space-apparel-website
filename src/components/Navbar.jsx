import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { waLink } from "../data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
       

<Link to="/" className="brand-mark" aria-label="Space Apparel home">
  <img
    src="/logo.png"
    alt="Space Apparel Logo"
    className="brand-logo"
  />

  <span className="brand-name">
    SPACE <b>APPAREL</b>
    <small>BUILT FOR YOUR BRAND</small>
  </span>
</Link>


        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="nav-cta" href={waLink("Hello Space Apparel, I'd like to start a custom apparel order.")} target="_blank" rel="noreferrer">
          WhatsApp Us <ArrowUpRight size={15} />
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">NAVIGATION / 01—03</span>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home <span>01</span></NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About <span>02</span></NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact <span>03</span></NavLink>
          <a className="button button-lime mobile-menu-cta" href={waLink()} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a>
          <p>SIAlKOT, PAKISTAN · CUSTOM APPAREL MANUFACTURING</p>
        </div>
      </div>
    </header>
  );
}
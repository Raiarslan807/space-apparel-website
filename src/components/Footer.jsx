import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_DISPLAY, waLink } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-watermark" aria-hidden="true">SPACE</div>
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">SPACE <span>APPAREL</span></Link>
          <p>Made to carry your brand forward.</p>
          <div className="footer-location"><MapPin size={15} /><span>{ADDRESS}</span></div>
        </div>
        <div className="footer-links-col">
          <span className="footer-label">EXPLORE</span>
          <Link to="/">Home</Link><Link to="/about">About us</Link><Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact-col">
          <span className="footer-label">GET IN TOUCH</span>
          <a href={`tel:+${"923247503009"}`}><Phone size={15} /> {PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}><Mail size={15} /> {EMAIL}</a>
          <a className="footer-wa" href={waLink()} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={16} /></a>
        </div>
      </div>
     <div className="container footer-bottom">
  <span>
    © {new Date().getFullYear()} Space Apparel. All rights reserved.
  </span>

  <span className="footer-credit">
    DESIGNED BY EPIC SOLUTIONS
    <span className="lime-dot">●</span>
  </span>
</div>
    </footer>
  );
}
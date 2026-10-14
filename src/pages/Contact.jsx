import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { ADDRESS, EMAIL, PHONE_DISPLAY, waLink } from "../data.js";

export default function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-content"><span className="eyebrow"><i /> GET IN TOUCH / LET’S TALK</span><h1>LET’S BUILD<br /><span>SOMETHING.</span></h1><p>Send us your design, quantity, and deadline. We’ll get back to you with pricing and production details.</p><div className="contact-hero-link"><span className="status-dot" /> NEW PROJECTS / OPEN FOR INQUIRIES</div></div>
        <div className="page-hero-foot"><span>CONTACT / 003</span><span>RESPONSE STARTS WITH A CONVERSATION</span></div>
      </section>

      <section className="section-light section-pad contact-details-section">
        <div className="container">
          <div className="contact-intro"><SectionHeading eyebrow="CONTACT DETAILS" title={<>LET’S GET<br />THE BALL <span>ROLLING.</span></>} /><p>Tell us a little about your project and we’ll help you work out the next step.</p></div>
          <div className="contact-cards">
            <Reveal><a className="contact-card" href={waLink()} target="_blank" rel="noreferrer"><span className="contact-icon"><Phone size={22} /></span><span className="eyebrow">PHONE / WHATSAPP</span><strong>{PHONE_DISPLAY}</strong><span className="contact-card-bottom">CHAT WITH OUR TEAM <ArrowUpRight size={16} /></span></a></Reveal>
            <Reveal delay={80}><a className="contact-card" href={`mailto:${EMAIL}`}><span className="contact-icon"><Mail size={22} /></span><span className="eyebrow">EMAIL</span><strong className="email-value">{EMAIL}</strong><span className="contact-card-bottom">SEND AN EMAIL <ArrowUpRight size={16} /></span></a></Reveal>
            <Reveal delay={160}><div className="contact-card"><span className="contact-icon"><MapPin size={22} /></span><span className="eyebrow">ADDRESS</span><strong className="address-value">{ADDRESS}</strong><span className="contact-card-bottom">SIALKOT / PAKISTAN <MapPin size={15} /></span></div></Reveal>
          </div>
          <div className="contact-note"><Clock3 size={17} /><p>For a faster quote, include your product type, decoration method, quantity, artwork, and required deadline in your first message.</p></div>
        </div>
      </section>
      <CTA contact />
    </>
  );
}
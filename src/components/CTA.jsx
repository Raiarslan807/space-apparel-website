import { ArrowUpRight } from "lucide-react";
import { waLink } from "../data.js";

export default function CTA({ contact = false }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <span className="eyebrow eyebrow-dark"><i /> YOUR NEXT DROP STARTS HERE</span>
        <h2>READY TO <span>MAKE IT REAL?</span></h2>
        <p>Send us your design, quantity, and deadline. Our team will get back to you with pricing and production details.</p>
        <div className="cta-actions">
          <a className="button button-dark" href={waLink("Hello Space Apparel, I am ready to discuss a custom apparel order. Please advise on pricing and production details.")} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <ArrowUpRight size={18} /></a>
          {contact && <a className="button button-outline-dark" href="mailto:spaceapparel89@gmail.com">EMAIL US <ArrowUpRight size={18} /></a>}
        </div>
      </div>
      <span className="cta-side-note">SPACE APPAREL / SIALKOT</span>
    </section>
  );
}
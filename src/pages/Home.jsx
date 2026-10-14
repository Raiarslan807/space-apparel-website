import { ArrowDown, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import Process from "../components/Process.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { waLink } from "../data.js";

const heroImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2200&q=90";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-image" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="hero-grid-overlay" />
        <div className="container hero-content">
          <Reveal>
            <div className="hero-kicker"><span className="status-dot" /> CUSTOM APPAREL MANUFACTURER <b>·</b> SIALKOT, PAKISTAN</div>
            <h1>BUILT FOR BRANDS<br />READY TO <span>SCALE.</span></h1>
            <p className="hero-description">Premium custom apparel and streetwear manufacturing with end-to-end support. From printing and embroidery to rhinestones, patches, and DTG, we help turn ideas into finished products.</p>
            <div className="hero-actions">
              <Link className="button button-lime" to="/contact">START YOUR ORDER <ArrowUpRight size={18} /></Link>
              <a className="button button-ghost" href={waLink()} target="_blank" rel="noreferrer">WHATSAPP US <ArrowUpRight size={18} /></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-meta container"><span>01 / 03 — BUILT WITH INTENT</span><span>SCROLL TO EXPLORE <ArrowDown size={14} /></span></div>
        <div className="hero-marquee" aria-label="Apparel services"><div className="marquee-track">{Array.from({ length: 2 }).map((_, i) => <span key={i}>SCREEN PRINTING <b>✳</b> EMBROIDERY <b>✳</b> DTG <b>✳</b> RHINESTONES <b>✳</b> DENIM PATCHES <b>✳</b> 3D PUFF <b>✳</b> HEAT PRESS <b>✳</b></span>)}</div></div>
      </section>

      <section className="about-preview section-light section-pad">
        <div className="container about-preview-grid">
          <Reveal className="about-copy">
            <SectionHeading eyebrow="WHO WE ARE" title={<>CRAFTED IN SIALKOT.<br />BUILT FOR THE WORLD.</>} />
            <p>Space Apparel is a Sialkot-based custom apparel and accessories manufacturer specializing in high-quality decoration and finishing services.</p>
            <p>From screen printing and embroidery to heat press, rhinestones, denim patches, DTG, and 3D puff printing, we combine skilled craftsmanship with modern production methods to help brands bring their vision to life.</p>
            <Link to="/about" className="text-link">MORE ABOUT SPACE APPAREL <MoveUpRight size={16} /></Link>
            <div className="mini-facts">
              <div><strong>07</strong><span>DECORATION SERVICES</span></div>
              <div><strong>01</strong><span>PARTNER FOR YOUR NEXT DROP</span></div>
            </div>
          </Reveal>
          <Reveal className="about-visual" delay={100}>
            <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1100&q=85" alt="Streetwear apparel arranged for production" loading="lazy" />
            <div className="image-stamp"><span>SA</span><small>MADE FOR<br />YOUR BRAND</small></div>
            <div className="visual-caption"><span>CRAFT / PROCESS / FINISH</span><span>PK — SKT</span></div>
          </Reveal>
        </div>
      </section>

      <section className="services-section section-dark section-pad">
        <div className="container">
          <div className="section-topline"><SectionHeading eyebrow="WHAT WE OFFER" title={<>FULL-SERVICE<br /><span className="text-lime">APPAREL DECORATION.</span></>} description="The right technique makes the whole piece. Explore our decoration services and find the right fit for your next collection." light /><span className="section-index">CAPABILITIES<br />/ 001—007</span></div>
          <ServiceGrid />
          <div className="section-bottom-link"><span>HAVE A SPECIFIC TECHNIQUE IN MIND?</span><Link to="/contact" className="text-link text-link-light">LET’S TALK <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="why-section section-light section-pad">
        <div className="container">
          <div className="why-intro"><SectionHeading eyebrow="WHY SPACE APPAREL" title={<>THE DIFFERENCE IS<br />IN THE <span>DETAILS.</span></>} /><p>Good apparel is more than a graphic on a garment. It is the quality of the finish, the consistency of every piece, and the people behind the process.</p></div>
          <div className="why-list">
            <Reveal><article className="why-row"><span className="why-number">01</span><div className="why-title"><h3>EXPERTISE &<br />INNOVATION</h3></div><p>Multiple decoration methods under one roof help us recommend a practical process for your artwork, fabric, and budget.</p><div className="why-image"><img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=750&q=85" alt="Apparel detail and garment construction" loading="lazy" /></div></article></Reveal>
            <Reveal><article className="why-row"><span className="why-number">02</span><div className="why-title"><h3>QUALITY &<br />DURABILITY</h3></div><p>From decoration details to final presentation, careful checks help keep your products aligned with the standard your brand expects.</p><div className="why-image"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=750&q=85" alt="Textile production detail" loading="lazy" /></div></article></Reveal>
            <Reveal><article className="why-row"><span className="why-number">03</span><div className="why-title"><h3>BUILT AROUND<br />YOUR BRAND</h3></div><p>Clear communication from first inquiry to order coordination keeps your requirements at the centre of the process.</p><div className="why-image"><img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=750&q=85" alt="Finished apparel collection" loading="lazy" /></div></article></Reveal>
          </div>
        </div>
      </section>

      <section className="testimonials-section section-dark section-pad">
        <div className="container">
          <div className="section-topline"><SectionHeading eyebrow="CLIENT FEEDBACK" title={<>TRUSTED BY<br /><span className="text-lime">BRANDS.</span></>} light /><span className="section-index">THE WORD<br />ON THE WORK</span></div>
          <Testimonials />
        </div>
      </section>

      <section className="process-section section-light section-pad">
        <div className="container">
          <div className="process-heading-row"><SectionHeading eyebrow="OUR PROCESS" title={<>FROM IDEA<br />TO <span>DELIVERY.</span></>} /><p>A clear, collaborative process takes your concept from first conversation to production-ready details.</p></div>
          <Process />
        </div>
      </section>
      <CTA />
    </>
  );
}
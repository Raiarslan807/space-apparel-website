import { ArrowUpRight, CheckCircle2, Layers3, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Process from "../components/Process.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";

export default function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=90')" }} />
        <div className="container page-hero-content"><span className="eyebrow"><i /> ABOUT SPACE APPAREL / EST. IN SIALKOT</span><h1>THE STORY BEHIND<br /><span>SPACE APPAREL.</span></h1><p>Custom decoration. Considered details. Apparel built around your vision.</p></div>
        <div className="page-hero-foot"><span>OUR STORY</span><span>PAKISTAN / WORLDWIDE AMBITION</span></div>
      </section>

      <section className="section-light section-pad">
        <div className="container about-main-grid">
          <Reveal className="about-main-image"><img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1100&q=85" alt="Apparel collection and textile details" loading="lazy" /><span className="photo-label">MADE WITH PURPOSE / 001</span></Reveal>
          <Reveal className="about-main-copy" delay={100}>
            <SectionHeading eyebrow="WHO WE ARE" title={<>MADE TO MOVE<br />YOUR BRAND FORWARD.</>} />
            <p>Space Apparel is a custom apparel and accessories manufacturer based in Sialkot, Pakistan. We specialize in screen printing, embroidery, heat press (vinyl or sticker), rhinestones, denim patches, DTG, and 3D puff printing.</p>
            <p>Our team is focused on craftsmanship and practical production solutions. Whether you are launching a streetwear label or growing an existing collection, we work to bring your designs to life with attention to detail and care.</p>
            <div className="about-checks"><span><CheckCircle2 size={17} /> Multiple decoration methods</span><span><CheckCircle2 size={17} /> Brand-led customisation</span><span><CheckCircle2 size={17} /> Clear order communication</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark section-pad about-values">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE STAND FOR" title={<>BUILT ON THE<br /><span className="text-lime">RIGHT DETAILS.</span></>} light />
          <div className="values-grid">
            <Reveal><article className="value-card"><Layers3 size={36} /><span className="value-num">01 / CRAFT</span><h3>EXPERTISE & INNOVATION</h3><p>Decoration options and practical guidance to match each design to the right finish.</p></article></Reveal>
            <Reveal delay={80}><article className="value-card"><ShieldCheck size={36} /><span className="value-num">02 / STANDARD</span><h3>QUALITY & DURABILITY</h3><p>Attention to materials, application, and finishing helps support consistent results.</p></article></Reveal>
            <Reveal delay={160}><article className="value-card"><Users size={36} /><span className="value-num">03 / PARTNERSHIP</span><h3>CUSTOMER SATISFACTION</h3><p>We aim to make every stage clear, from the first brief through production coordination.</p></article></Reveal>
          </div>
        </div>
      </section>

      <section className="section-light section-pad">
        <div className="container"><div className="process-heading-row"><SectionHeading eyebrow="A CLEAR ROUTE FORWARD" title={<>HOW IT <span>WORKS.</span></>} /><p>Three practical steps to get your apparel project moving.</p></div><Process /></div>
      </section>

      <section className="testimonials-section section-dark section-pad">
        <div className="container"><SectionHeading eyebrow="CLIENT FEEDBACK" title={<>WHAT CLIENTS<br /><span className="text-lime">SAY.</span></>} light /><Testimonials /></div>
      </section>
      <CTA />
    </>
  );
}
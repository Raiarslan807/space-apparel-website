import { ArrowUpRight } from "lucide-react";
import { testimonials, waLink } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <div className="testimonials-grid">
      {testimonials.map((quote, i) => (
        <Reveal key={quote} delay={i * 80}>
          <article className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>{quote}</p>
            <div className="testimonial-bottom"><span>CLIENT REVIEW</span><span className="review-dash" /></div>
          </article>
        </Reveal>
      ))}
      <p className="testimonial-note">Sample testimonial copy provided for the website brief. Verify client permission and authenticity before publishing.</p>
    </div>
  );
}
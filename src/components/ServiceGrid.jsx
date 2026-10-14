import { ArrowUpRight } from "lucide-react";
import { services, waLink } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function ServiceGrid({ compact = false }) {
  const items = compact ? services.slice(0, 6) : services;
  return (
    <div className="services-grid">
      {items.map((service, index) => (
        <Reveal key={service.number} delay={(index % 3) * 70}>
          <a className="service-card" href={waLink(`Hello Space Apparel, please share details and pricing for ${service.title}.`)} target="_blank" rel="noreferrer">
            <div className="service-image-wrap">
              <img src={service.image} alt={`${service.title} apparel decoration`} loading="lazy" />
              <span className="service-number">{service.number}</span>
              <span className="service-arrow"><ArrowUpRight size={19} /></span>
            </div>
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-link">DISCUSS THIS SERVICE <span>↗</span></span>
            </div>
            <div className="service-accent-line" />
          </a>
        </Reveal>
      ))}
    </div>
  );
}
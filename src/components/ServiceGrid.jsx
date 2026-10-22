import { useEffect, useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { services, waLink } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function ServiceGrid({ compact = false }) {
  const items = compact ? services.slice(0, 6) : services;
  const [active, setActive] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const current = active === null ? null : services[active];

  useEffect(() => {
    if (!current) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setPhotoIndex((i) => (i + 1) % current.gallery.length);
      if (event.key === "ArrowLeft") setPhotoIndex((i) => (i - 1 + current.gallery.length) % current.gallery.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [current]);

  const openGallery = (service) => {
    setActive(services.indexOf(service));
    setPhotoIndex(0);
  };

  return (
    <>
      <div className="services-grid">
        {items.map((service, index) => (
          <Reveal key={service.number} delay={(index % 3) * 70}>
            <button type="button" className="service-card service-card-button" onClick={() => openGallery(service)} aria-label={`View ${service.title} photo gallery`}>
              <div className="service-image-wrap">
                <img src={service.image} alt={`${service.title} apparel examples`} loading="lazy" />
                <span className="service-number">{service.number}</span>
                <span className="service-arrow"><ArrowUpRight size={19} /></span>
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-link">VIEW PHOTOS <span>↗</span></span>
              </div>
              <div className="service-accent-line" />
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div className="service-gallery-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
          <section className="service-gallery-modal" role="dialog" aria-modal="true" aria-label={`${current.title} photo gallery`}>
            <div className="service-gallery-heading">
              <div><span className="gallery-eyebrow">SPACE APPAREL / OUR WORK</span><h2>{current.title}</h2><p>{current.text}</p></div>
              <button type="button" className="gallery-close" onClick={() => setActive(null)} aria-label="Close gallery"><X size={22} /></button>
            </div>
            <div className="service-gallery-feature">
              <button type="button" className="gallery-nav gallery-prev" onClick={() => setPhotoIndex((i) => (i - 1 + current.gallery.length) % current.gallery.length)} aria-label="Previous photo"><ChevronLeft size={24} /></button>
              <img src={current.gallery[photoIndex]} alt={`${current.title} example ${photoIndex + 1}`} />
              <button type="button" className="gallery-nav gallery-next" onClick={() => setPhotoIndex((i) => (i + 1) % current.gallery.length)} aria-label="Next photo"><ChevronRight size={24} /></button>
              <span className="gallery-count">{String(photoIndex + 1).padStart(2, "0")} / {String(current.gallery.length).padStart(2, "0")}</span>
            </div>
            <div className="service-gallery-thumbs">
              {current.gallery.map((src, i) => <button key={src} type="button" className={`gallery-thumb ${i === photoIndex ? "is-active" : ""}`} onClick={() => setPhotoIndex(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={i === photoIndex}><img src={src} alt="" /></button>)}
            </div>
            <a className="button button-lime gallery-contact" href={waLink(`Hello Space Apparel, I would like to discuss ${current.title}.`)} target="_blank" rel="noreferrer">DISCUSS THIS SERVICE <ArrowUpRight size={18} /></a>
          </section>
        </div>
      )}
    </>
  );
}

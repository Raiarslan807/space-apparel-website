export default function SectionHeading({ eyebrow, title, description, light = false, centered = false }) {
  return (
    <div className={`section-heading ${light ? "heading-light" : ""} ${centered ? "heading-centered" : ""}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
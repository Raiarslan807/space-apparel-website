import { processSteps } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Process({ dark = false }) {
  return (
    <div className={`process-grid ${dark ? "process-dark" : ""}`}>
      {processSteps.map((step, index) => (
        <Reveal key={step.number} delay={index * 90}>
          <article className="process-step">
            <div className="process-number">{step.number}<span /></div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
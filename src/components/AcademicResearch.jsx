import { SectionTitle } from "./SectionTitle.jsx";

export function AcademicResearch({ content }) {
  return (
    <section
      className="section-band academic-research-band"
      id="academic-research"
      aria-labelledby="academic-research-title"
    >
      <div className="section-inner academic-research-layout">
        <SectionTitle
          id="academic-research-title"
          kicker={content.kicker}
          title={content.title}
        />

        <section className="research-panel" aria-labelledby="research-title">
          <h3 id="research-title">{content.panelTitle}</h3>
          <ul className="research-list">
            {content.items.map(([field, body]) => (
              <li key={field}>
                <strong>{field}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

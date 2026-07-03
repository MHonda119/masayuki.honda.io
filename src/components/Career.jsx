import { SectionTitle } from "./SectionTitle.jsx";

export function Career({ content }) {
  return (
    <section className="section-band career-band" aria-labelledby="career-title">
      <div className="section-inner">
        <div className="section-heading">
          <SectionTitle id="career-title" kicker={content.kicker} title={content.title} />
        </div>
        <ol className="timeline">
          {content.items.map(([year, role]) => (
            <li key={`${year}-${role}`}>
              <time>{year}</time>
              <span>{role}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { SectionTitle } from "./SectionTitle.jsx";

export function Mission({ content, articleUrl }) {
  return (
    <section className="section-band mission-band" id="mission" aria-labelledby="mission-title">
      <div className="section-inner mission-layout">
        <div>
          <SectionTitle id="mission-title" kicker={content.kicker} title={content.title} />
          <p>{content.body}</p>
          <a className="text-link" href={articleUrl} target="_blank" rel="noreferrer">
            {content.articleLabel}
          </a>
        </div>
        <div className="mission-points" aria-label="Mission highlights">
          {content.highlights.map((highlight) => (
            <div key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

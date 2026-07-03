import { SectionTitle } from "./SectionTitle.jsx";

export function Profile({ content }) {
  return (
    <section className="section-band profile-band" aria-labelledby="profile-title">
      <div className="section-inner two-column">
        <div>
          <SectionTitle id="profile-title" kicker={content.kicker} title={content.title} />
        </div>
        <dl className="profile-list">
          {content.items.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

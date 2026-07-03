import { SectionTitle } from "./SectionTitle.jsx";

export function Personal({ content }) {
  return (
    <section className="section-band personal-band" aria-labelledby="personal-title">
      <div className="section-inner personal-layout">
        <div>
          <SectionTitle id="personal-title" kicker={content.kicker} title={content.title} />
        </div>
        <ul className="interest-list">
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

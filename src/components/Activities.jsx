import { SectionTitle } from "./SectionTitle.jsx";

export function Activities({ content, research }) {
  return (
    <section className="section-band activities-band" id="activities" aria-labelledby="activities-title">
      <div className="section-inner split-section">
        <div>
          <SectionTitle id="activities-title" kicker={content.kicker} title={content.title} />
          <div className="activity-list">
            {content.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.list ? (
                  <ul>
                    {item.list.map((listItem) => (
                      <li key={listItem}>{listItem}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <aside className="research-panel" aria-labelledby="research-title">
          <h3 id="research-title">{research.title}</h3>
          <ul className="research-list">
            {research.items.map(([field, body]) => (
              <li key={field}>
                <strong>{field}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

import { SectionTitle } from "./SectionTitle.jsx";

export function Work({ content, keywords }) {
  return (
    <section className="section-band work-band" id="work" aria-labelledby="work-title">
      <div className="section-inner">
        <div className="section-heading wide-heading">
          <div>
            <SectionTitle id="work-title" kicker={content.kicker} title={content.title} />
          </div>
          <div className="keyword-list" aria-label="Keywords">
            {keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>

        <div className="responsibility-grid">
          {content.responsibilities.map((responsibility) => (
            <div key={responsibility}>{responsibility}</div>
          ))}
        </div>

        <div className="project-grid">
          {content.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const heroImageUrl = new URL(
  `${import.meta.env.BASE_URL}assets/sovereign-ai-cloud.png`,
  window.location.href,
).href;

export function Hero({ content }) {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <img className="hero-bg-image" src={heroImageUrl} alt="" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title">{content.title}</h1>
        <p className="hero-copy">{content.body}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#mission">
            {content.primaryAction}
          </a>
          <a className="button button-secondary" href="#contact">
            {content.secondaryAction}
          </a>
        </div>
      </div>
    </section>
  );
}

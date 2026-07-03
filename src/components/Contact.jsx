export function Contact({ content, businessEmail, personalEmail }) {
  const contactItems = [
    { label: content.businessLabel, email: businessEmail },
    { label: content.personalLabel, email: personalEmail },
  ];

  return (
    <section className="section-band contact-band" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-layout">
        <div>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="contact-title">{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <div className="contact-actions">
          {contactItems.map((item) => (
            <a className="contact-link" href={`mailto:${item.email}`} key={item.email}>
              <span>{item.label}</span>
              <strong>{item.email}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ id, kicker, title }) {
  return (
    <>
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
    </>
  );
}

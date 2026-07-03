export function Footer({ brand, content }) {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {brand}
      </span>
      <a href="#top">{content.backToTop}</a>
    </footer>
  );
}

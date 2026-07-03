import { languageOptions } from "../data/siteContent.js";

export function Header({ brand, brandMark, language, navItems, onLanguageChange }) {
  return (
    <header className="site-header" aria-label="Primary">
      <a className="brand" href="#top" aria-label={`${brand} home`}>
        <span className="brand-mark" aria-hidden="true">
          {brandMark}
        </span>
        <span>{brand}</span>
      </a>
      <nav className="site-nav" aria-label="Section navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="language-switch" role="group" aria-label="Language">
        {languageOptions.map((option) => (
          <button
            className="lang-button"
            type="button"
            key={option.code}
            aria-pressed={language === option.code}
            onClick={() => onLanguageChange(option.code)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </header>
  );
}

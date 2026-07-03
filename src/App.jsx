import { useEffect, useMemo, useState } from "react";
import { Activities } from "./components/Activities.jsx";
import { AcademicResearch } from "./components/AcademicResearch.jsx";
import { Career } from "./components/Career.jsx";
import { Contact } from "./components/Contact.jsx";
import { Education } from "./components/Education.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Mission } from "./components/Mission.jsx";
import { Personal } from "./components/Personal.jsx";
import { Profile } from "./components/Profile.jsx";
import { Work } from "./components/Work.jsx";
import { commonContent, siteContent } from "./data/siteContent.js";

const storageKey = "language";

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(storageKey);
  return savedLanguage === "ja" || savedLanguage === "en"
    ? savedLanguage
    : "ja";
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = useMemo(() => siteContent[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  return (
    <>
      <Header
        brand={commonContent.brand}
        brandMark={commonContent.brandMark}
        language={language}
        navItems={content.nav}
        onLanguageChange={setLanguage}
      />
      <main id="top">
        <Hero content={content.hero} />
        <Profile content={content.profile} />
        <Mission
          content={content.mission}
          articleUrl={commonContent.missionArticleUrl}
        />
        <Career content={content.career} />
        <Work content={content.work} keywords={commonContent.keywords} />
        <Activities content={content.activities} />
        <Education content={content.education} />
        <AcademicResearch content={content.research} />
        <Personal content={content.personal} />
        <Contact
          content={content.contact}
          businessEmail={commonContent.businessEmail}
          personalEmail={commonContent.personalEmail}
        />
      </main>
      <Footer brand={commonContent.brand} content={content.footer} />
    </>
  );
}

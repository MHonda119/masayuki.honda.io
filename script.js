const translations = {
  ja: {
    navMission: "注力領域",
    navWork: "実績",
    navActivities: "活動",
    navContact: "連絡先",
    heroEyebrow: "Sovereign AI / AI Agent / Domestic AI Cloud",
    heroPrimary: "注力領域を見る",
    heroSecondary: "連絡する",
    profileKicker: "Profile",
    careerKicker: "Career",
    workKicker: "Previous Work",
    activitiesKicker: "Activities and Education",
    personalKicker: "Interests",
    backToTop: "ページ上部へ",
  },
  en: {
    navMission: "Mission",
    navWork: "Work",
    navActivities: "Activities",
    navContact: "Contact",
    heroEyebrow: "Sovereign AI / AI Agent / Domestic AI Cloud",
    heroPrimary: "Focus Area",
    heroSecondary: "Contact",
    profileKicker: "Profile",
    careerKicker: "Career",
    workKicker: "Previous Work",
    activitiesKicker: "Activities and Education",
    personalKicker: "Interests",
    backToTop: "Back to top",
  },
};

const languageButtons = document.querySelectorAll("[data-lang-target]");
const translatedElements = document.querySelectorAll("[data-i18n]");
const yearElement = document.querySelector("#current-year");

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("language");
  if (savedLanguage === "ja" || savedLanguage === "en") {
    return savedLanguage;
  }

  return "ja";
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  window.localStorage.setItem("language", language);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langTarget === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langTarget);
  });
});

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

applyLanguage(getInitialLanguage());

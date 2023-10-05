import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transEn from "./locales/en/translation.json";
import transRu from "./locales/ru/translation.json";
import transUz from "./locales/uz/translation.json";

const resources = {
  en: { translation: transEn },
  ru: { translation: transRu },
  uz: { translation: transUz },
};

const fallbackLng = "uz";
const availableLanguages = ["uz", "ru", "en"];

i18n.use(initReactI18next).init({
  resources,
  lng: ["uz", "ru", "en"],
  interpolation: { escapeValue: false },
  fallbackLng,

  detection: {
    checkWhitelist: true,
  },

  debug: false,

  whitelist: availableLanguages,
});

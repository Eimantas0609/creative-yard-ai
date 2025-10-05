import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import ltCommon from "./locales/lt/common.json";
import ruCommon from "./locales/ru/common.json";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "lt", "ru"],
    resources: {
      en: { common: enCommon },
      lt: { common: ltCommon },
      ru: { common: ruCommon }
    },
    defaultNS: "common",
    saveMissing: true,
    returnNull: false,
    missingKeyHandler: (lng, ns, key) => {
      if (import.meta.env.DEV) {
        // Intentionally noisy in development to surface gaps in translations
        console.warn(`[i18n] Missing key: ${ns}:${key} (${lng})`);
      }
    },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lang",
      caches: ["localStorage"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


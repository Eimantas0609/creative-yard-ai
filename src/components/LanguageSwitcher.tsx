"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "lt", label: "LT" },
  { code: "ru", label: "RU" }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState(i18n.resolvedLanguage || i18n.language || "en");

  useEffect(() => {
    const handler = () => setCurrent(i18n.resolvedLanguage || i18n.language || "en");
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => {
        const isActive = current?.startsWith(lng.code);
        return (
          <button
            key={lng.code}
            onClick={() => i18n.changeLanguage(lng.code)}
            className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
              isActive ? "underline underline-offset-4 text-primary" : "text-foreground/70 hover:text-primary"
            }`}
            aria-pressed={isActive}
            aria-label={`Change language to ${lng.label}`}
          >
            {lng.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;


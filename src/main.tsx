import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, useEffect } from "react";
import i18n from "./i18n";

const Root = () => {
  useEffect(() => {
    const updateLang = (lng?: string) => {
      const language = lng || i18n.resolvedLanguage || i18n.language || "en";
      if (typeof document !== "undefined") {
        document.documentElement.lang = language;
      }
    };
    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);

  return (
    <HelmetProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </HelmetProvider>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);

import { Helmet } from "react-helmet-async";

const SeoLinks = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const path = typeof window !== "undefined" ? window.location.pathname + window.location.search : "/";
  const baseUrl = origin || "";

  const urlWithoutLangParam = (() => {
    if (typeof window === "undefined") return path;
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    return url.pathname + (url.search ? url.search : "");
  })();

  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${urlWithoutLangParam}`} />
      <link rel="alternate" hrefLang="lt" href={`${baseUrl}${urlWithoutLangParam}${urlWithoutLangParam.includes("?") ? "&" : "?"}lang=lt`} />
      <link rel="alternate" hrefLang="ru" href={`${baseUrl}${urlWithoutLangParam}${urlWithoutLangParam.includes("?") ? "&" : "?"}lang=ru`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${urlWithoutLangParam}`} />
    </Helmet>
  );
};

export default SeoLinks;


import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-foreground">{t("notFound.title")}</h1>
        <p className="text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Button asChild>
          <Link to="/">{t("notFound.returnHome")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

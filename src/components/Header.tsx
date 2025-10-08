import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

export default function Header() {
  const { t } = useTranslation("common");
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }

      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      setIsAdmin(!!data);
    };

    checkAdminRole();
  }, [user]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Signed out",
      description: "You've been signed out successfully.",
    });
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" data-lang={i18n.resolvedLanguage}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            {t("header.brand")}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.home")}
            </Link>
            <Link to="/projects" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.projects")}
            </Link>
            <Link to="/blog" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.blog")}
            </Link>
            <Link to="/services" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.services")}
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.about")}
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/70 hover:text-primary">
              {t("header.contact")}
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-sm font-medium text-primary hover:text-primary/80">
                Admin
              </Link>
            )}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {!loading && (
              user ? (
                <Button size="sm" onClick={handleSignOut}>
                  {t("header.signOut")}
                </Button>
              ) : (
                <Link to="/auth">
                  <Button size="sm">{t("header.signIn")}</Button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}



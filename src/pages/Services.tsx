import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, Globe, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Services = () => {
  const { t } = useTranslation("common");
  const services = [
    {
      icon: Palette,
      title: t("services.items.brandIdentity.title"),
      description: t("services.items.brandIdentity.description"),
      features: [
        t("services.items.brandIdentity.features.0"),
        t("services.items.brandIdentity.features.1"),
        t("services.items.brandIdentity.features.2"),
        t("services.items.brandIdentity.features.3")
      ],
      priceRange: t("services.items.brandIdentity.priceRange"),
    },
    {
      icon: Globe,
      title: t("services.items.webDevelopment.title"),
      description: t("services.items.webDevelopment.description"),
      features: [
        t("services.items.webDevelopment.features.0"),
        t("services.items.webDevelopment.features.1"),
        t("services.items.webDevelopment.features.2"),
        t("services.items.webDevelopment.features.3")
      ],
      priceRange: t("services.items.webDevelopment.priceRange"),
    },
    {
      icon: Smartphone,
      title: t("services.items.mobileAppDesign.title"),
      description: t("services.items.mobileAppDesign.description"),
      features: [
        t("services.items.mobileAppDesign.features.0"),
        t("services.items.mobileAppDesign.features.1"),
        t("services.items.mobileAppDesign.features.2"),
        t("services.items.mobileAppDesign.features.3")
      ],
      priceRange: t("services.items.mobileAppDesign.priceRange"),
    },
    {
      icon: Code,
      title: t("services.items.customDevelopment.title"),
      description: t("services.items.customDevelopment.description"),
      features: [
        t("services.items.customDevelopment.features.0"),
        t("services.items.customDevelopment.features.1"),
        t("services.items.customDevelopment.features.2"),
        t("services.items.customDevelopment.features.3")
      ],
      priceRange: t("services.items.customDevelopment.priceRange"),
    },
    {
      icon: Sparkles,
      title: t("services.items.uiux.title"),
      description: t("services.items.uiux.description"),
      features: [
        t("services.items.uiux.features.0"),
        t("services.items.uiux.features.1"),
        t("services.items.uiux.features.2"),
        t("services.items.uiux.features.3")
      ],
      priceRange: t("services.items.uiux.priceRange"),
    },
    {
      icon: Users,
      title: t("services.items.consulting.title"),
      description: t("services.items.consulting.description"),
      features: [
        t("services.items.consulting.features.0"),
        t("services.items.consulting.features.1"),
        t("services.items.consulting.features.2"),
        t("services.items.consulting.features.3")
      ],
      priceRange: t("services.items.consulting.priceRange"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" data-lang={i18n.resolvedLanguage}>
      {/* Navigation removed in favor of global Header in App */}
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              {t("services.headerTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              {t("services.headerSubtitle")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">
                        {t("services.startingFrom")} <span className="font-semibold text-primary">{service.priceRange}</span>
                      </p>
                      <Link to="/contact">
                        <Button className="w-full">{t("services.ctaGetStarted")}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{t("home.ctaSectionTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("services.ctaSectionSubtitle")}
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-glow">
                {t("services.ctaContactUs")}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

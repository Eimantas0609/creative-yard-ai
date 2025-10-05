import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const About = () => {
  const { t } = useTranslation("common");
  const values = [
    {
      icon: Heart,
      title: t("about.values.passion.title"),
      description: t("about.values.passion.description"),
    },
    {
      icon: Target,
      title: t("about.values.precision.title"),
      description: t("about.values.precision.description"),
    },
    {
      icon: Zap,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" data-lang={i18n.resolvedLanguage}>
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              {t("about.headerTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up">
              {t("about.headerSubtitle")}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">{t("about.story.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.story.p1")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.story.p2")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.story.p3")}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-warm animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t("about.values.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("about.values.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="text-center hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{t("about.stats.title")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100+", label: t("about.stats.items.projectsCompleted") },
                { number: "50+", label: t("about.stats.items.happyClients") },
                { number: "5+", label: t("about.stats.items.yearsExperience") },
                { number: "10+", label: t("about.stats.items.teamMembers") },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

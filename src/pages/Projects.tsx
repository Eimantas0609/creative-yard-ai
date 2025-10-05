import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      year: "2024",
      description: "A modern e-commerce platform with seamless user experience and robust backend.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Branding",
      year: "2024",
      description: "Complete brand identity for a sustainable fashion startup.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Design",
      year: "2023",
      description: "Intuitive mobile banking application with focus on security and UX.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "Web Development",
      year: "2023",
      description: "Beautiful website for a fine dining restaurant with online reservations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      category: "Product Design",
      year: "2023",
      description: "Comprehensive fitness tracking app with social features.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Portfolio Redesign",
      category: "Web Design",
      year: "2024",
      description: "Modern portfolio redesign for a creative agency.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
  ];

  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen flex flex-col" data-lang={i18n.resolvedLanguage}>
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              {t("projects.headerTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up">
              {t("projects.headerSubtitle")}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

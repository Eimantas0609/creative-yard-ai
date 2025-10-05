import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, Globe, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Create a unique and memorable brand identity that resonates with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
      priceRange: "$2,000 - $5,000",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build fast, responsive, and scalable websites that deliver exceptional user experiences.",
      features: ["Custom Websites", "E-Commerce", "CMS Integration", "Performance Optimization"],
      priceRange: "$3,000 - $10,000",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Design intuitive mobile applications that users love to interact with.",
      features: ["iOS & Android", "UI/UX Design", "Prototyping", "User Testing"],
      priceRange: "$4,000 - $12,000",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions to meet your specific business needs.",
      features: ["API Integration", "Database Design", "Cloud Solutions", "Maintenance & Support"],
      priceRange: "$5,000 - $20,000",
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Create beautiful and functional user interfaces with focus on user experience.",
      features: ["Wireframing", "User Research", "Interface Design", "Usability Testing"],
      priceRange: "$2,500 - $8,000",
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic guidance to help you make the right technology and design decisions.",
      features: ["Tech Strategy", "Design Audit", "Architecture Planning", "Process Optimization"],
      priceRange: "$150 - $300/hour",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              Comprehensive digital solutions tailored to bring your vision to life.
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
                        Starting from <span className="font-semibold text-primary">{service.priceRange}</span>
                      </p>
                      <Link to="/contact">
                        <Button className="w-full">Get Started</Button>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-glow">
                Contact Us Today
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

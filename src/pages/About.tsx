import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every project, treating each as our own masterpiece.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail is our forte. We craft pixel-perfect designs and clean code.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends, bringing fresh ideas and cutting-edge solutions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up">
              Where creativity meets technology to build exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creative Yard was born from a simple belief: that great design and powerful technology 
                  should work hand in hand to create experiences that matter.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a small team of passionate designers and developers has grown into 
                  a creative powerhouse, delivering exceptional digital solutions for clients worldwide.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of collaboration, the importance of user-centered design, 
                  and the magic that happens when creativity meets technical excellence.
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
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
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
            <h2 className="text-4xl font-bold text-center mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "10+", label: "Team Members" },
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

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "The Future of Web Design in 2024",
      excerpt: "Exploring emerging trends and technologies shaping the future of web design.",
      category: "Design",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building maintainable React applications at scale.",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                <Sparkles size={16} />
                Welcome to Creative Yard
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
                Crafting Digital
                <span className="text-primary"> Experiences</span>
                <br />That Inspire
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
                We blend creativity with technology to build exceptional websites, brands, and digital products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
                <Link to="/projects">
                  <Button size="lg" className="shadow-glow">
                    View Our Work
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse into our latest work and creative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredProjects.map((project, index) => (
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
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Thoughts, tutorials, and updates from our team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
              {latestPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Read More Articles
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative z-10 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Let's collaborate to bring your vision to life with beautiful design and powerful technology.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="shadow-xl">
                      Get Started Today
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

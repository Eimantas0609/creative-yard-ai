import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Design in 2024",
      excerpt: "Exploring emerging trends and technologies shaping the future of web design.",
      category: "Design",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building maintainable React applications at scale.",
      category: "Development",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Color Psychology in Branding",
      excerpt: "Understanding how colors influence emotions and drive brand perception.",
      category: "Branding",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "A comprehensive guide to creating complex layouts with CSS Grid.",
      category: "Development",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
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
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up">
              Insights, tutorials, and thoughts on design, development, and creativity.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
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
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
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

export default Blog;

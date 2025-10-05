import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'll later connect to Supabase
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen flex flex-col" data-lang={i18n.resolvedLanguage}>
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              {t("contact.headerTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up">
              {t("contact.headerSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">{t("contact.form.title")}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t("contact.form.name")}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.namePlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t("contact.form.email")}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.emailPlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          {t("contact.form.message")}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.form.messagePlaceholder")}
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        {t("contact.form.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t("contact.info.title")}</h2>
                  <p className="text-muted-foreground mb-8">
                    {t("contact.info.subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="hover:shadow-soft transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.email")}</h3>
                        <p className="text-muted-foreground">hello@creativeyard.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-soft transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.phone")}</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-soft transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.location")}</h3>
                        <p className="text-muted-foreground">123 Creative Street<br />Design City, DC 12345</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

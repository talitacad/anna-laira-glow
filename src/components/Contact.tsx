import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  PhoneCall, 
  AtSign, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: t("contact.validation.required"),
        description: t("contact.validation.message"),
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: t("contact.success.title"),
      description: t("contact.success.message"),
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: PhoneCall,
      title: t("footer.contact"),
      content: "+1 (645) 214-4009",
      action: "tel:+16452144009"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "+1 (645) 214-4009",
      action: "https://wa.me/message/H2ESX3FZHBEHJ1"
    },
    {
      icon: AtSign,
      title: "Email",
      content: "contato@draannalaira.com",
      action: "mailto:contato@draannalaira.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@dra.annalaira",
      action: "https://www.instagram.com/dra.annalaira/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-primary/10">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              {t("contact.form.title")}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact.form.phone")} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(305) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.form.email")} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.message.placeholder")}
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full font-medium">
                <Send className="w-5 h-5 mr-2" />
                {t("contact.form.submit")}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t("contact.form.disclaimer")}
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-card transition-smooth border-primary/10 cursor-pointer group hover:border-primary/30"
                  onClick={() => window.open(info.action, '_blank')}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-base mb-1">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {info.content}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Office Info */}
            <Card className="p-6 shadow-card border-primary/10">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {t("contact.info.location")}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">{t("contact.info.address")}</div>
                    <div className="text-muted-foreground text-sm">
                      1234 Biscayne Blvd, Suite 567<br />
                      Miami, FL 33132
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">{t("contact.info.hours")}</div>
                    <div className="text-muted-foreground text-sm whitespace-pre-line">
                      {t("contact.info.hours.detail")}
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-6" 
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                {t("contact.info.maps")}
              </Button>
            </Card>

            {/* Languages */}
            <Card className="p-6 shadow-card border-primary/10">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {t("contact.info.languages")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Português", "Español", "English"].map((language, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
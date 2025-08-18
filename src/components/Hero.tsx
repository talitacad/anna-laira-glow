import { Button } from "@/components/ui/button";
import { Star, MapPin, Globe } from "lucide-react";
import heroImage from "@/assets/dra-anna-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center gradient-hero pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                I help you enhance your{" "}
                <span className="text-primary">beauty naturally</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-medium">Reference in Rhinomodeling</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Português • Español • English</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Miami, FL</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Especialista em Harmonização Orofacial com foco em realçar sua beleza natural, 
              respeitando a anatomia individual de cada paciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="font-medium"
              >
                Quero agendar minha avaliação
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="font-medium"
              >
                Conheça meu trabalho
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Avaliação média</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Dra. Anna Laira - Especialista em Harmonização Facial"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
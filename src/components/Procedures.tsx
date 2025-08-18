import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Leaf, 
  Star, 
  ArrowRight,
  Timer,
  Award
} from "lucide-react";

const Procedures = () => {
  const procedures = [
    {
      icon: Heart,
      title: "Preenchimento Full Face",
      description: "Harmonização completa do rosto com ácido hialurônico, restaurando volume e definindo contornos naturais.",
      duration: "60-90 min",
      recovery: "Imediato",
      features: ["Rejuvenescimento", "Volume natural", "Definição facial"]
    },
    {
      icon: Zap,
      title: "Toxina Botulínica",
      description: "Aplicação precisa para suavizar rugas de expressão e prevenir o envelhecimento precoce.",
      duration: "30-45 min",
      recovery: "Imediato",
      features: ["Anti-aging", "Prevenção", "Resultado natural"]
    },
    {
      icon: Sparkles,
      title: "Rinomodelação",
      description: "Rinoplastia não cirúrgica para correção e harmonização do nariz sem procedimentos invasivos.",
      duration: "45-60 min",
      recovery: "24-48h",
      features: ["Sem cirurgia", "Resultado imediato", "Minimamente invasivo"]
    },
    {
      icon: Leaf,
      title: "Peeling de Fenol",
      description: "Renovação profunda da pele para tratar manchas, cicatrizes e sinais de envelhecimento.",
      duration: "60-90 min",
      recovery: "7-14 dias",
      features: ["Renovação profunda", "Anti-manchas", "Rejuvenescimento"]
    },
    {
      icon: Star,
      title: "Bioestimulador de Colágeno",
      description: "Estímulo natural da produção de colágeno para firmeza e elasticidade da pele.",
      duration: "45-60 min",
      recovery: "Imediato",
      features: ["Firmeza natural", "Longa duração", "Estímulo próprio"]
    },
    {
      icon: Award,
      title: "Emagrecimento Facial",
      description: "Técnicas avançadas para definir o contorno facial e reduzir a papada sem cirurgia.",
      duration: "60 min",
      recovery: "2-3 dias",
      features: ["Contorno definido", "Redução papada", "Resultado gradual"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="procedures" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Procedimentos Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Técnicas avançadas e personalizadas para realçar sua beleza natural 
            com segurança e resultados excepcionais.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {procedures.map((procedure, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-smooth border-primary/10 group"
            >
              <div className="space-y-4">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <procedure.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {procedure.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {procedure.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Timer className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{procedure.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{procedure.recovery}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {procedure.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-elegant rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Pronta para sua transformação?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta personalizada e descubra qual procedimento 
            é ideal para realçar sua beleza natural.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="font-medium"
          >
            Agendar Consulta
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
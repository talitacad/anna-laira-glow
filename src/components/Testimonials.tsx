import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Miami, FL",
      rating: 5,
      text: "A Dra. Anna é simplesmente incrível! Minha rinomodelação ficou perfeita, exatamente como sonhei. Resultado natural e muito profissional.",
      procedure: "Rinomodelação"
    },
    {
      name: "Isabella Rodriguez",
      location: "Coral Gables, FL",
      rating: 5,
      text: "Exceptional work! Dr. Anna understood exactly what I wanted. The full face harmonization gave me so much confidence. Highly recommend!",
      procedure: "Harmonização Full Face"
    },
    {
      name: "Fernanda Costa",
      location: "Brickell, FL",
      rating: 5,
      text: "Atendimento impecável desde a primeira consulta. A doutora é muito cuidadosa e explica tudo detalhadamente. Resultado superou minhas expectativas!",
      procedure: "Toxina Botulínica"
    },
    {
      name: "Carmen López",
      location: "Aventura, FL",
      rating: 5,
      text: "Perfecta combinación de técnica y arte. Me siento renovada y más segura. El peeling de fenol cambió completamente mi piel. ¡Gracias Dra. Anna!",
      procedure: "Peeling de Fenol"
    },
    {
      name: "Sarah Johnson",
      location: "South Beach, FL",
      rating: 5,
      text: "Professional, caring, and incredibly skilled. The collagen biostimulator gave me the natural lift I was looking for without surgery. Amazing results!",
      procedure: "Bioestimulador"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "text-primary fill-primary" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            O que dizem nossas pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Histórias reais de transformação e confiança renovada. 
            Cada sorriso é nossa maior recompensa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-smooth border-primary/10 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Procedure Tag */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.procedure}
                </div>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Pacientes Satisfeitas</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
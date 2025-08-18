import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

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
    },
    {
      name: "Ana Beatriz",
      location: "Downtown Miami, FL",
      rating: 5,
      text: "Transformação incrível! O emagrecimento facial me deu uma autoestima que eu não tinha há anos. Dra. Anna é uma artista!",
      procedure: "Emagrecimento Facial"
    }
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

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

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full w-12 h-12 shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === totalPages - 1}
              className="rounded-full w-12 h-12 shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 min-h-[400px]">
            {getCurrentTestimonials().map((testimonial, index) => (
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
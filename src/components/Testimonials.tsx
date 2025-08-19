import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

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

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="testimonials" className="py-20 gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Mobile: Single Card View */}
        <div className="block md:hidden">
          <div className="relative">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="p-6 shadow-card border-primary/10 relative overflow-hidden rounded-xl animate-fade-in">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <Quote className="w-10 h-10 text-primary" />
                      </div>

                      <div className="space-y-4 relative z-10">
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-muted-foreground leading-relaxed italic text-base">
                          "{testimonial.text}"
                        </p>

                        {/* Procedure Tag */}
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                          {testimonial.procedure}
                        </div>

                        {/* Author Info */}
                        <div className="border-t border-border pt-4">
                          <div className="font-semibold text-foreground text-base">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Dots Navigation - Only dots, no buttons */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Three Cards View */}
        <div className="hidden md:block">
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 shadow-elegant bg-background/95 backdrop-blur-sm hover:scale-110 transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 shadow-elegant bg-background/95 backdrop-blur-sm hover:scale-110 transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Cards Container */}
            <div className="overflow-hidden rounded-2xl mx-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 33.333}%)`,
                  width: `${testimonials.length * 33.333}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 px-4 w-1/3">
                    <Card className="p-6 hover:shadow-card transition-smooth border-primary/10 relative overflow-hidden h-full min-h-[320px] rounded-xl">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <Quote className="w-12 h-12 text-primary" />
                      </div>

                      <div className="space-y-4 relative z-10 h-full flex flex-col">
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-muted-foreground leading-relaxed italic flex-grow text-base">
                          "{testimonial.text}"
                        </p>

                        {/* Procedure Tag */}
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                          {testimonial.procedure}
                        </div>

                        {/* Author Info */}
                        <div className="border-t border-border pt-4 mt-auto">
                          <div className="font-semibold text-foreground text-base">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-smooth hover-scale ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card border border-primary/10 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
              <div className="text-muted-foreground text-xs sm:text-sm lg:text-base">{t("testimonials.stats.patients")}</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">98%</div>
              <div className="text-muted-foreground text-xs sm:text-sm lg:text-base">{t("testimonials.stats.satisfaction")}</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5.0</div>
              <div className="text-muted-foreground text-xs sm:text-sm lg:text-base">{t("testimonials.stats.rating")}</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">8+</div>
              <div className="text-muted-foreground text-xs sm:text-sm lg:text-base">{t("testimonials.stats.experience")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

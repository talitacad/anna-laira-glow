import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const About = () => {
  const { t } = useLanguage();
  
  const credentials = [
    {
      icon: Award,
      title: t("about.credential1.title"),
      description: t("about.credential1.desc")
    },
    {
      icon: Sparkles,
      title: t("about.credential2.title"),
      description: t("about.credential2.desc")
    },
    {
      icon: Heart,
      title: t("about.credential3.title"),
      description: t("about.credential3.desc")
    },
    {
      icon: Users,
      title: t("about.credential4.title"),
      description: t("about.credential4.desc")
    }
  ];

  const specialties = [
    t("about.specialty1"),
    t("about.specialty2"),
    t("about.specialty3"),
    t("about.specialty4"),
    t("about.specialty5"),
    t("about.specialty6")
  ];

  // Mobile carousel state for specialties
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [isSpecialtyAnimating, setIsSpecialtyAnimating] = useState(false);

  // Touch/swipe handling for specialties mobile carousel
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

    if (isLeftSwipe && currentSpecialtyIndex < specialties.length - 1) {
      nextSpecialty();
    }
    if (isRightSwipe && currentSpecialtyIndex > 0) {
      prevSpecialty();
    }
  };

  const nextSpecialty = () => {
    if (!isSpecialtyAnimating && currentSpecialtyIndex < specialties.length - 1) {
      setIsSpecialtyAnimating(true);
      setCurrentSpecialtyIndex(prev => prev + 1);
      setTimeout(() => setIsSpecialtyAnimating(false), 500);
    }
  };

  const prevSpecialty = () => {
    if (!isSpecialtyAnimating && currentSpecialtyIndex > 0) {
      setIsSpecialtyAnimating(true);
      setCurrentSpecialtyIndex(prev => prev - 1);
      setTimeout(() => setIsSpecialtyAnimating(false), 500);
    }
  };

  return (
    <section id="about" className="py-20 gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <blockquote className="text-xl font-heading italic text-primary border-l-4 border-primary pl-6">
                "{t("about.quote")}"
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description1")}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            <div className="relative">
              {/* Desktop Version - Keep original layout */}
              <div className="hidden md:block bg-card rounded-2xl p-8 shadow-card border border-primary/10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  {t("about.specialties")}
                </h3>
                <ul className="space-y-3">
                  {specialties.map((specialty, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Version - Carousel */}
              <div className="md:hidden">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">
                  {t("about.specialties")}
                </h3>
                
                {/* Mobile Carousel Container */}
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ 
                      transform: `translateX(-${currentSpecialtyIndex * 100}%)`,
                      width: `${specialties.length * 100}%`
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                        style={{ width: `${100 / specialties.length}%` }}
                      >
                        <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10 text-center min-h-[120px] flex items-center justify-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-lg font-medium">{specialty}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-6">
                  {specialties.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isSpecialtyAnimating) {
                          setIsSpecialtyAnimating(true);
                          setCurrentSpecialtyIndex(index);
                          setTimeout(() => setIsSpecialtyAnimating(false), 500);
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-smooth ${
                        index === currentSpecialtyIndex
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-smooth border-primary/10">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {credential.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {credential.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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

  // Mobile carousel state for credentials
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch/swipe handling for credentials mobile carousel
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

    if (isLeftSwipe && currentIndex < credentials.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (!isAnimating && currentIndex < credentials.length - 1) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <blockquote className="text-xl font-heading italic text-primary border-l-4 border-primary pl-6">
                "{t("about.quote")}"
              </blockquote>
              
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Professional Background
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.description1")}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Location & Languages
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.description2")}
                </p>
              </div>

              {/* Trust Signals */}
              <div className="bg-card rounded-xl p-6 border border-primary/10">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Why Choose Dr. Anna Laira?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>8+ years of specialized experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>500+ satisfied patients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Reference in non-surgical rhinoplasty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Multilingual consultations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Advanced, safe techniques</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Specialties - Enhanced with better structure */}
              <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center md:text-left">
                  {t("about.specialties")}
                </h3>
                <div className="space-y-4">
                  {specialties.map((specialty, index) => (
                    <div key={index} className="group hover:bg-muted/50 rounded-lg p-3 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <div>
                          <span className="text-muted-foreground font-medium">{specialty}</span>
                          {index === 1 && (
                            <div className="text-xs text-primary mt-1">★ Specialty Reference</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="max-w-6xl mx-auto">
            {/* Mobile: Single Card View with Carousel */}
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
                    {credentials.map((credential, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="p-6 text-center shadow-card border-primary/10 min-h-[250px] flex flex-col justify-center items-center">
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <credential.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground text-center">
                              {credential.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed text-center">
                              {credential.description}
                            </p>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-6">
                  {credentials.map((_, index) => (
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

            {/* Desktop: Four Cards View */}
            <div className="hidden md:block">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {credentials.map((credential, index) => (
                    <Card key={index} className="p-6 text-center hover:shadow-card transition-smooth border-primary/10 min-h-[250px] flex flex-col">
                      <div className="flex flex-col items-center space-y-3 flex-1">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-4">
                          <credential.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center space-y-3">
                          <h3 className="font-heading font-semibold text-foreground text-center">
                            {credential.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
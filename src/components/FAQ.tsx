import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: t("faq.q1.question"),
      answer: t("faq.q1.answer")
    },
    {
      question: t("faq.q2.question"),
      answer: t("faq.q2.answer")
    },
    {
      question: t("faq.q3.question"),
      answer: t("faq.q3.answer")
    },
    {
      question: t("faq.q4.question"),
      answer: t("faq.q4.answer")
    },
    {
      question: t("faq.q5.question"),
      answer: t("faq.q5.answer")
    },
    {
      question: t("faq.q6.question"),
      answer: t("faq.q6.answer")
    },
    {
      question: t("faq.q7.question"),
      answer: t("faq.q7.answer")
    },
    {
      question: t("faq.q8.question"),
      answer: t("faq.q8.answer")
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t("faq.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("faq.subtitle")}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="border-primary/10 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-foreground pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              {t("faq.cta.text")}
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
            >
              {t("faq.cta.link")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Award,
      title: "Cirurgiã-Dentista",
      description: "Formação em Odontologia com especialização em procedimentos estéticos"
    },
    {
      icon: Sparkles,
      title: "Harmonização Orofacial",
      description: "Especialista em técnicas avançadas de harmonização facial"
    },
    {
      icon: Heart,
      title: "Rinomodelação",
      description: "Referência em Rinoplastia Não Cirúrgica com técnicas inovadoras"
    },
    {
      icon: Users,
      title: "Marca Mayve",
      description: "Criadora da marca especializada em produtos de harmonização"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre a Dra. Anna Laira
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Uma profissional dedicada a realçar a beleza natural de cada paciente, 
              combinando expertise técnica com um olhar artístico refinado.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <blockquote className="text-xl font-heading italic text-primary border-l-4 border-primary pl-6">
                "Visa alcançar a beleza natural respeitando a anatomia individual de cada paciente."
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                Com anos de experiência em harmonização orofacial, a Dra. Anna Laira 
                é reconhecida como referência em rinomodelação e procedimentos estéticos 
                minimamente invasivos. Sua abordagem personalizada garante resultados 
                naturais que respeitam as características únicas de cada paciente.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Localizada em Miami, atende pacientes de diversas nacionalidades, 
                oferecendo atendimento em português, espanhol e inglês, sempre 
                priorizando o conforto e a segurança em todos os procedimentos.
              </p>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Especialidades
                </h3>
                <ul className="space-y-3">
                  {[
                    "Harmonização Orofacial Completa",
                    "Rinomodelação (Rinoplastia Não Cirúrgica)",
                    "Preenchimento Facial com Ácido Hialurônico",
                    "Aplicação de Toxina Botulínica",
                    "Bioestimuladores de Colágeno",
                    "Peeling Químico Especializado"
                  ].map((specialty, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{specialty}</span>
                    </li>
                  ))}
                </ul>
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
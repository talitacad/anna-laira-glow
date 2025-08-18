import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-xl font-semibold">Dra. Anna Laira</h3>
              <p className="text-sm opacity-80">Harmonização Facial</p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+1 (305) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">contato@draannalaira.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm">Miami, FL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 opacity-80" />
                <span className="text-sm">@draannalaira</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{t("footer.specialties")}</h4>
            <ul className="space-y-2">
              {[
                "Rinomodelação",
                "Harmonização Full Face",
                "Toxina Botulínica",
                "Bioestimulador de Colágeno",
                "Peeling de Fenol",
                "Emagrecimento Facial"
              ].map((service, index) => (
                <li key={index} className="text-sm opacity-80 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Dra. Anna Laira. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
              <span>Português</span>
              <span>•</span>
              <span>Español</span>
              <span>•</span>
              <span>English</span>
            </div>
          </div>
          
          <div className="text-xs opacity-60 mt-4 text-center">
            Os resultados podem variar de acordo com a individualidade de cada paciente. 
            Consulte sempre um profissional qualificado.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
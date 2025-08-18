import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const translations = {
    pt: {
      // Header
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.testimonials': 'Avaliações',
      'nav.contact': 'Contato',
      'header.cta': 'Agende sua consulta',
      
      // Hero
      'hero.title': 'Realçamos sua beleza naturalmente.',
      'hero.subtitle': '🏅 Reference in Rhinomodeling | Português • Español • English',
      'hero.languages': 'Português • Español • English',
      'hero.location': 'Miami, FL',
      'hero.description': 'Especialista em Harmonização Orofacial com foco em realçar sua beleza natural, respeitando a anatomia individual de cada paciente.',
      'hero.cta.primary': 'Quero agendar minha avaliação',
      'hero.cta.secondary': 'Conheça meu trabalho',
      'hero.stats.patients': 'Pacientes',
      'hero.stats.experience': 'Anos de experiência',
      'hero.stats.rating': 'Avaliação média',
      
      // About
      'about.title': 'Sobre a Dra. Anna Laira',
      'about.subtitle': 'Uma profissional dedicada a realçar a beleza natural de cada paciente, combinando expertise técnica com um olhar artístico refinado.',
      'about.quote': 'Visa alcançar a beleza natural respeitando a anatomia individual de cada paciente.',
      'about.description1': 'Com anos de experiência em harmonização orofacial, a Dra. Anna Laira é reconhecida como referência em rinomodelação e procedimentos estéticos minimamente invasivos. Sua abordagem personalizada garante resultados naturais que respeitam as características únicas de cada paciente.',
      'about.description2': 'Localizada em Miami, atende pacientes de diversas nacionalidades, oferecendo atendimento em português, espanhol e inglês, sempre priorizando o conforto e a segurança em todos os procedimentos.',
      'about.specialties': 'Especialidades',
      'about.specialty1': 'Harmonização Orofacial Completa',
      'about.specialty2': 'Rinomodelação (Rinoplastia Não Cirúrgica)',
      'about.specialty3': 'Preenchimento Facial com Ácido Hialurônico',
      'about.specialty4': 'Aplicação de Toxina Botulínica',
      'about.specialty5': 'Bioestimuladores de Colágeno',
      'about.specialty6': 'Peeling Químico Especializado',
      'about.credential1.title': 'Cirurgiã-Dentista',
      'about.credential1.desc': 'Formação em Odontologia com especialização em procedimentos estéticos',
      'about.credential2.title': 'Harmonização Orofacial',
      'about.credential2.desc': 'Especialista em técnicas avançadas de harmonização facial',
      'about.credential3.title': 'Rinomodelação',
      'about.credential3.desc': 'Referência em Rinoplastia Não Cirúrgica com técnicas inovadoras',
      'about.credential4.title': 'Marca Mayve',
      'about.credential4.desc': 'Criadora da marca especializada em produtos de harmonização',
      
      // Testimonials
      'testimonials.title': 'O que dizem nossas pacientes',
      'testimonials.subtitle': 'Histórias reais de transformação e confiança renovada. Cada sorriso é nossa maior recompensa.',
      'testimonials.stats.patients': 'Pacientes Satisfeitas',
      'testimonials.stats.satisfaction': 'Taxa de Satisfação',
      'testimonials.stats.rating': 'Avaliação Média',
      'testimonials.stats.experience': 'Anos de Experiência',
      
      // Contact
      'contact.title': 'Agende sua Consulta',
      'contact.subtitle': 'Dê o primeiro passo para realçar sua beleza natural. Entre em contato e vamos conversar sobre seus objetivos.',
      'contact.form.title': 'Solicite sua Avaliação',
      'contact.form.name': 'Nome completo',
      'contact.form.phone': 'Telefone',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensagem',
      'contact.form.message.placeholder': 'Conte-nos sobre seus objetivos e dúvidas...',
      'contact.form.submit': 'Enviar Solicitação',
      'contact.form.disclaimer': 'Ao enviar, você concorda em ser contatado para agendamento da consulta.',
      'contact.info.location': 'Localização e Horários',
      'contact.info.address': 'Clínica Miami',
      'contact.info.hours': 'Horário de Atendimento',
      'contact.info.hours.detail': 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 14h\nDomingo: Fechado',
      'contact.info.maps': 'Abrir no Google Maps',
      'contact.info.languages': 'Idiomas de Atendimento',
      'contact.validation.required': 'Campos obrigatórios',
      'contact.validation.message': 'Por favor, preencha nome, email e telefone.',
      'contact.success.title': 'Mensagem enviada!',
      'contact.success.message': 'Entraremos em contato em breve para agendar sua consulta.',
      
      // Footer
      'footer.description': 'Especialista em harmonização orofacial e rinomodelação em Miami. Realçando sua beleza natural com técnicas avançadas e seguras.',
      'footer.contact': 'Contato',
      'footer.specialties': 'Especialidades',
      'footer.specialty1': 'Rinomodelação',
      'footer.specialty2': 'Harmonização Full Face',
      'footer.specialty3': 'Toxina Botulínica',
      'footer.specialty4': 'Bioestimulador de Colágeno',
      'footer.specialty5': 'Peeling de Fenol',
      'footer.specialty6': 'Emagrecimento Facial',
      'footer.copyright': 'Todos os direitos reservados.',
      'footer.disclaimer': 'Os resultados podem variar de acordo com a individualidade de cada paciente. Consulte sempre um profissional qualificado.',
    },
    en: {
      // Header
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.testimonials': 'Reviews',
      'nav.contact': 'Contact',
      'header.cta': 'Schedule your consultation',
      
      // Hero
      'hero.title': 'I help you enhance your beauty naturally.',
      'hero.subtitle': '🏅 Reference in Rhinomodeling | Português • Español • English',
      'hero.languages': 'Português • Español • English',
      'hero.location': 'Miami, FL',
      'hero.description': 'Specialist in Orofacial Harmonization focused on enhancing your natural beauty, respecting the individual anatomy of each patient.',
      'hero.cta.primary': 'I want to schedule my evaluation',
      'hero.cta.secondary': 'See my work',
      'hero.stats.patients': 'Patients',
      'hero.stats.experience': 'Years of experience',
      'hero.stats.rating': 'Average rating',
      
      // About
      'about.title': 'About Dr. Anna Laira',
      'about.subtitle': 'A professional dedicated to enhancing each patient\'s natural beauty, combining technical expertise with a refined artistic eye.',
      'about.quote': 'Aims to achieve natural beauty while respecting each patient\'s individual anatomy.',
      'about.description1': 'With years of experience in orofacial harmonization, Dr. Anna Laira is recognized as a reference in rhinomodeling and minimally invasive aesthetic procedures. Her personalized approach ensures natural results that respect the unique characteristics of each patient.',
      'about.description2': 'Located in Miami, she serves patients of various nationalities, offering care in Portuguese, Spanish, and English, always prioritizing comfort and safety in all procedures.',
      'about.specialties': 'Specialties',
      'about.specialty1': 'Complete Orofacial Harmonization',
      'about.specialty2': 'Rhinomodeling (Non-Surgical Rhinoplasty)',
      'about.specialty3': 'Facial Filler with Hyaluronic Acid',
      'about.specialty4': 'Botulinum Toxin Application',
      'about.specialty5': 'Collagen Biostimulators',
      'about.specialty6': 'Specialized Chemical Peeling',
      'about.credential1.title': 'Dental Surgeon',
      'about.credential1.desc': 'Degree in Dentistry with specialization in aesthetic procedures',
      'about.credential2.title': 'Orofacial Harmonization',
      'about.credential2.desc': 'Specialist in advanced facial harmonization techniques',
      'about.credential3.title': 'Rhinomodeling',
      'about.credential3.desc': 'Reference in Non-Surgical Rhinoplasty with innovative techniques',
      'about.credential4.title': 'Mayve Brand',
      'about.credential4.desc': 'Creator of the brand specialized in harmonization products',
      
      // Testimonials
      'testimonials.title': 'What our patients say',
      'testimonials.subtitle': 'Real stories of transformation and renewed confidence. Every smile is our greatest reward.',
      'testimonials.stats.patients': 'Satisfied Patients',
      'testimonials.stats.satisfaction': 'Satisfaction Rate',
      'testimonials.stats.rating': 'Average Rating',
      'testimonials.stats.experience': 'Years of Experience',
      
      // Contact
      'contact.title': 'Schedule your Consultation',
      'contact.subtitle': 'Take the first step to enhance your natural beauty. Get in touch and let\'s talk about your goals.',
      'contact.form.title': 'Request your Evaluation',
      'contact.form.name': 'Full name',
      'contact.form.phone': 'Phone',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.message.placeholder': 'Tell us about your goals and questions...',
      'contact.form.submit': 'Send Request',
      'contact.form.disclaimer': 'By submitting, you agree to be contacted to schedule the consultation.',
      'contact.info.location': 'Location and Hours',
      'contact.info.address': 'Miami Clinic',
      'contact.info.hours': 'Office Hours',
      'contact.info.hours.detail': 'Monday to Friday: 9am to 6pm\nSaturday: 9am to 2pm\nSunday: Closed',
      'contact.info.maps': 'Open in Google Maps',
      'contact.info.languages': 'Service Languages',
      'contact.validation.required': 'Required fields',
      'contact.validation.message': 'Please fill in name, email and phone.',
      'contact.success.title': 'Message sent!',
      'contact.success.message': 'We will contact you soon to schedule your consultation.',
      
      // Footer
      'footer.description': 'Specialist in orofacial harmonization and rhinomodeling in Miami. Enhancing your natural beauty with advanced and safe techniques.',
      'footer.contact': 'Contact',
      'footer.specialties': 'Specialties',
      'footer.specialty1': 'Rhinomodeling',
      'footer.specialty2': 'Full Face Harmonization',
      'footer.specialty3': 'Botulinum Toxin',
      'footer.specialty4': 'Collagen Biostimulator',
      'footer.specialty5': 'Phenol Peeling',
      'footer.specialty6': 'Facial Slimming',
      'footer.copyright': 'All rights reserved.',
      'footer.disclaimer': 'Results may vary according to each patient\'s individuality. Always consult a qualified professional.',
    },
    es: {
      // Header
      'nav.home': 'Inicio',
      'nav.about': 'Acerca',
      'nav.testimonials': 'Testimonios',
      'nav.contact': 'Contacto',
      'header.cta': 'Agenda tu consulta',
      
      // Hero
      'hero.title': 'Resaltamos tu belleza de forma natural.',
      'hero.subtitle': '🏅 Reference in Rhinomodeling | Português • Español • English',
      'hero.languages': 'Português • Español • English',
      'hero.location': 'Miami, FL',
      'hero.description': 'Especialista en Armonización Orofacial enfocada en realzar tu belleza natural, respetando la anatomía individual de cada paciente.',
      'hero.cta.primary': 'Quiero agendar mi evaluación',
      'hero.cta.secondary': 'Conoce mi trabajo',
      'hero.stats.patients': 'Pacientes',
      'hero.stats.experience': 'Años de experiencia',
      'hero.stats.rating': 'Calificación promedio',
      
      // About
      'about.title': 'Acerca de la Dra. Anna Laira',
      'about.subtitle': 'Una profesional dedicada a realzar la belleza natural de cada paciente, combinando experiencia técnica con una mirada artística refinada.',
      'about.quote': 'Busca lograr la belleza natural respetando la anatomía individual de cada paciente.',
      'about.description1': 'Con años de experiencia en armonización orofacial, la Dra. Anna Laira es reconocida como referencia en rinomodelación y procedimientos estéticos mínimamente invasivos. Su enfoque personalizado garantiza resultados naturales que respetan las características únicas de cada paciente.',
      'about.description2': 'Ubicada en Miami, atiende pacientes de diversas nacionalidades, ofreciendo atención en portugués, español e inglés, siempre priorizando la comodidad y seguridad en todos los procedimientos.',
      'about.specialties': 'Especialidades',
      'about.specialty1': 'Armonización Orofacial Completa',
      'about.specialty2': 'Rinomodelación (Rinoplastia No Quirúrgica)',
      'about.specialty3': 'Relleno Facial con Ácido Hialurónico',
      'about.specialty4': 'Aplicación de Toxina Botulínica',
      'about.specialty5': 'Bioestimuladores de Colágeno',
      'about.specialty6': 'Peeling Químico Especializado',
      'about.credential1.title': 'Cirujana Dentista',
      'about.credential1.desc': 'Formación en Odontología con especialización en procedimientos estéticos',
      'about.credential2.title': 'Armonización Orofacial',
      'about.credential2.desc': 'Especialista en técnicas avanzadas de armonización facial',
      'about.credential3.title': 'Rinomodelación',
      'about.credential3.desc': 'Referencia en Rinoplastia No Quirúrgica con técnicas innovadoras',
      'about.credential4.title': 'Marca Mayve',
      'about.credential4.desc': 'Creadora de la marca especializada en productos de armonización',
      
      // Testimonials
      'testimonials.title': 'Lo que dicen nuestras pacientes',
      'testimonials.subtitle': 'Historias reales de transformación y confianza renovada. Cada sonrisa es nuestra mayor recompensa.',
      'testimonials.stats.patients': 'Pacientes Satisfechas',
      'testimonials.stats.satisfaction': 'Tasa de Satisfacción',
      'testimonials.stats.rating': 'Calificación Promedio',
      'testimonials.stats.experience': 'Años de Experiencia',
      
      // Contact
      'contact.title': 'Agenda tu Consulta',
      'contact.subtitle': 'Da el primer paso para realzar tu belleza natural. Ponte en contacto y hablemos sobre tus objetivos.',
      'contact.form.title': 'Solicita tu Evaluación',
      'contact.form.name': 'Nombre completo',
      'contact.form.phone': 'Teléfono',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensaje',
      'contact.form.message.placeholder': 'Cuéntanos sobre tus objetivos y dudas...',
      'contact.form.submit': 'Enviar Solicitud',
      'contact.form.disclaimer': 'Al enviar, aceptas ser contactado para agendar la consulta.',
      'contact.info.location': 'Ubicación y Horarios',
      'contact.info.address': 'Clínica Miami',
      'contact.info.hours': 'Horario de Atención',
      'contact.info.hours.detail': 'Lunes a Viernes: 9h a 18h\nSábado: 9h a 14h\nDomingo: Cerrado',
      'contact.info.maps': 'Abrir en Google Maps',
      'contact.info.languages': 'Idiomas de Atención',
      'contact.validation.required': 'Campos obligatorios',
      'contact.validation.message': 'Por favor, completa nombre, email y teléfono.',
      'contact.success.title': '¡Mensaje enviado!',
      'contact.success.message': 'Te contactaremos pronto para agendar tu consulta.',
      
      // Footer
      'footer.description': 'Especialista en armonización orofacial y rinomodelación en Miami. Realzando tu belleza natural con técnicas avanzadas y seguras.',
      'footer.contact': 'Contacto',
      'footer.specialties': 'Especialidades',
      'footer.specialty1': 'Rinomodelación',
      'footer.specialty2': 'Armonización Facial Completa',
      'footer.specialty3': 'Toxina Botulínica',
      'footer.specialty4': 'Bioestimulador de Colágeno',
      'footer.specialty5': 'Peeling de Fenol',
      'footer.specialty6': 'Adelgazamiento Facial',
      'footer.copyright': 'Todos los derechos reservados.',
      'footer.disclaimer': 'Los resultados pueden variar según la individualidad de cada paciente. Consulta siempre a un profesional calificado.',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
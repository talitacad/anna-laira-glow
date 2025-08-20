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
  const [language, setLanguage] = useState<Language>('en');

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
      'hero.subtitle': 'Reference in Rhinomodeling',
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

      // FAQ
      'faq.title': 'Perguntas Frequentes',
      'faq.subtitle': 'Encontre respostas para as dúvidas mais comuns sobre harmonização facial e nossos tratamentos.',
      'faq.q1.question': 'O que é harmonização facial e como funciona?',
      'faq.q1.answer': 'A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que visam equilibrar as proporções faciais e realçar a beleza natural. Inclui técnicas como preenchimento com ácido hialurônico, aplicação de toxina botulínica, bioestimuladores e tratamentos especializados. O processo respeita a anatomia individual enquanto melhora a simetria e contorno facial.',
      'faq.q2.question': 'O que é rinomodelação (rinoplastia não cirúrgica) e é segura?',
      'faq.q2.answer': 'A rinomodelação, também conhecida como rinoplastia não cirúrgica, é uma técnica que utiliza preenchedores dérmicos para remodelar e melhorar o contorno do nariz sem cirurgia. É um procedimento seguro quando realizado por profissionais qualificados, com resultados imediatos e tempo de recuperação mínimo. A Dra. Anna Laira é reconhecida como referência nesta técnica em Miami.',
      'faq.q3.question': 'Quanto tempo duram os resultados da harmonização facial?',
      'faq.q3.answer': 'A duração varia conforme o tipo de tratamento: preenchedores de ácido hialurônico duram de 8-18 meses, toxina botulínica de 4-6 meses, e bioestimuladores podem durar até 2 anos. Fatores individuais como metabolismo, estilo de vida e área tratada afetam a longevidade. A Dra. Anna Laira fornece orientação personalizada sobre cronogramas de manutenção.',
      'faq.q4.question': 'Quais idiomas a Dra. Anna Laira fala?',
      'faq.q4.answer': 'A Dra. Anna Laira oferece consultas e tratamentos em três idiomas: português, espanhol e inglês. Esta abordagem multilíngue garante comunicação confortável para a diversa comunidade internacional de Miami.',
      'faq.q5.question': 'Os procedimentos são dolorosos?',
      'faq.q5.answer': 'A maioria dos procedimentos causa desconforto mínimo. Utilizamos técnicas de anestesia local e produtos com anestésicos integrados para garantir máximo conforto. A Dra. Anna Laira prioriza o bem-estar do paciente durante todo o processo.',
      'faq.q6.question': 'Qual é o tempo de recuperação?',
      'faq.q6.answer': 'O tempo de recuperação é mínimo para a maioria dos procedimentos. Podem ocorrer pequenos inchaços ou hematomas que desaparecem em 2-7 dias. Você pode retomar atividades normais imediatamente, evitando apenas exercícios intensos por 24-48 horas.',
      'faq.q7.question': 'Como escolher o tratamento ideal para mim?',
      'faq.q7.answer': 'Durante a consulta inicial, a Dra. Anna Laira avalia sua anatomia facial, discute seus objetivos estéticos e recomenda o plano de tratamento mais adequado. Cada paciente recebe um protocolo personalizado baseado em suas necessidades específicas.',
      'faq.q8.question': 'Quais são os riscos dos tratamentos?',
      'faq.q8.answer': 'Quando realizados por profissionais qualificados, os riscos são mínimos. Podem incluir inchaço temporário, hematomas leves ou sensibilidade no local. A Dra. Anna Laira utiliza produtos certificados e técnicas seguras para minimizar qualquer risco.',
      'faq.cta.text': 'Não encontrou sua pergunta aqui?',
      'faq.cta.link': 'Entre em contato conosco'
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
      'hero.subtitle': 'Reference in Rhinomodeling',
      'hero.languages': 'Português • Español • English',
      'hero.location': 'Miami, FL',
      'hero.description': 'Specialist in Orofacial Harmonization focused on enhancing your natural beauty, respecting the individual anatomy of each patient.',
      'hero.cta.primary': 'I want to schedule my evaluation',
      'hero.cta.secondary': 'About me',
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

      // FAQ
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Find answers to the most common questions about facial harmonization and our treatments.',
      'faq.q1.question': 'What is facial harmonization and how does it work?',
      'faq.q1.answer': 'Facial harmonization is a set of minimally invasive aesthetic procedures that aim to balance facial proportions and enhance natural beauty. It includes techniques such as hyaluronic acid fillers, botulinum toxin application, biostimulators, and specialized treatments. The process respects individual anatomy while improving facial symmetry and contour.',
      'faq.q2.question': 'What is non-surgical rhinoplasty (rhinomodeling) and is it safe?',
      'faq.q2.answer': 'Non-surgical rhinoplasty, also known as rhinomodeling, is a technique that uses dermal fillers to reshape and improve the nose contour without surgery. It\'s a safe procedure when performed by qualified professionals, with immediate results and minimal downtime. Dr. Anna Laira is recognized as a reference in this technique in Miami.',
      'faq.q3.question': 'How long do facial harmonization results last?',
      'faq.q3.answer': 'Results duration varies by treatment type: hyaluronic acid fillers last 8-18 months, botulinum toxin 4-6 months, and biostimulators can last up to 2 years. Individual factors like metabolism, lifestyle, and treatment area affect longevity. Dr. Anna Laira provides personalized guidance on maintenance schedules.',
      'faq.q4.question': 'What languages does Dr. Anna Laira speak?',
      'faq.q4.answer': 'Dr. Anna Laira provides consultations and treatments in three languages: Portuguese, Spanish, and English. This multilingual approach ensures comfortable communication for Miami\'s diverse international community.',
      'faq.q5.question': 'Are the procedures painful?',
      'faq.q5.answer': 'Most procedures cause minimal discomfort. We use local anesthesia techniques and products with integrated anesthetics to ensure maximum comfort. Dr. Anna Laira prioritizes patient well-being throughout the entire process.',
      'faq.q6.question': 'What is the recovery time?',
      'faq.q6.answer': 'Recovery time is minimal for most procedures. Minor swelling or bruising may occur and disappears within 2-7 days. You can resume normal activities immediately, avoiding only intense exercise for 24-48 hours.',
      'faq.q7.question': 'How do I choose the ideal treatment for me?',
      'faq.q7.answer': 'During the initial consultation, Dr. Anna Laira evaluates your facial anatomy, discusses your aesthetic goals, and recommends the most suitable treatment plan. Each patient receives a personalized protocol based on their specific needs.',
      'faq.q8.question': 'What are the risks of the treatments?',
      'faq.q8.answer': 'When performed by qualified professionals, risks are minimal. They may include temporary swelling, mild bruising, or sensitivity at the site. Dr. Anna Laira uses certified products and safe techniques to minimize any risk.',
      'faq.cta.text': 'Didn\'t find your question here?',
      'faq.cta.link': 'Contact us'
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
      'hero.subtitle': 'Reference in Rhinomodeling',
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

      // FAQ
      'faq.title': 'Preguntas Frecuentes',
      'faq.subtitle': 'Encuentra respuestas a las dudas más comunes sobre armonización facial y nuestros tratamientos.',
      'faq.q1.question': '¿Qué es la armonización facial y cómo funciona?',
      'faq.q1.answer': 'La armonización facial es un conjunto de procedimientos estéticos mínimamente invasivos que buscan equilibrar las proporciones faciales y realzar la belleza natural. Incluye técnicas como relleno con ácido hialurónico, aplicación de toxina botulínica, bioestimuladores y tratamientos especializados. El proceso respeta la anatomía individual mientras mejora la simetría y contorno facial.',
      'faq.q2.question': '¿Qué es la rinomodelación (rinoplastia no quirúrgica) y es segura?',
      'faq.q2.answer': 'La rinomodelación, también conocida como rinoplastia no quirúrgica, es una técnica que utiliza rellenos dérmicos para remodelar y mejorar el contorno de la nariz sin cirugía. Es un procedimiento seguro cuando es realizado por profesionales calificados, con resultados inmediatos y tiempo de recuperación mínimo. La Dra. Anna Laira es reconocida como referencia en esta técnica en Miami.',
      'faq.q3.question': '¿Cuánto duran los resultados de la armonización facial?',
      'faq.q3.answer': 'La duración varía según el tipo de tratamiento: rellenos de ácido hialurónico duran de 8-18 meses, toxina botulínica de 4-6 meses, y bioestimuladores pueden durar hasta 2 años. Factores individuales como metabolismo, estilo de vida y área tratada afectan la longevidad. La Dra. Anna Laira proporciona orientación personalizada sobre cronogramas de mantenimiento.',
      'faq.q4.question': '¿Qué idiomas habla la Dra. Anna Laira?',
      'faq.q4.answer': 'La Dra. Anna Laira ofrece consultas y tratamientos en tres idiomas: portugués, español e inglés. Este enfoque multilingüe garantiza comunicación cómoda para la diversa comunidad internacional de Miami.',
      'faq.q5.question': '¿Son dolorosos los procedimientos?',
      'faq.q5.answer': 'La mayoría de los procedimientos causan molestias mínimas. Utilizamos técnicas de anestesia local y productos con anestésicos integrados para garantizar máximo confort. La Dra. Anna Laira prioriza el bienestar del paciente durante todo el proceso.',
      'faq.q6.question': '¿Cuál es el tiempo de recuperación?',
      'faq.q6.answer': 'El tiempo de recuperación es mínimo para la mayoría de los procedimientos. Puede ocurrir inflamación menor o hematomas que desaparecen en 2-7 días. Puedes retomar actividades normales inmediatamente, evitando solo ejercicios intensos por 24-48 horas.',
      'faq.q7.question': '¿Cómo elegir el tratamiento ideal para mí?',
      'faq.q7.answer': 'Durante la consulta inicial, la Dra. Anna Laira evalúa tu anatomía facial, discute tus objetivos estéticos y recomienda el plan de tratamiento más adecuado. Cada paciente recibe un protocolo personalizado basado en sus necesidades específicas.',
      'faq.q8.question': '¿Cuáles son los riesgos de los tratamientos?',
      'faq.q8.answer': 'Cuando son realizados por profesionales calificados, los riesgos son mínimos. Pueden incluir inflamación temporal, hematomas leves o sensibilidad en el sitio. La Dra. Anna Laira utiliza productos certificados y técnicas seguras para minimizar cualquier riesgo.',
      'faq.cta.text': '¿No encontraste tu pregunta aquí?',
      'faq.cta.link': 'Contáctanos'
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
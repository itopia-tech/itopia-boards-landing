import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.tryDemo': 'Try Demo',
    'nav.language': 'Language',
    
    // Hero
    'hero.title': 'Organize Your Projects and Tasks Like Never Before',
    'hero.subtitle': 'ITopIA Boards transforms the way you manage ideas and tasks into intuitive boards, lists, and cards. Experience project management that adapts to your daily tasks and workflow.',
    'hero.suitable': 'Suitable for every business and team.',
    'hero.tryDemo': 'Try Demo Now',
    'hero.watchVideo': 'Watch Video',
    'hero.visualBoards': 'Visual Boards',
    'hero.visualBoardsDesc': 'Organize projects with intuitive Kanban-style boards',
    'hero.smartLists': 'Smart Lists',
    'hero.smartListsDesc': 'Create flexible lists that adapt to your workflow',
    'hero.dynamicCards': 'Dynamic Cards',
    'hero.dynamicCardsDesc': 'Rich cards with attachments, due dates, and more',
    
    // Features
    'features.title': 'Powerful Features for Every Team',
    'features.subtitle': 'ITopIA Boards combines simplicity with powerful features to help teams of all sizes stay organized and productive.',
    'features.multiBoard': 'Multi-Board Management',
    'features.multiBoardDesc': 'Create unlimited boards for different projects, teams, or workflows. Each board is a separate workspace tailored to your needs.',
    'features.teamCollab': 'Team Collaboration',
    'features.teamCollabDesc': 'Invite team members, assign tasks, and collaborate in real-time. Comments, mentions, and notifications keep everyone aligned.',
    'features.automation': 'Automation & Templates',
    'features.automationDesc': 'Automate repetitive tasks and start projects faster with pre-built templates for common workflows.',
    'features.security': 'Enterprise Security',
    'features.securityDesc': 'High security level with encryption, and granular permission controls to keep your data safe.',
    'features.timeline': 'Timeline & Deadlines',
    'features.timelineDesc': 'Set due dates, create milestones, and visualize project timelines. Never miss important deadlines again.',
    'features.analytics': 'Analytics & Insights',
    'features.analyticsDesc': 'Track team productivity, identify bottlenecks, and make data-driven decisions with comprehensive analytics.',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the perfect plan for your team. Start free and scale as you grow.',
    'pricing.free': 'Free',
    'pricing.freeDesc': 'Perfect for individuals',
    'pricing.pro': 'Pro',
    'pricing.proDesc': 'Best for small teams',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterpriseDesc': 'For large organizations',
    'pricing.getStarted': 'Get Started Free',
    'pricing.startTrial': 'Start Free Trial',
    'pricing.contactSales': 'Contact Sales',
    'pricing.disclaimer': 'All plans include a 14-day free trial. No credit card required.',
    'pricing.boards3': 'Up to 3 boards',
    'pricing.listsUnlimited': 'Unlimited personal lists',
    'pricing.templatesBasic': 'Basic templates',
    'pricing.emailSupport': 'Email support',
    'pricing.teamCollab': 'Team collaboration',
    'pricing.integrations': 'Advanced integrations',
    'pricing.boardsUnlimited': 'Unlimited boards',
    'pricing.templatesAdvanced': 'Advanced templates',
    'pricing.prioritySupport': 'Priority support',
    'pricing.workflows': 'Custom workflows',
    'pricing.analytics': 'Analytics dashboard',
    'pricing.everythingPro': 'Everything in Pro',
    'pricing.branding': 'Custom branding',
    'pricing.sso': 'SSO & security',
    'pricing.dedicatedSupport': 'Dedicated support',
    
    // Call to Action
    'cta.title': 'Ready to Transform Your Workflow?',
    'cta.subtitle': 'Join the teams who have revolutionized their project management. Log on with a Demo Access today and experience the difference.',
    'cta.tryDemo': 'Try Demo Now',
    'cta.scheduleDemo': 'Schedule Demo with Support',
    'cta.fullAccess': 'Full Features Access',
    'cta.demoAccess': 'Demo Access',
    'cta.noSetup': 'No Setup',
    'cta.immediateAccess': 'Immediate Web Access',
    'cta.support247': '24/7',
    'cta.supportAvailable': 'Support Available',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Footer
    'footer.tagline': 'Transforming project management with intuitive boards, smart lists, and powerful collaboration tools.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.templates': 'Templates',
    'footer.api': 'API',
    'footer.support': 'Support',
    'footer.help': 'Help',
    'footer.status': 'Status',
    'footer.contactUs': 'Contact Us',
    'footer.allRights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  es: {
    // Header
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'nav.tryDemo': 'Probar Demo',
    'nav.language': 'Idioma',
    
    // Hero
    'hero.title': 'Organiza Tus Proyectos y Tareas Como Nunca Antes',
    'hero.subtitle': 'ITopIA Boards transforma la forma en que gestionas ideas y tareas en tableros, listas y tarjetas intuitivos. Experimenta la gestión de proyectos que se adapta a tus tareas diarias y flujo de trabajo.',
    'hero.suitable': 'Adecuado para cada negocio y equipo.',
    'hero.tryDemo': 'Probar Demo Ahora',
    'hero.watchVideo': 'Ver Video',
    'hero.visualBoards': 'Tableros Visuales',
    'hero.visualBoardsDesc': 'Organiza proyectos con tableros Kanban intuitivos',
    'hero.smartLists': 'Listas Inteligentes',
    'hero.smartListsDesc': 'Crea listas flexibles que se adaptan a tu flujo de trabajo',
    'hero.dynamicCards': 'Tarjetas Dinámicas',
    'hero.dynamicCardsDesc': 'Tarjetas ricas con archivos adjuntos, fechas de vencimiento y más',
    
    // Features
    'features.title': 'Características Poderosas para Cada Equipo',
    'features.subtitle': 'ITopIA Boards combina simplicidad con características poderosas para ayudar a equipos de todos los tamaños a mantenerse organizados y productivos.',
    'features.multiBoard': 'Gestión Multi-Tablero',
    'features.multiBoardDesc': 'Crea tableros ilimitados para diferentes proyectos, equipos o flujos de trabajo. Cada tablero es un espacio de trabajo separado adaptado a tus necesidades.',
    'features.teamCollab': 'Colaboración en Equipo',
    'features.teamCollabDesc': 'Invita miembros del equipo, asigna tareas y colabora en tiempo real. Comentarios, menciones y notificaciones mantienen a todos alineados.',
    'features.automation': 'Automatización y Plantillas',
    'features.automationDesc': 'Automatiza tareas repetitivas e inicia proyectos más rápido con plantillas predefinidas para flujos de trabajo comunes.',
    'features.security': 'Seguridad Empresarial',
    'features.securityDesc': 'Alto nivel de seguridad con encriptación y controles de permisos granulares para mantener tus datos seguros.',
    'features.timeline': 'Cronograma y Fechas Límite',
    'features.timelineDesc': 'Establece fechas de vencimiento, crea hitos y visualiza cronogramas de proyectos. Nunca pierdas fechas límite importantes.',
    'features.analytics': 'Análisis y Perspectivas',
    'features.analyticsDesc': 'Rastrea la productividad del equipo, identifica cuellos de botella y toma decisiones basadas en datos con análisis completos.',
    
    // Pricing
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Elige el plan perfecto para tu equipo. Comienza gratis y escala a medida que creces.',
    'pricing.free': 'Gratis',
    'pricing.freeDesc': 'Perfecto para individuos',
    'pricing.pro': 'Pro',
    'pricing.proDesc': 'Mejor para equipos pequeños',
    'pricing.enterprise': 'Empresarial',
    'pricing.enterpriseDesc': 'Para organizaciones grandes',
    'pricing.getStarted': 'Comenzar Gratis',
    'pricing.startTrial': 'Iniciar Prueba Gratuita',
    'pricing.contactSales': 'Contactar Ventas',
    'pricing.disclaimer': 'Todos los planes incluyen una prueba gratuita de 14 días. No se requiere tarjeta de crédito.',
    'pricing.boards3': 'Hasta 3 tableros',
    'pricing.listsUnlimited': 'Listas personales ilimitadas',
    'pricing.templatesBasic': 'Plantillas básicas',
    'pricing.emailSupport': 'Soporte por email',
    'pricing.teamCollab': 'Colaboración en equipo',
    'pricing.integrations': 'Integraciones avanzadas',
    'pricing.boardsUnlimited': 'Tableros ilimitados',
    'pricing.templatesAdvanced': 'Plantillas avanzadas',
    'pricing.prioritySupport': 'Soporte prioritario',
    'pricing.workflows': 'Flujos de trabajo personalizados',
    'pricing.analytics': 'Panel de análisis',
    'pricing.everythingPro': 'Todo en Pro',
    'pricing.branding': 'Marca personalizada',
    'pricing.sso': 'SSO y seguridad',
    'pricing.dedicatedSupport': 'Soporte dedicado',
    
    // Call to Action
    'cta.title': '¿Listo para Transformar Tu Flujo de Trabajo?',
    'cta.subtitle': 'Únete a los equipos que han revolucionado su gestión de proyectos. Accede con un Demo hoy y experimenta la diferencia.',
    'cta.tryDemo': 'Probar Demo Ahora',
    'cta.scheduleDemo': 'Programar Demo con Soporte',
    'cta.fullAccess': 'Acceso Completo a Características',
    'cta.demoAccess': 'Acceso Demo',
    'cta.noSetup': 'Sin Configuración',
    'cta.immediateAccess': 'Acceso Web Inmediato',
    'cta.support247': '24/7',
    'cta.supportAvailable': 'Soporte Disponible',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje y responderemos lo antes posible.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.error': 'Error al enviar mensaje. Por favor intenta de nuevo.',
    'contact.formTitle': 'Envíanos un mensaje',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.subjectPlaceholder': '¿En qué podemos ayudarte?',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu proyecto o pregunta...',
    'contact.successDescription': 'Gracias por contactarnos. Te responderemos pronto.',
    'contact.errorDescription': 'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.',
    'contact.infoTitle': 'Información de Contacto',
    'contact.infoDescription': 'Contáctanos a través de cualquiera de estos canales. Normalmente respondemos en 24 horas.',
    'contact.emailSupport': 'Soporte por Email',
    'contact.phoneSupport': 'Soporte Telefónico',
    'contact.officeLocation': 'Ubicación de Oficina',
    'contact.nameRequired': 'El nombre debe tener al menos 2 caracteres',
    'contact.emailInvalid': 'Por favor ingresa un email válido',
    'contact.subjectRequired': 'El asunto debe tener al menos 3 caracteres',
    'contact.messageRequired': 'El mensaje debe tener al menos 10 caracteres',
    
    // Footer
    'footer.tagline': 'Transformando la gestión de proyectos con tableros intuitivos, listas inteligentes y herramientas de colaboración poderosas.',
    'footer.product': 'Producto',
    'footer.features': 'Características',
    'footer.pricing': 'Precios',
    'footer.templates': 'Plantillas',
    'footer.api': 'API',
    'footer.support': 'Soporte',
    'footer.help': 'Ayuda',
    'footer.status': 'Estado',
    'footer.contactUs': 'Contáctanos',
    'footer.allRights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
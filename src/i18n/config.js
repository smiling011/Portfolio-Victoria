import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  es: {
    translation: {
      // Sidebar
      "sidebar.about": "Sobre mí",
      "sidebar.skills": "Habilidades",
      "sidebar.projects": "Proyectos",
      "sidebar.contact": "Contacto",
      
      // Intro
      "intro.play": "PLAY",
      "intro.pressPlay": "Presiona PLAY para comenzar",
      "intro.loading": "Cargando...",
      
      // About Window
      "about.hello": "Holis !",
      "about.name": "Soy Victoria Vielma",
      "about.title1": "Desarrollador Full Stack",
      "about.title2": "Desarrollador Móvil",
      "about.title3": "Desarrollador Web",
      "about.description1": "Desarrollador Full Stack Web y Móvil, con formación técnica en programación de software. Actualmente estudio Análisis y Desarrollo de Software.",
      "about.description2": "Me especializo en el desarrollo de aplicaciones, con enfoque en crear soluciones funcionales y bien estructuradas.",
      "about.description3": "Me interesa seguir desarrollando mis habilidades en entornos reales y contribuir en equipos de desarrollo donde pueda aportar desde el conocimiento técnico.",
      
      // Skills Window
      "skills.header": "Lenguajes, frameworks, base de datos, herramientas e idiomas que manejo.",
      "skills.english": "English - B1 en formación",
      "skills.spanish": "Español - Nativo",
      
      // Projects Window
      "projects.description": "Dacky es una aplicación móvil diseñada para el rastreo GPS de mascotas, permitiendo a los dueños gestionar la información básica, su tarjeta virtual de vacunas y facilitar su recuperación en caso de extravío mediante un código QR en el collar.",
      "projects.repository": "Ver repositorio",
      
      // Contact Window
      "contact.header": "Presiona para copiar o abrir el enlace",
      "contact.copied": "¡Copiado!",
      "contact.opening": "¡Abriendo!",
      
      // Footer
      "footer.rights": "© Todos los derechos reservados"
    }
  },
  en: {
    translation: {
      // Sidebar
      "sidebar.about": "About",
      "sidebar.skills": "Skills",
      "sidebar.projects": "Projects",
      "sidebar.contact": "Contact",
      
      // Intro
      "intro.play": "PLAY",
      "intro.pressPlay": "Press PLAY to start",
      "intro.loading": "Loading...",
      
      // About Window
      "about.hello": "Hello !",
      "about.name": "I'm Victoria Vielma",
      "about.title1": "Full Stack Developer",
      "about.title2": "Mobile Developer",
      "about.title3": "Web Developer",
      "about.description1": "Full Stack Web and Mobile Developer, with technical training in software programming. Currently studying Software Analysis and Development.",
      "about.description2": "I specialize in application development, with a focus on creating functional and well-structured solutions.",
      "about.description3": "I'm interested in continuing to develop my skills in real environments and contribute to development teams where I can contribute from technical knowledge.",
      
      // Skills Window
      "skills.header": "Languages, frameworks, databases, tools and languages I handle.",
      "skills.english": "English - B1 in training",
      "skills.spanish": "Spanish - Native",
      
      // Projects Window
      "projects.description": "Dacky is a mobile application designed for GPS tracking of pets, allowing owners to manage basic information, their virtual vaccine card and facilitate their recovery in case of loss through a QR code on the collar.",
      "projects.repository": "View repository",
      
      // Contact Window
      "contact.header": "Press to copy or open link",
      "contact.copied": "Copied!",
      "contact.opening": "Opening!",
      
      // Footer
      "footer.rights": "© All rights reserved"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
import Navbar from "./components/Navbar"
import AboutMeSection from "./components/AboutMeSection";
import Main from "./components/Main"
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

import styled from 'styled-components'
import SkillsSection from "./components/SkillsSection";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      projects: "Projects",
      about: "About me",
      contact: "Contact",
      greeting: "Hi, I'm Diana Calderón",
      aboutMe: "Professional with 3 years of experience in computer networking, specializing in the management and optimization of technological infrastructures. And with 2 years of experience in frontend development. Currently focused on expanding my career into software development, leveraging my technical expertise to create efficient and innovative digital solutions.",
      engineer: "Computer Science Engineer",
      available: "Available to work",
      appleTitle: "Apple Website",
      appleDesc: "This project is built with modern technologies including React for the UI, Vite for fast development, GSAP for smooth animations, and Three.js for interactive 3D experiences.",
      fantaTitle: "Fanta Website",
      fantaDesc: "This project is developed using React for the UI, Vite for fast builds, Motion for animations, React Mouse Follower for interactive cursor effects, and TailwindCSS for responsive and modern styling.",
      netflixTitle: "Netflix Website",
      netflixDesc: "This project is built with React for the UI, Node.js for the backend, Axios for API communication, Json Web Token for authentication, Zustand for state management, TailwindCSS for modern styling, and Toast for user notifications.",
      productTitle: "Products Website",
      productDesc: "This project is developed using React with TypeScript for a robust UI, Vite for fast builds, Express for the backend, and Sequelize for efficient database management.",
      caloriesTitle: "Calories Tracker Website",
      caloriesDesc: "This project is built with React for the UI, the Reducer Hook for state management, and TailwindCSS for responsive and modern styling.",
      skills: "Skills",
    },
  },
  es: {
    translation: {
      projects: "Proyectos",
      about: "Acerca de mi",
      contact: "Contacto",
      greeting: "Hola, soy Diana Calderón",
      aboutMe: "Profesional con 3 años de experiencia en redes informáticas, especializada en la gestión y optimización de infraestructuras tecnológicas. Y con 2 años de experiencia en desarrollo frontend. Actualmente enfocada en expandir mi carrera hacia el desarrollo de software, aprovechando mi experiencia técnica para crear soluciones digitales eficientes e innovadoras.",
      engineer: "Ingeniera en Ciencias de la Computación",
      available: "Disponible para trabajar",
      appleTitle: "Sitio web de Apple",
      appleDesc: "Este proyecto está construido con tecnologías modernas que incluyen React para la interfaz de usuario, Vite para un desarrollo rápido, GSAP para animaciones suaves y Three.js para experiencias 3D interactivas.",
      fantaTitle: "Sitio web de Fanta",
      fantaDesc: "Este proyecto está desarrollado utilizando React para la interfaz de usuario, Vite para compilaciones rápidas, Motion para animaciones, React Mouse Follower para efectos de cursor interactivos y TailwindCSS para estilos modernos y responsivos.",
      netflixTitle: "Sitio web de Netflix",
      netflixDesc: "Este proyecto está construido con React para la interfaz de usuario, Node.js para el backend, Axios para la comunicación con la API, Json Web Token para la autenticación, Zustand para la gestión del estado, TailwindCSS para estilos modernos y Toast para notificaciones al usuario.",
      productTitle: "Sitio web de Productos",
      productDesc: "Este proyecto está desarrollado utilizando React con TypeScript para una interfaz de usuario robusta, Vite para compilaciones rápidas, Express para el backend y Sequelize para una gestión eficiente de la base de datos.",
      caloriesTitle: "Sitio web Contador de Calorías",
      caloriesDesc: "Este proyecto está construido con React para la interfaz de usuario, usa Reducer Hook para la gestión del estado y TailwindCSS para estilos modernos y responsivos.", 
      skills: "Habilidades",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});


function App() {
  
  return (
    <Container>
      <Navbar/>
      <Main/>
      <ProjectsSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <Footer/>
    </Container>
  )
}

const Container  = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
`;

export default App

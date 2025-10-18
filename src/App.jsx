import { useState, useEffect } from 'react'; // ← AGREGAR useEffect aquí
import { AnimatePresence } from 'framer-motion';
import { useWindowManager } from './hooks/useWindowManager';
import Sidebar from './components/Sidebar';
import Window from './components/Window';
import Intro from './components/Intro';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import ContactWindow from './windows/ContactWindow';
import FloatingButtons from './components/FloatingButtons';
import MobileMenu from './components/MobileMenu';
import MobileWindow from './components/MobileWindow';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const [showIntro, setShowIntro] = useState(true); // Estado para mostrar intro
  
  const { 
    windows, 
    openWindow, 
    closeWindow, 
    focusWindow, 
    updateWindowPosition 
  } = useWindowManager();

  // para detectar si es un celular
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderWindowContent = (type) => {
    switch (type) {
      case 'about':
        return <AboutWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'contact':
        return <ContactWindow />;
      default:
        return null;
    }
  };

  // Si la intro está activa, mostrarla
  if (showIntro) {
    return <Intro onStart={() => setShowIntro(false)} />;
  }

  // esta es la vista para celulares :)
  if (isMobile) {
    return (
      <div className="relative w-screen h-screen bg-secondary overflow-hidden">
        <MobileMenu onOpenWindow={openWindow} />

        <AnimatePresence>
          {windows.map((window) => (
            <MobileWindow
              key={window.id}
              id={window.id}
              title={window.title}
              onClose={closeWindow}
            >
              {renderWindowContent(window.type)}
            </MobileWindow>
          ))}
        </AnimatePresence>

        <FloatingButtons />
      </div>
    );
  }



  // Esta es la vista de escritorio
  return (
    
    <div className="relative w-screen h-screen bg-secondary overflow-hidden">
      <Sidebar onOpenWindow={openWindow} />

      <div className="ml-48 w-[calc(100vw-12rem)] h-full relative">
        <AnimatePresence>
          {windows.map((window) => (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              position={window.position}
              size={window.size}
              zIndex={window.zIndex}
              onClose={closeWindow}
              onFocus={focusWindow}
              onPositionChange={updateWindowPosition}
            >
              {renderWindowContent(window.type)}
            </Window>
          ))}
        </AnimatePresence>


        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <p className="text-primary text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );

  

}

export default App;
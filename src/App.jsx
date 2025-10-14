import { useState } from 'react';
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

function App() {
  const [showIntro, setShowIntro] = useState(true); // Estado para mostrar intro
  
  const { 
    windows, 
    openWindow, 
    closeWindow, 
    focusWindow, 
    updateWindowPosition 
  } = useWindowManager();

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
            Victoria Vielma 2025 © Todos los derechos reservados
          </p>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );

  

}

export default App;
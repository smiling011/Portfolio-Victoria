import { AnimatePresence } from 'framer-motion';
import { useWindowManager } from './hooks/useWindowManager';
import Sidebar from './components/Sidebar';
import Window from './components/Window';
import AboutWindow from './windows/AboutWindow';

function App() {
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
        return <div>Habilidades - En desarrollo</div>;
      case 'projects':
        return <div>Proyectos - En desarrollo</div>;
      case 'contact':
        return <div>Contacto - En desarrollo</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-secondary overflow-hidden">
      {/* Sidebar */}
      <Sidebar onOpenWindow={openWindow} />

      {/* Desktop Area */}
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

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <p className="text-primary text-sm">
            Victoria Vielma 2025 © Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
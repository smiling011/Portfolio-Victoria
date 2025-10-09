import { useState } from 'react';

export const useWindowManager = () => {
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(100);

  const openWindow = (type) => {
    const windowId = `${type}-${Date.now()}`;
    const titles = {
      about: 'SOBRE MI',
      skills: 'HABILIDADES',
      projects: 'PROYECTOS',
      contact: 'CONTACTO'
    };

    const sizes = {
      about: { width: 900, height: 550 },
      skills: { width: 880, height: 480 },
      projects: { width: 1100, height: 650 },  // ← Más grande para proyectos
      contact: { width: 800, height: 450 },
    };

    const newWindow = {
      id: windowId,
      type,
      title: titles[type],
      position: { 
        x: 100 + windows.length * 30, 
        y: 100 + windows.length * 30 
      },
      size: sizes[type] || { width: 900, height: 550 },
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
    };

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const focusWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  const updateWindowPosition = (id, position) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, position } : w
    ));
  };

  return {
    windows,
    openWindow,
    closeWindow,
    focusWindow,
    updateWindowPosition,
  };
};
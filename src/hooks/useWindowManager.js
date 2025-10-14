import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const useWindowManager = () => {
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(100);
  const { t } = useTranslation();

  const openWindow = (type) => {
    const windowId = `${type}-${Date.now()}`;
    const titles = {
      about: t('sidebar.about'),
      skills: t('sidebar.skills'),
      projects: t('sidebar.projects'),
      contact: t('sidebar.contact')
    };

    const sizes = {
      about: { width: 900, height: 550 },
      skills: { width: 880, height: 480 },
      projects: { width: 1100, height: 650 },  
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
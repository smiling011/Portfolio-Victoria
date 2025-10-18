import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSoundManager } from '../hooks/useSoundManager';
import { useSound } from '../hooks/useSound';

const FloatingButtons = () => {
  const { i18n } = useTranslation();
  const { isMuted, toggleMute } = useSoundManager();
  const playClickSound = useSound('sounds/click.mp3', 0.2);

  const handleLanguageToggle = () => {
    playClickSound();
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const handleSoundToggle = () => {
    // No reproducir sonido aquí porque podría estar silenciando
    toggleMute();
  };

  return (
    <div className="fixed top-4 right-4 md:bottom md:right-6 flex gap-3 z-50">
      {/* Botón de idioma */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLanguageToggle}
        className=""
        title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <svg 
          className="w-7 h-7 text-primary" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m5 8 6 6"/>
          <path d="m4 14 6-6 2-3"/>
          <path d="M2 5h12"/>
          <path d="M7 2h1"/>
          <path d="m22 22-5-10-5 10"/>
          <path d="M14 18h6"/>
        </svg>
      </motion.button>

      {/* Botón de sonido */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSoundToggle}
        className=""
        title={isMuted ? 'Activar sonido' : 'Silenciar'}
      >
        {isMuted ? (
          // Icono de mute
           <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          // Icono de sonido (color beige/primary)
          <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
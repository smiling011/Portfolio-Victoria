import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSound } from '../hooks/useSound';
import { useTranslation } from 'react-i18next';

const ContactButton = ({ icon, label, onClick, ariaLabel, isMobile }) => {
  const { t } = useTranslation();
  const playClickSound = useSound('sounds/click.mp3', 0.2);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    playClickSound();
    onClick();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-transparent border-4 border-secondary rounded-3xl flex items-center justify-center hover:bg-secondary/20 transition-all shadow-lg`}
      >
        {icon}
      </motion.button>
      
      {/* Tooltip de confirmación */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-8 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap z-10"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

const ContactWindow = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`${type} copiado: ${text}`);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactMethods = [
    {
      icon: (
        <svg className={`${isMobile ? 'w-10 h-10' : 'w-16 h-16'} stroke-secondary`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: t('contact.copied'),
      onClick: () => copyToClipboard('+57 3246244615', 'Teléfono'),
      ariaLabel: 'Copiar número de teléfono'
    },
    {
      icon: (
        <svg className={`${isMobile ? 'w-10 h-10' : 'w-16 h-16'} stroke-secondary`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 10 6 10-6"/>
        </svg>
      ),
      label: t('contact.copied'),
      onClick: () => copyToClipboard('victoriavielmaromero@gmail.com', 'Email'),
      ariaLabel: 'Copiar correo electrónico'
    },
    {
      icon: (
        <svg className={`${isMobile ? 'w-10 h-10' : 'w-16 h-16'} fill-secondary`} viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: t('contact.opening'),
      onClick: () => openLink('https://github.com/smiling011'),
      ariaLabel: 'Abrir perfil de GitHub'
    },
    {
      icon: (
        <svg className={`${isMobile ? 'w-10 h-10' : 'w-16 h-16'} fill-secondary`} viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: t('contact.opening'),
      onClick: () => openLink('https://www.linkedin.com/in/victoria-vielma'),
      ariaLabel: 'Abrir perfil de LinkedIn'
    }
  ];

  return (
    <div className={`flex flex-col items-center justify-center ${isMobile ? 'h-auto py-8' : 'h-full'} ${isMobile ? 'space-y-8' : 'space-y-12'}`}>
      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-primary text-center px-4`}
      >
        {t('contact.header')}
      </motion.h2>

      {/* Contact Buttons */}
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-6' : 'grid-cols-4 gap-8'}`}>
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ContactButton {...method} isMobile={isMobile} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactWindow;
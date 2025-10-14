import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSound } from '../hooks/useSound';
import { useTranslation } from 'react-i18next';

const AboutWindow = () => {
  const { t } = useTranslation();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const playHoverSound = useSound('sounds/hover.mp3', 0.15);
  const playClickSound = useSound('sounds/click.mp3', 0.2);

  const titles = [
    t('about.title1'),
    t('about.title2'),
    t('about.title3')
    
  ];

  // Efecto de máquina de escribir
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentTitle) {
      // Pausa antes de empezar a borrar
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      // Cambiar al siguiente título
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return currentTitle.substring(0, prev.length - 1);
        } else {
          return currentTitle.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const handleSocialClick = (url) => {
    playClickSound();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (email) => {
    playClickSound();
    window.location.href = `mailto:${email}`;
  };

  const handleCVClick = () => {
    playClickSound();
    window.open('documents/Hoja de Vida Victoria Vielma.pdf', '_blank');
};

  return (
    <div className="flex gap-8 items-start">
      {/* Profile Section */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4 flex-shrink-0"
      >
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full border-4 border-primary shadow-xl overflow-hidden">
          <img 
            src="images/pixilart-drawing.png" 
            alt="Victoria Vielma"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
            onClick={() => handleSocialClick('https://github.com/smiling011')}
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
            onClick={() => handleSocialClick('https://www.linkedin.com/in/victoria-vielma')}
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
            onClick={() => handleEmailClick('victoriavielmaromero@gmail.com')}
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
          </motion.button>
        </div>

        {/* CV Button con animación flotante */}
        <motion.button
          onClick={handleCVClick}
          onMouseEnter={playHoverSound}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -12, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            hover: {
              duration: 0.2
            }
          }}
          className="w-full px-8 py-3 bg-secondary text-primary font-bold rounded-full border-4 border-primary shadow-lg hover:bg-primary hover:text-white transition-colors text-center cursor-pointer"
        >
          CV
        </motion.button>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 space-y-6"
      >
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            {t('about.hello')}
          </h1>
          <h2 className="text-5xl font-bold text-primary mb-4">
            {t('about.name')}
          </h2>
          
          {/* Título con efecto de máquina de escribir */}
          <h3 className="text-2xl font-bold text-primary mb-6 h-8">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 bg-primary ml-1"
            />
          </h3>
        </div>

        <div className="space-y-4 text-primary leading-relaxed">
          <p>
            {t('about.description1')}
          </p>
          <p>
            {t('about.description2')}
          </p>
          <p>
            {t('about.description3')}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutWindow;
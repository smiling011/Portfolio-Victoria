import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSound } from '../hooks/useSound';

import aboutMe from '../assets/icons/About Me.png';
import skillsIcon from '../assets/icons/Skills.png';
import projectsIcon from '../assets/icons/Proyectos.png';
import contactIcon from '../assets/icons/Contacto.png';

const MobileMenuButton = ({ icon, label, onClick }) => {
  const playClickSound = useSound('sounds/click.mp3', 0.3);

  const handleClick = () => {
    playClickSound();
    onClick();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="flex flex-col items-center justify-between gap-3 p-6 bg-tertiary rounded-3xl border-3 border-primary shadow-lg h-40 w-full"
    >
      <img src={icon} alt={label} className="w-16 h-16 object-contain" />
      <span className="text-primary text-sm font-bold uppercase tracking-wide text-center leading-tight">
        {label}
      </span>
    </motion.button>
  );
};

const MobileMenu = ({ onOpenWindow }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6">
      {/* Logo/Título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-2">
          Victoria's Desktop
        </h1>
        <p className="text-primary/70 text-sm">
          {t('about.title1')}
        </p>
      </motion.div>

      {/* Grid de botones */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <MobileMenuButton
            icon={aboutMe}
            label={t('sidebar.about')}
            onClick={() => onOpenWindow('about')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MobileMenuButton
            icon={skillsIcon}
            label={t('sidebar.skills')}
            onClick={() => onOpenWindow('skills')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MobileMenuButton
            icon={projectsIcon}
            label={t('sidebar.projects')}
            onClick={() => onOpenWindow('projects')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <MobileMenuButton
            icon={contactIcon}
            label={t('sidebar.contact')}
            onClick={() => onOpenWindow('contact')}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 text-center"
      >
        <p className="text-primary/70 text-xs">
          {t('footer.rights')}
        </p>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
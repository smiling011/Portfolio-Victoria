import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import { useTranslation } from 'react-i18next';

import aboutMe from '../assets/icons/About Me.png';
import skillsIcon from '../assets/icons/Skills.png';
import projectsIcon from '../assets/icons/Proyectos.png';
import contactIcon from '../assets/icons/Contacto.png';


const SidebarButton = ({ icon, label, onClick }) => {
  const playClickSound = useSound('sounds/click.mp3', 0.3);

  const handleClick = () => {
    playClickSound();
    onClick();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:20 transition-colors cursor-pointer"
    >
      <div className="">
        <img src={icon} alt={label} className="w-20 h-20 object-contain" />
      </div>
      <span className="text-primary text-sm font-bold uppercase tracking-wide">
        {label}
      </span>
    </motion.button>
  );
};

const Sidebar = ({ onOpenWindow }) => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-secondary flex flex-col items-center py-8 gap-6 z-50">
      <SidebarButton
        icon= {aboutMe}
        label={t('sidebar.about')}
        onClick={() => onOpenWindow('about')}
      />

      <SidebarButton
        icon= {skillsIcon}
        label={t('sidebar.skills')}
        onClick={() => onOpenWindow('skills')}
      />

      <SidebarButton
        icon= {projectsIcon}
        label={t('sidebar.projects')}
        onClick={() => onOpenWindow('projects')}
      />

      <SidebarButton
        icon= {contactIcon}
        label={t('sidebar.contact')}
        onClick={() => onOpenWindow('contact')}
      />
    </div>
  );
};

export default Sidebar;
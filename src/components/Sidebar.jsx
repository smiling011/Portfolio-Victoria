import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

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
      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
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
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-secondary flex flex-col items-center py-8 gap-6 z-50">
      <SidebarButton
        icon="src/assets/icons/About Me.png"
        label="Sobre mí"
        onClick={() => onOpenWindow('about')}
      />

      <SidebarButton
        icon="src/assets/icons/Skills.png"
        label="Habilidades"
        onClick={() => onOpenWindow('skills')}
      />

      <SidebarButton
        icon="src/assets/icons/Proyectos.png"
        label="Proyectos"
        onClick={() => onOpenWindow('projects')}
      />

      <SidebarButton
        icon="src/assets/icons/Contacto.png"
        label="Contacto"
        onClick={() => onOpenWindow('contact')}
      />
    </div>
  );
};

export default Sidebar;
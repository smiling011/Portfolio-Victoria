import { motion } from 'framer-motion';

const SidebarButton = ({ icon, label, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
  >
    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
      {icon}
    </div>
    <span className="text-primary text-sm font-bold uppercase tracking-wide">
      {label}
    </span>
  </motion.button>
);

const Sidebar = ({ onOpenWindow }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-secondary flex flex-col items-center py-8 gap-6 z-50">
      <SidebarButton
        icon={
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4"/>
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
            <circle cx="12" cy="8" r="1" fill="currentColor"/>
          </svg>
        }
        label="Sobre mí"
        onClick={() => onOpenWindow('about')}
      />

      <SidebarButton
        icon={
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        }
        label="Habilidades"
        onClick={() => onOpenWindow('skills')}
      />

      <SidebarButton
        icon={
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            <path d="M9 13h6M9 17h3"/>
          </svg>
        }
        label="Proyectos"
        onClick={() => onOpenWindow('projects')}
      />

      <SidebarButton
        icon={
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m2 7 10 6 10-6"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        }
        label="Contacto"
        onClick={() => onOpenWindow('contact')}
      />
    </div>
  );
};

export default Sidebar;

import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const MobileWindow = ({ id, title, children, onClose }) => {
  const playCloseSound = useSound('sounds/close.mp3', 0.3);

  const handleClose = () => {
    playCloseSound();
    setTimeout(() => onClose(id), 100);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-tertiary z-[60] flex flex-col"
    >
      {/* Header */}
      <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b-4 border-primary">
        <h2 className="text-primary font-bold text-xl uppercase tracking-wide">
          {title}
        </h2>
        <button
          onClick={handleClose}
          className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-tertiary">
        {children}
      </div>
    </motion.div>
  );
};

export default MobileWindow;
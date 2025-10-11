import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSound } from '../hooks/useSound';

const Intro = ({ onStart }) => {
  const [isExiting, setIsExiting] = useState(false);
  const playClickSound = useSound('sounds/click.mp3', 0.3);
//   const playOpenSound = useSound('sounds/open.mp3', 0.4);

  const handleStart = () => {
    playClickSound();
    setIsExiting(true);
    
    // Reproducir sonido de apertura
    // setTimeout(() => {
    //   playOpenSound();
    // }, 300);

    // Esperar a que termine la animación antes de cambiar de pantalla
    setTimeout(() => {
      onStart();
    }, 1500);
  };

  // Animación de las estrellas
  const StarParticle = ({ delay, x, y, size }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 1
      }}
      className="absolute text-white"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        fontSize: `${size}px`
      }}
    >
      ✨
    </motion.div>
  );

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            filter: "blur(20px)"
          }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
          className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-[100] overflow-hidden"
        >
          {/* Partículas de estrellas */}
          {/* <StarParticle delay={0} x={15} y={20} size={20} />
          <StarParticle delay={0.3} x={85} y={25} size={16} />
          <StarParticle delay={0.6} x={25} y={70} size={18} />
          <StarParticle delay={0.9} x={75} y={65} size={22} />
          <StarParticle delay={1.2} x={50} y={15} size={16} />
          <StarParticle delay={1.5} x={10} y={50} size={20} />
          <StarParticle delay={1.8} x={90} y={55} size={18} /> */}

          {/* Logo animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="relative mb-16"
          >
            {/* SVG del logo */}
            <motion.img
              src="src/assets/img/MY DESKTOP.png"
              alt="Victoria's Desktop"
              className="w-[800px] h-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Brillo animado sobre el logo */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ filter: 'blur(10px)' }}
            />
          </motion.div>

          {/* Botón PLAY */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              scale: { delay: 1, duration: 0.5 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="px-20 py-5 bg-tertiary text-primary font-bold text-3xl rounded-full border-4 border-primary shadow-2xl hover:bg-primary hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
          >
            PLAY
          </motion.button>

          {/* Texto decorativo opcional */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.7, 0] }}
            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute bottom-10 text-primary/70 text-sm"
          >
            Presiona PLAY para comenzar
          </motion.p>
        </motion.div>
      ) : (
        // Pantalla de transición
        <motion.div
          key="transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-secondary z-[100] flex items-center justify-center"
        >
          {/* Círculo que se expande desde el centro */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 100 }}
            transition={{ 
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="w-20 h-20 rounded-full bg-tertiary"
          />
          
          {/* Texto de carga opcional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1 }}
            className="absolute text-primary font-bold text-2xl"
          >
            Cargando...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
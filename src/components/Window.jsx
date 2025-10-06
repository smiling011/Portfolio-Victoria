import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const Window = ({ 
  id, 
  title, 
  children, 
  position, 
  size, 
  zIndex,
  onClose, 
  onFocus,
  onPositionChange 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef(null);

  const handleDragStart = () => {
    setIsDragging(true);
    onFocus(id);
  };

  const handleDragEnd = (e, info) => {
    setIsDragging(false);
    onPositionChange(id, {
      x: position.x + info.offset.x,
      y: position.y + info.offset.y
    });
  };

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex,
      }}
      onMouseDown={() => onFocus(id)}
      className={`bg-tertiary rounded-2xl shadow-2xl border-4 border-primary overflow-hidden ${
        isDragging ? 'cursor-grabbing' : 'cursor-default'
      }`}
    >
      {/* Window Header */}
      <div className="bg-tertiary border-b-4 border-primary px-6 py-3 flex items-center justify-between cursor-grab active:cursor-grabbing">
        <h2 className="text-primary font-bold text-lg tracking-wide">
          {title}
        </h2>
        <button
          onClick={() => onClose(id)}
          className=""
        >
          <span className="text-primary font-bold text-xl leading-none">[X]</span>
        </button>
      </div>

      {/* Window Content */}
      <div className="h-[calc(100%-60px)] overflow-y-auto bg-tertiary p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
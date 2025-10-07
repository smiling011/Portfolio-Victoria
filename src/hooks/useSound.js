import { useCallback } from 'react';

export const useSound = (soundPath, volume = 0.3) => {
  const playSound = useCallback(() => {
    try {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      
      audio.play().catch(error => {
        console.log('Error al reproducir el sonido:', error);
      });
      
      audio.onended = () => {
        audio.remove();
      };
    } catch (error) {
      console.log('Error al crear el audio:', error);
    }
  }, [soundPath, volume]);

  return playSound;
};
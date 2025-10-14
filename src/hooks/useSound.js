import { useCallback } from 'react';
import { useSoundManager } from './useSoundManager';

export const useSound = (soundPath, volume = 0.3) => {
  const isMuted = useSoundManager((state) => state.isMuted);

  const playSound = useCallback(() => {
    if (isMuted) return; // No reproducir si está silenciado

    try {
      const fullPath = import.meta.env.BASE_URL + soundPath;
      const audio = new Audio(fullPath);
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
  }, [soundPath, volume, isMuted]);

  return playSound;
};
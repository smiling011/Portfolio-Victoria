import { useCallback } from 'react';

export const useSound = (soundPath, volume = 0.3) => {
  const playSound = useCallback(() => {
    try {
      // Agregar la base URL de Vite automáticamente
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
  }, [soundPath, volume]);

  return playSound;
};
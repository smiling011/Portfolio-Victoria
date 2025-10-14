import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store global para el estado del sonido
export const useSoundManager = create(
  persist(
    (set) => ({
      isMuted: false,
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
      setMuted: (muted) => set({ isMuted: muted }),
    }),
    {
      name: 'sound-settings',
    }
  )
);
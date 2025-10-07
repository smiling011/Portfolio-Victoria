export const SOUNDS = {
  hover: '/sounds/hover.mp3',
  click: '/sounds/click.mp3',
  open: '/sounds/open.mp3',
  close: '/sounds/close.mp3',
};

// Sonidos aleatorios para habilidades
export const getRandomHoverSound = () => {
  const hoverSounds = [
    '/sounds/hover1.mp3',
    '/sounds/hover2.mp3',
    '/sounds/hover3.mp3',
  ];
  return hoverSounds[Math.floor(Math.random() * hoverSounds.length)];
};
import { useState, useEffect } from "react";

import bunny1 from "../assets/icons/Bunny1.png";
import bunny2 from "../assets/icons/Bunny2.png";
import bunny3 from "../assets/icons/Bunny3.png";
import bunny4 from "../assets/icons/Bunny4.png";


const frames = [bunny1, bunny2, bunny3, bunny2];

export default function BunnyAnimation() {
  const [t, setT] = useState(0);
  const [x, setX] = useState(100);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setT(prev => prev + 0.15); // 🔥 controla TODO
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // 🐰 movimiento horizontal
  useEffect(() => {
    setX(prev => {
      let next = prev + direction * 3;

      if (next > window.innerWidth - 120) setDirection(-1);
      if (next < 0) setDirection(1);

      return next;
    });
  }, [t]); // 🔥 ligado al tiempo

  // 🎞️ frame basado en la onda
  const frameIndex = Math.floor((t % (Math.PI * 2)) / (Math.PI / 2));
  const frame = frames[frameIndex];

  // 🐇 salto sincronizado
  const jump = Math.max(0, Math.sin(t)) * 20;

  return (
    <img
      src={frame}
      alt="bunny"
      style={{
        position: "absolute",
        left: x,
        bottom: 50 + jump,
        width: "80px",
        transform: direction === -1 ? "scaleX(-1)" : "scaleX(1)",
        imageRendering: "pixelated",
        pointerEvents: "none",
      }}
    />
  );
}
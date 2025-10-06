import { useEffect, useState } from "react";
import Window from "./Window";
import About from "./windows/About";
import Projects from "./windows/Projects";
import Skills from "./windows/Skills";

export default function Desktop() {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    const handleOpen = e => {
      const id = e.detail;
      setWindows(prev => (prev.includes(id) ? prev : [...prev, id]));
    };
    document.addEventListener("openWindow", handleOpen);
    return () => document.removeEventListener("openWindow", handleOpen);
  }, []);

  const closeWindow = id => setWindows(prev => prev.filter(w => w !== id));

  const components = {
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
  };

  return (
    <div className="relative flex-1 bg-neutral-900 overflow-hidden">
      {windows.map(id => (
        <Window key={id} id={id} title={id} onClose={() => closeWindow(id)}>
          {components[id]}
        </Window>
      ))}
    </div>
  );
}

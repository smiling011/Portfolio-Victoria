import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSound } from '../hooks/useSound';

const TechBadge = ({ icon, name }) => {
  const playHoverSound = useSound('sounds/hover.mp3', 0.15);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={playHoverSound}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border-2 border-primary"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-bold text-primary text-sm">{name}</span>
    </motion.div>
  );
};

const ProjectTab = ({ name, isActive, onClick, icon }) => {
  const playClickSound = useSound('sounds/click.mp3', 0.2);

  const handleClick = () => {
    playClickSound();
    onClick();
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`px-6 py-3 rounded-t-xl font-bold border-t-4 border-x-4 border-primary transition-all ${
        isActive 
          ? 'bg-tertiary text-primary -mb-1 z-10' 
          : 'bg-secondary text-primary/70 hover:bg-secondary/80'
      }`}
    >
      <span className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        {name}
      </span>
    </motion.button>
  );
};

const ProjectCard = ({ project }) => {
  const playHoverSound = useSound('sounds/hover.mp3', 0.1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary rounded-3xl p-8 border-4 border-primary shadow-xl"
    >
      <div className="flex gap-8 items-start">
        {/* Project Image/GIF */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onMouseEnter={playHoverSound}
          className="flex-shrink-0 w-60 h-97  "
        >
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Info */}
        <div className="flex-1 space-y-6">
          {/* Project Icon & Title */}
          <div className="flex items-center gap-4">
            <span className="text-6xl">{project.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-primary uppercase">
                {project.name}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-primary text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} {...tech} />
            ))}
          </div>

          {/* Repository Button */}
          <motion.a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border-3 border-primary font-bold text-primary hover:bg-primary hover:text-white transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver repositorio
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsWindow = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: 'DACKY APP',
    //   icon: 'src/assets/img/MiniLogoDacky.png', // Coloca tu icono aquí
      image: 'src/assets/img/Dacky.gif', // Coloca tu GIF aquí
      description: 'Dacky es una aplicación móvil diseñada para el rastreo GPS de mascotas, permitiendo a los dueños gestionar la información básica, su tarjeta virtual de vacunas y facilitar su recuperación en caso de extravío mediante un código QR en el collar.',
      repository: 'https://github.com/smiling011/ProyectoDacky.git',
      technologies: [
        { icon: '🐍', name: 'Python' },
        { icon: '🌶️', name: 'Flask' },
        { icon: '🎯', name: 'Dart' },
        { icon: '🦋', name: 'Flutter' },
        { icon: '🗄️', name: 'MySQL' },
        { icon: '🐋', name: 'Docker' },
        { icon: '🤖', name: 'Android Studio' },
        { icon: '🐙', name: 'GitHub' },
        { icon: '📝', name: 'Notion' },
      ]
    },
    // Puedes agregar más proyectos aquí
    // {
    //   name: 'PROYECTO 2',
    //   icon: '🚀',
    //   image: '/images/proyecto2.gif',
    //   description: 'Descripción del proyecto 2...',
    //   repository: 'https://github.com/tu-usuario/proyecto2',
    //   technologies: [...]
    // }
  ];

  return (
    <div className="space-y-4">
      {/* Tabs de proyectos */}
      <div className="flex gap-2 border-b-4 border-primary">
        {projects.map((project, index) => (
          <ProjectTab
            key={index}
            name={project.name}
            icon={project.icon}
            isActive={activeProject === index}
            onClick={() => setActiveProject(index)}
          />
        ))}
      </div>

      {/* Project Content */}
      <ProjectCard project={projects[activeProject]} />
    </div>
  );
};

export default ProjectsWindow;
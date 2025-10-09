import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const SkillBadge = ({ icon, name }) => {
  const playSound = useSound('sounds/hover.mp3', 0.2);

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={playSound}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border-2 border-white shadow-md cursor-pointer transition-all"
      style={{ width: 'fit-content', minWidth: 'max-content' }}
    >
      <img src={icon} alt={name} className="w-6 h-6 flex-shrink-0" />
      <span className="font-bold text-white text-sm whitespace-nowrap">{name}</span>
    </motion.div>
  );
};

const SkillsWindow = () => {
  const skills = {
    languages: [
      { icon: 'src/assets/icons/python.png', name: 'Python' },
      { icon: 'src/assets/icons/javascript.png', name: 'JavaScript' },
      { icon: 'src/assets/icons/dart.png', name: 'Dart' },
      { icon: 'src/assets/icons/html.png', name: 'HTML' },
      { icon: 'src/assets/icons/css.png', name: 'CSS' },
    ],
    frameworks: [
      { icon: 'src/assets/icons/mysql.png', name: 'MySQL' },
      { icon: 'src/assets/icons/django.png', name: 'Django' },
      { icon: 'src/assets/icons/flutter.png', name: 'Flutter' },
      { icon: 'src/assets/icons/flask.png', name: 'Flask' },
      { icon: 'src/assets/icons/android-studio.png', name: 'Android Studio' },
    ],
    tools: [
      { icon: 'src/assets/icons/notion.png', name: 'Notion' },
      { icon: 'src/assets/icons/git.png', name: 'Git' },
      { icon: 'src/assets/icons/figma.png', name: 'Figma' },
      { icon: 'src/assets/icons/github.png', name: 'GitHub' },
      { icon: 'src/assets/icons/docker.png', name: 'Docker' },
    ],
    languages_spoken: [
      { icon: 'src/assets/icons/UK.png', name: 'English - B1 en formación' },
      { icon: 'src/assets/icons/ES.png', name: 'Español - Nativo' },
    ],
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b-2 border-primary pb-4 mb-6">
        <p className="text-primary text-lg">
          Lenguajes, frameworks, base de datos, herramientas e idiomas que manejo.
        </p>
      </div>

      {/* Skills Grid - Centrado y con scroll */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center justify-center space-y-5 px-8">
          {/* Lenguajes */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {skills.languages.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillBadge {...skill} />
              </motion.div>
            ))}
          </div>

          {/* Frameworks */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {skills.frameworks.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 5) * 0.1 }}
              >
                <SkillBadge {...skill} />
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {skills.tools.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 10) * 0.1 }}
              >
                <SkillBadge {...skill} />
              </motion.div>
            ))}
          </div>

          {/* Idiomas */}
          <div className="flex flex-wrap justify-center gap-3 w-full mt-4">
            {skills.languages_spoken.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 15) * 0.1 }}
              >
                <SkillBadge {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
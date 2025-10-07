import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const SkillBadge = ({ icon, name, color }) => {
  const playSound = useSound('sounds/hover.mp3', 0.2);

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={playSound}
      className={`flex items-center gap-3 px-6 py-3 rounded-full border-3 border-primary shadow-lg cursor-pointer transition-all ${color}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-bold text-primary">{name}</span>
    </motion.div>
  );
};

const SkillsWindow = () => {
  const skills = {
    languages: [
      { icon: '🐍', name: 'Python', color: 'bg-secondary' },
      { icon: '📜', name: 'JavaScript', color: 'bg-secondary' },
      { icon: '🎯', name: 'Dart', color: 'bg-secondary' },
      { icon: '📄', name: 'HTML', color: 'bg-secondary' },
      { icon: '🎨', name: 'CSS', color: 'bg-secondary' },
    ],
    frameworks: [
      { icon: '🗄️', name: 'MySQL', color: 'bg-secondary' },
      { icon: '🌿', name: 'Django', color: 'bg-secondary' },
      { icon: '🦋', name: 'Flutter', color: 'bg-secondary' },
      { icon: '🌶️', name: 'Flask', color: 'bg-secondary' },
      { icon: '🤖', name: 'Android Studio', color: 'bg-secondary' },
    ],
    tools: [
      { icon: '📝', name: 'Notion', color: 'bg-secondary' },
      { icon: '🌳', name: 'Git', color: 'bg-secondary' },
      { icon: '🎨', name: 'Figma', color: 'bg-secondary' },
      { icon: '🐙', name: 'GitHub', color: 'bg-secondary' },
      { icon: '🐋', name: 'Docker', color: 'bg-secondary' },
    ],
    languages_spoken: [
      { icon: '🇬🇧', name: 'English - B1 en formación', color: 'bg-secondary' },
      { icon: '🇪🇸', name: 'Español - Nativo', color: 'bg-secondary' },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b-2 border-primary pb-4">
        <p className="text-primary text-lg">
          Lenguajes, frameworks, base de datos, herramientas e idiomas que manejo.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {/* Lenguajes */}
        <div className="grid grid-cols-5 gap-4">
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
        <div className="grid grid-cols-5 gap-4">
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
        <div className="grid grid-cols-5 gap-4">
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
        <div className="grid grid-cols-2 gap-4 mt-8">
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
  );
};

export default SkillsWindow;
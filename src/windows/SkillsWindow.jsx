import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import { useTranslation } from 'react-i18next';

// Importaciond ela img
import python from '../assets/icons/python.png';
import flask from '../assets/icons/flask.png';
import dart from '../assets/icons/dart.png';
import flutter from '../assets/icons/flutter.png';
import mysql from '../assets/icons/mysql.png';
import docker from '../assets/icons/docker.png';
import androidStudio from '../assets/icons/android-studio.png';
import github from '../assets/icons/github.png';
import notion from '../assets/icons/notion.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import django from '../assets/icons/django.png';
import git from '../assets/icons/git.png';
import figma from '../assets/icons/figma.png';
import UK from '../assets/icons/UK.png';
import ES from '../assets/icons/ES.png';



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
  const { t } = useTranslation();
  const skills = {
    languages: [
      { icon: python, name: 'Python' },
      { icon: javascript, name: 'JavaScript' },
      { icon: dart, name: 'Dart' },
      { icon: html, name: 'HTML' },
      { icon: css, name: 'CSS' },
    ],
    frameworks: [
      { icon: mysql, name: 'MySQL' },
      { icon: django, name: 'Django' },
      { icon: flutter, name: 'Flutter' },
      { icon: flask, name: 'Flask' },
      { icon: androidStudio, name: 'Android Studio' },
    ],
    tools: [
      { icon: notion, name: 'Notion' },
      { icon: git, name: 'Git' },
      { icon: figma, name: 'Figma' },
      { icon: github, name: 'GitHub' },
      { icon: docker, name: 'Docker' },
    ],
    languages_spoken: [
      { icon: UK, name: t('skills.english') },
      { icon: ES, name: t('skills.spanish') },
    ],
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b-2 border-primary pb-4 mb-6">
        <p className="text-primary text-lg">
          {t('skills.header')}
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
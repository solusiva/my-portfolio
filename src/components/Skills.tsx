import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, TestTube } from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 }
      ],
      color: 'from-accentCyan to-blue-500'
    },
    {
      icon: Database,
      title: 'Web Development',
      skills: [
        { name: 'MERN Stack', level: 85 },
        { name: 'Full Stack Development', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 }
      ],
      color: 'from-accentViolet to-purple-500'
    },
    {
      icon: TestTube,
      title: 'Software Testing',
      skills: [
        { name: 'JUnit', level: 75 },
        { name: 'Selenium', level: 70 },
        { name: 'Testing Fundamentals', level: 80 },
        { name: 'Quality Assurance', level: 75 }
      ],
      color: 'from-accentEmerald to-green-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter Fundamentals', level: 65 },
        { name: 'Mobile UI/UX', level: 60 },
        { name: 'Cross-platform Development', level: 65 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accentCyan to-accentViolet bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-accentCyan font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bgDark rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8"
          >
            Technologies & Tools
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'MySQL', 'PHP', 
              'HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'SQLite', 'Git', 'Android'
            ].map((tech, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-accentCyan/20 to-accentViolet/20 rounded-full text-sm font-medium text-gray-300 border border-accentCyan/30 hover:border-accentCyan hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Aiimtech Solutions',
      duration: 'Jun 2025 – Present',
      description: 'Developing full stack applications and contributing to backend + frontend systems.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Python'],
      type: 'current',
      responsibilities: [
        'Developing scalable full-stack web applications',
        'Contributing to both frontend and backend development',
        'Collaborating with cross-functional teams',
        'Implementing modern web development practices'
      ]
    },
    {
      title: 'Python & Flask Developer (Intern)',
      company: 'Aiimtech Solutions',
      duration: 'Dec 2024 – Jun 2025',
      description: 'Built a comprehensive data analytics website using Python and Flask framework.',
      technologies: ['Python', 'Flask', 'HTML', 'JavaScript', 'SQLite'],
      type: 'internship',
      responsibilities: [
        'Developed a data analytics website from scratch',
        'Implemented backend APIs using Flask framework',
        'Created interactive frontend with HTML and JavaScript',
        'Managed database operations with SQLite',
        'Gained hands-on experience in full-stack development'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20">
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
            Professional Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            My journey in software development, from internship to full-stack development role, 
            showcasing growth and hands-on experience in modern technologies.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accentCyan via-accentViolet to-accentEmerald"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={index}
                  experience={experience}
                  index={index}
                  isEven={index % 2 === 0}
                  variants={itemVariants}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skills Gained Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Skills Developed Through Experience</h3>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Backend Development',
                skills: ['Python', 'Flask', 'Node.js', 'API Development', 'Database Design'],
                icon: '🚀'
              },
              {
                title: 'Frontend Development',
                skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
                icon: '💻'
              },
              {
                title: 'Full Stack Integration',
                skills: ['System Architecture', 'Database Integration', 'Version Control', 'Team Collaboration'],
                icon: '⚙️'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="text-3xl mb-4 text-center">{category.icon}</div>
                <h4 className="text-xl font-bold text-accentCyan mb-4 text-center">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-accentViolet rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
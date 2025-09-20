import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'SMART FARMER APPLICATION',
      description: 'Developed during undergraduate studies to help farmers with agricultural management, crop monitoring, and data-driven farming decisions.',
      technologies: ['Android', 'MySQL', 'Java', 'XML'],
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Mobile Application'
    },
    {
      title: 'QUESTIONER',
      description: 'A comprehensive web application for college exam management system developed during postgraduate studies, enabling efficient exam creation and management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Web Application'
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
    <section id="projects" className="py-20 bg-bgDarker/30">
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            mobile applications, and problem-solving abilities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-accentCyan to-accentViolet rounded-xl font-semibold text-white shadow-soft hover:shadow-glow transition-all duration-300 inline-block"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
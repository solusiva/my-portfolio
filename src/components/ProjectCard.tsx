import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-bgDarker/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="p-2 bg-accentCyan/20 backdrop-blur-sm rounded-lg">
            {project.category === 'Mobile Application' ? (
              <Smartphone size={16} className="text-accentCyan" />
            ) : (
              <Code size={16} className="text-accentCyan" />
            )}
          </div>
          <span className="bg-accentCyan/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-accentCyan">
            {project.category}
          </span>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-bgDark/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-accentCyan transition-colors duration-300"
            aria-label="View GitHub Repository"
          >
            <Github size={16} />
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-bgDark/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-accentViolet transition-colors duration-300"
            aria-label="View Live Demo"
          >
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accentCyan transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accentCyan/20 text-accentCyan rounded-full text-xs font-medium border border-accentCyan/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-bgDark/50 border border-gray-600 rounded-lg text-gray-300 hover:border-accentCyan hover:text-accentCyan transition-all duration-300 flex-1 justify-center"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
          
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accentCyan to-accentViolet rounded-lg text-white hover:shadow-glow transition-all duration-300 flex-1 justify-center"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
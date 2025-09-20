import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  type: string;
  responsibilities: string[];
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isEven: boolean;
  variants: any;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, isEven, variants }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'from-accentEmerald to-green-500';
      case 'internship':
        return 'from-accentCyan to-blue-500';
      default:
        return 'from-accentViolet to-purple-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'current':
        return 'Current Position';
      case 'internship':
        return 'Internship';
      default:
        return 'Experience';
    }
  };

  return (
    <motion.div
      variants={variants}
      className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 ml-12 md:ml-0"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-gradient-to-r ${getTypeColor(experience.type)} text-white`}>
                {getTypeLabel(experience.type)}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
              <p className="text-accentCyan font-semibold">{experience.company}</p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(experience.type)}`}>
                <Briefcase size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center text-gray-400 mb-4">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{experience.duration}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-accentViolet mb-2">Key Responsibilities:</h4>
            <ul className="space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                  <div className="w-1.5 h-1.5 bg-accentCyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-accentEmerald mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(experience.type)}/20 border border-current text-white`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.3 }}
          className={`w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(experience.type)} shadow-glow flex items-center justify-center`}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default TimelineItem;
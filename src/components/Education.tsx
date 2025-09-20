import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Anna University',
      duration: '2022 - 2024',
      status: 'Completed',
      description: 'Advanced studies in computer applications with focus on software development, system analysis, and modern programming paradigms.',
      icon: GraduationCap,
      color: 'from-accentViolet to-purple-500'
    },
    {
      degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
      institution: 'Madurai Kamarajar University',
      duration: '2019 - 2022',
      status: 'Completed',
      description: 'Comprehensive study of information technology fundamentals, programming, database management, and web technologies.',
      icon: GraduationCap,
      color: 'from-accentCyan to-blue-500'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'State Board',
      duration: '2020',
      percentage: '63.18%',
      status: 'Completed',
      description: 'Successfully completed higher secondary education with focus on science and mathematics.',
      icon: Award,
      color: 'from-accentEmerald to-green-500'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'State Board',
      duration: '2018',
      percentage: '79.2%',
      status: 'Completed',
      description: 'Completed secondary education with strong academic performance.',
      icon: Award,
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
    <section id="education" className="py-20 bg-bgDarker/30">
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
            Educational Background
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            My academic journey from secondary education to postgraduate studies, 
            building a strong foundation in computer science and information technology.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accentCyan transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-accentCyan font-semibold">{edu.institution}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${edu.color} text-white`}>
                  {edu.status}
                </div>
              </div>

              {/* Duration and Percentage */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{edu.duration}</span>
                </div>
                {edu.percentage && (
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-accentEmerald" />
                    <span className="text-sm font-semibold text-accentEmerald">{edu.percentage}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>

              {/* Progress Bar for Completion */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-400">Progress</span>
                  <span className="text-xs font-semibold text-accentCyan">100%</span>
                </div>
                <div className="w-full bg-bgDark rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${edu.color} rounded-full`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievements Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-8 shadow-soft max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Academic Highlights</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentCyan">6+</div>
                <p className="text-gray-300">Years of Education</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentViolet">2</div>
                <p className="text-gray-300">Degrees Earned</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentEmerald">Strong</div>
                <p className="text-gray-300">Academic Foundation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
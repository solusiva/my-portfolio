import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';

const PapersCertifications: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const publications = [
    {
      title: 'INTRUSION DETECTION IN AI',
      venue: 'Login-2023, PSG Engineering College, Coimbatore',
      type: 'Research Paper',
      year: '2023',
      description: 'Published research paper on intrusion detection systems using artificial intelligence techniques, presented at a prestigious engineering conference.',
      icon: FileText,
      color: 'from-accentCyan to-blue-500',
      link: '#'
    }
  ];

  const certifications = [
    {
      title: 'IEEE Professional English',
      issuer: 'IEEE',
      type: 'Professional Certification',
      year: '2024',
      description: 'Professional English certification from IEEE, demonstrating advanced communication skills in technical environments.',
      icon: Award,
      color: 'from-accentViolet to-purple-500',
      credential: 'IEEE-PE-2024'
    },
    {
      title: 'YOGA-KALYΛ KALPAM',
      issuer: 'Certified Institution',
      type: 'Wellness Certification',
      year: '2024',
      description: 'Specialized certification in yoga and wellness practices, showcasing commitment to holistic personal development.',
      icon: Award,
      color: 'from-accentEmerald to-green-500',
      credential: 'YKK-2024'
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
    <section id="papers-certifications" className="py-20">
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
            Publications & Certifications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Research contributions and professional certifications that demonstrate continuous learning 
            and expertise in various domains of technology and personal development.
          </motion.p>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Research Publications
          </motion.h3>
          <div className="grid gap-6">
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${paper.color} group-hover:scale-110 transition-transform duration-300`}>
                    <paper.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-accentCyan transition-colors duration-300">
                        {paper.title}
                      </h4>
                      <div className="flex space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${paper.color} text-white`}>
                          {paper.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                          {paper.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-accentViolet mb-3">
                      <MapPin size={16} className="mr-2" />
                      <span className="font-medium">{paper.venue}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                    <motion.a
                      href={paper.link}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center space-x-2 text-accentCyan hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium">View Publication</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${cert.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accentCyan transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-accentViolet font-semibold mb-3">{cert.issuer}</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                  {cert.credential && (
                    <div className="bg-bgDark/50 rounded-lg p-3">
                      <span className="text-xs text-gray-400">Credential ID:</span>
                      <p className="text-accentEmerald font-mono text-sm">{cert.credential}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-8 shadow-soft"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Academic & Professional Achievements</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentCyan">{publications.length}</div>
                <p className="text-gray-300">Research Papers Published</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentViolet">{certifications.length}</div>
                <p className="text-gray-300">Professional Certifications</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accentEmerald">Ongoing</div>
                <p className="text-gray-300">Continuous Learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PapersCertifications;
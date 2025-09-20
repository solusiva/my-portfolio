import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, Phone, MapPin, Languages } from 'lucide-react';
import profilePic from "../assets/siva.webp";


const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sivasubbramaniyan2002@gmail.com', href: 'mailto:sivasubbramaniyan2002@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 63934 34021', href: 'tel:+916393434021' },
    { icon: MapPin, label: 'Location', value: '53. Keelapatti pillayaar kovil street, Srivilliputhur, Tamilnadu', href: '#' },
    { icon: Languages, label: 'Languages', value: 'Tamil, English', href: '#' }
  ];

  const interests = ['Poem Writer', 'Motivational Speaker', 'Chef'];

  return (
    <section id="about" className="py-20 bg-bgDarker/30">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Summary */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 mx-auto bg-gradient-to-br from-accentCyan/20 to-accentViolet/20 rounded-full p-2 shadow-soft"
              >
                <img
                  src={profilePic}
                  alt="SIVASUBRAMANIYAN L"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-accentCyan to-accentViolet rounded-full flex items-center justify-center shadow-glow">
                <User size={24} className="text-white" />
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft"
            >
              <h3 className="text-2xl font-bold text-accentCyan mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a fresher with strong problem-solving, decision-making, communication, and leadership skills. 
                Passionate about full-stack development and committed to building reliable, user-friendly applications 
                that solve real-world problems.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Information and Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft"
            >
              <h3 className="text-2xl font-bold text-accentViolet mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-bgDark/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accentCyan to-accentViolet rounded-lg flex items-center justify-center">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-400">{info.label}</p>
                      {info.href.startsWith('#') ? (
                        <p className="text-gray-300 break-words">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-accentCyan transition-colors duration-300 break-words"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft"
            >
              <h3 className="text-2xl font-bold text-accentEmerald mb-4">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-accentEmerald/20 to-accentCyan/20 rounded-full text-sm font-medium text-gray-300 border border-accentEmerald/30 hover:border-accentEmerald/60 transition-all duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
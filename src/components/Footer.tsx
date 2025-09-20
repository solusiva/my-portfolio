import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:sivasubbramaniyan2002@gmail.com',
      label: 'Email',
      color: 'hover:text-accentCyan'
    },
    {
      icon: Phone,
      href: 'tel:+916393434021',
      label: 'Phone',
      color: 'hover:text-accentViolet'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-bgDarker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-accentCyan to-accentViolet bg-clip-text text-transparent mb-4">
                  SIVASUBRAMANIYAN L
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Full-Stack Developer passionate about creating reliable, user-friendly applications 
                  and turning innovative ideas into working software solutions.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-bgDark rounded-lg text-gray-400 ${social.color} transition-all duration-300 shadow-soft hover:shadow-glow`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-accentCyan transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3 text-gray-400">
                <a
                  href="mailto:sivasubbramaniyan2002@gmail.com"
                  className="block hover:text-accentCyan transition-colors duration-300"
                >
                  sivasubbramaniyan2002@gmail.com
                </a>
                <a
                  href="tel:+916393434021"
                  className="block hover:text-accentViolet transition-colors duration-300"
                >
                  +91 63934 34021
                </a>
                <p className="text-sm">
                  Srivilliputhur, Tamil Nadu, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} SIVASUBRAMANIYAN L — All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-400 mx-1" /> using React & Tailwind CSS
            </p>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gradient-to-r from-accentCyan to-accentViolet rounded-lg text-white shadow-soft hover:shadow-glow transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accentCyan via-accentViolet to-accentEmerald"></div>
    </footer>
  );
};

export default Footer;
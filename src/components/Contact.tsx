import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sivasubbramaniyan2002@gmail.com',
      href: 'mailto:sivasubbramaniyan2002@gmail.com',
      color: 'from-accentCyan to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 63934 34021',
      href: 'tel:+916393434021',
      color: 'from-accentViolet to-purple-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Srivilliputhur, Tamil Nadu, India',
      href: '#',
      color: 'from-accentEmerald to-green-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sivasubbramaniyan2002@gmail.com',
      color: 'hover:text-accentCyan'
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
    <section id="contact" className="py-20 bg-bgDarker/30">
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accentCyan to-accentViolet mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a great conversation. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="mr-3 text-accentCyan" size={24} />
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.label}</h4>
                      {info.href === '#' ? (
                        <p className="text-gray-300">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-accentCyan transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-bgDarker/50 backdrop-blur-lg rounded-xl text-gray-400 ${social.color} transition-all duration-300 shadow-soft hover:shadow-glow`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-bgDarker/50 backdrop-blur-lg rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="mr-3 text-accentViolet" size={24} />
                Send Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-bgDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 bg-bgDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 bg-bgDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters long'
                      }
                    })}
                    className="w-full px-4 py-3 bg-bgDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accentCyan to-accentViolet rounded-lg font-semibold text-white shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
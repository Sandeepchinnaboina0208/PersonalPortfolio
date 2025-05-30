import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center py-20 px-4 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary-500 block"
            >
              Sandeep Chinnaboina
            </motion.span>
          </h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8"
          >
            {/* You can add a subtitle or role description here */}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg mb-12 max-w-2xl mx-auto"
          >
            I build exceptional digital experiences that are fast, accessible, 
            and designed with best practices in mind.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a 
              href="#projects" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center"
        >
          <button 
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors animate-bounce"
          >
            <ArrowDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

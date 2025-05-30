import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-8 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary-500">Sandeep</span>Chinnaboina
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>© {currentYear} Sandeep Chinnaboina. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
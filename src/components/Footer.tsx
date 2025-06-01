import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      } py-12`}
    >
      <div className="container mx-auto px-4">
        {/* Divider and Copyright */}
        <div
          className={`border-t-4 ${
            theme === 'dark' ? 'border-white' : 'border-gray-800'
          } pt-8 text-center`}
        >
          <p
            className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            © {currentYear} Made with <Heart size={16} className="inline text-red-500" /> by Sandeep Chinnaboina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

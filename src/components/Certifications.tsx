import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data/certifications';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { theme } = useTheme();
  const [activeCert, setActiveCert] = useState<number | null>(null);

  const isDark = theme === 'dark';

  return (
    <section 
      id="certifications" 
      className={`py-20 px-4 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          <p className={`text-center max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            I'm committed to continuous learning and professional development. 
            Here are some of my recent certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`relative group rounded-lg overflow-hidden shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              } transition-transform duration-300 hover:-translate-y-2`}
              onMouseEnter={() => setActiveCert(index)}
              onMouseLeave={() => setActiveCert(null)}
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <img 
                      src={cert.logo} 
                      alt={`${cert.organization} logo`} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {cert.organization}
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Issued: {cert.issueDate}
                    {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                  </p>
                </div>
                
                <p className={`mb-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {cert.description}
                </p>
                
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
                  >
                    Verify Credential <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
              
              {activeCert === index && (
                <div className="absolute top-3 right-3 rotate-12 bg-primary-500 text-white text-xs font-bold py-1 px-3 rounded shadow-md">
                  Certified
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { skills, SkillCategory } from '../data/skills';

const Skills = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('frontend');

  return (
    <section 
      id="skills" 
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
            I've developed a diverse skill set through years of practice and real-world project experience.
            Here's an overview of my technical and soft skills.
          </p>

          {/* Skills Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === category
                    ? 'bg-primary-500 text-white'
                    : theme === 'dark' 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills[activeTab as keyof typeof skills].map((skill) => (
            <div 
              key={skill.name}
              className={`p-6 rounded-lg transition-all ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              } hover:shadow-md`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm font-medium text-primary-500">{skill.level}%</span>
              </div>
              
              <div className={`w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden`}>
                <div 
                  className="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
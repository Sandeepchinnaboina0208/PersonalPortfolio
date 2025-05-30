import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const educationData: Education[] = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "K L University",
    location: "Vijayawada, India",
    period: "2022 - 2026",
    description: "Specialized in Data Science and Big Data Analytics."
  },
  {
    degree: "Intermediate Education",
    institution: "Narayana Junior College",
    location: "Nellore, India",
    period: "2020 - 2022",
    description: "Focused on Biology, Physics, and Chemistry."
  },
  {
    degree: "Schooling",
    institution: "Sri Vivekanda English Medium High School",
    location: "Nellore, India",
    period: "2019 - 2020",
    description: "Focused on foundational education with a strong emphasis on English and Mathematics."
  }
];

const Education = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="education" 
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
            My academic journey has equipped me with a strong foundation in computer science
            and modern development practices.
          </p>
        </div>

        <div className="timeline-container">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-content"
            >
              <div className="timeline-dot"></div>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              }`}>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <GraduationCap size={16} className="mr-2" />
                    {edu.institution}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {edu.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
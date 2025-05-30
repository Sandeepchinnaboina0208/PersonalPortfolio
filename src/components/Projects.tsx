import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects, ProjectType, categories } from '../data/projects';
import workshopImg from './images/workshop.png';


const Projects = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section 
      id="projects" 
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
            Here are some of my recent projects. Each one was carefully crafted to solve
            specific problems and showcase different skills.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : theme === 'dark' 
                      ? 'bg-gray-800 text-white hover:bg-gray-700' 
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                } shadow-sm`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } ${hoveredProject === index ? 'transform scale-[1.02]' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
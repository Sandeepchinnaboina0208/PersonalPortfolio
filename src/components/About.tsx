import { FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
       
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm a driven and enthusiastic full-stack developer with expertise in building dynamic and user-friendly web applications. With proficiency in technologies like React, Django, I love transforming complex ideas into seamless digital experiences.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I enjoy exploring emerging technologies,and contributing to open-source projects. I'm passionate about creating impactful solutions that make a difference in the tech community.
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new hiking trails, 
              experimenting with photography, or diving into the latest tech books 
              and tutorials to stay on top of industry trends.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">Chinnaboina Penchala Sandeep</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">sandeepchinnaboina286@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Location:</h4>
                <p className="text-gray-600 dark:text-gray-300">AndhraPradesh,India</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-300">Open to opportunities</p>
              </div>
            </div>

            <a 
              href="/resume.pdf" 
              className="inline-flex items-center btn-primary"
              download
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-primary-500 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="John working" 
                className="relative rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
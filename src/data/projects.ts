export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  liveUrl: string;
  repoUrl: string;
}

// Available categories for filtering
export const categories = ['web',];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Astrology Prediction System',
    description: 'A web application that provides astrology predictions based on user input.',
    image: '/src/assests/astrologo.png',
    technologies: ['Django', 'Html', 'CSS', 'JavaScript', 'Bootstrap','PostgreSQL'],
    categories: ['web'],
    liveUrl: 'https://github.com/Sandeepchinnaboina0208/AstrologyPredictions',
    repoUrl: 'https://github.com/Sandeepchinnaboina0208/AstrologyPredictions',
  },
   {
    id: 2,
    title: 'Airline Reservation System',
    description: 'A React-based system for seamless flight booking and management.',
    image: '/src/assests/airlogo.png',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    categories: ['web'],
    liveUrl: 'https://github.com/Sandeepchinnaboina0208/Airline-Reservation-Frontend',
    repoUrl: 'https://github.com/Sandeepchinnaboina0208/Airline-Reservation-Frontend',
  },
   {
    id: 4,
    title: 'Workshop Management System',
    description: 'A Java Full Stack solution for scheduling and managing workshops.',
    image: '/src/assests/workshoplogo.png',
    technologies: ['React.js', 'Node.js', 'SpringBoot', 'MysQL'],
    categories: ['web'],
    liveUrl: 'https://github.com/Sandeepchinnaboina0208/Airline-Reservation-Frontend',
    repoUrl: 'https://github.com/Sandeepchinnaboina0208/WMS_Frontend',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    image: '/src/assests/task.png',
    technologies: ['React','Tailwind CSS', 'Superbase'],
    categories: ['web'],
    liveUrl: 'https://sandeepchinnaboina0208.github.io/Task-Management-Application/',
    repoUrl: 'https://github.com/Sandeepchinnaboina0208/Task-Management-Application',
  },
 
  {
    id: 4,
    title: 'Sccop-n-Sip',
    description: 'Developed a responsive business website for Nazeer Cool Drinks to showcase their products and boost online presence.',
    image: '/src/assests/sccop_logo.png',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS','EmailJS'],
    categories: ['web'],
    liveUrl: 'https://nazeercooldrinks.vercel.app/',
    repoUrl: 'https://github.com/Sandeepchinnaboina0208/Scoop-n-Sip',
  },
 
];
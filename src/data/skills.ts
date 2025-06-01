import { Languages } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  ProgrammingLanguages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export const skills: SkillCategory = {
   ProgrammingLanguages: [
    { name: 'C', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 75 },
  ],
  frontend: [
    { name: 'HTML & CSS3', level: 95 },
    { name: 'JavaScript', level: 75 },
    { name: 'TypeScript', level: 80 },
    { name: 'Django', level: 95 },
    { name: 'React', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Next.js', level: 75 },
    
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 90},
  ],
  tools: [
    { name: 'Git & GitHub', level: 95 },
    { name: 'VS Code', level: 95 },
    { name: 'intelliJ', level: 75 },
    { name: 'Eclipse', level: 80 },
    { name: 'Tableau', level: 80 },
    { name: 'PowerBI', level: 85 },
    
    
  ],
};
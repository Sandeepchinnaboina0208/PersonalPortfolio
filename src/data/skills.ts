export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export const skills: SkillCategory = {
  frontend: [
    { name: 'HTML & CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Django', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Next.js', level: 85 },
    
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 85 },
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
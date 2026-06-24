import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 82 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Laravel", level: 80 },
      { name: "PHP", level: 78 },
      { name: "Python", level: 82 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Network Security", level: 72 },
      { name: "Penetration Testing", level: 68 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 75 },
      { name: "Pandas", level: 78 },
      { name: "NumPy", level: 80 },
      { name: "Data Visualization", level: 76 },
    ],
  },
];

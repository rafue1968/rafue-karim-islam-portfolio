export interface Skill {
    id: string;
    name: string;
    category: string;
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    yearsOfExperience: number;
}

export const skills: Skill[] = [
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Language',
        proficiency: 'expert',
        yearsOfExperience: 5,
    },
    {
        id: 'react',
        name: 'React',
        category: 'Framework',
        proficiency: 'expert',
        yearsOfExperience: 5,
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        category: 'Framework',
        proficiency: 'advanced',
        yearsOfExperience: 3,
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Styling',
        proficiency: 'advanced',
        yearsOfExperience: 3,
    },
];

export const getSkillsByCategory = (category: string): Skill[] => {
    return skills.filter((skill) => skill.category === category);
};
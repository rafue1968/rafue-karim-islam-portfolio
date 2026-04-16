export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string | null;
    description: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Company Name',
        role: 'Job Title',
        startDate: '2023-01',
        endDate: null,
        description: 'Brief description of your role',
        technologies: ['React', 'TypeScript'],
    },
];
export interface Project {
    id: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Project One",
        description: "Description of your first project",
        slug: "project-one",
        image: "/images/project-1.jpg",
        tags: ["TypeScript", "React", "Next.js"],
        link: "https://example.com",
        github: "https://github.com/username/project-one",
    },
    {
        id: "2",
        title: "Project Two",
        description: "Description of your second project",
        slug: "project-two",
        image: "/images/project-2.jpg",
        tags: ["TypeScript", "Node.js"],
        link: "https://example.com",
        github: "https://github.com/username/project-two",
    },
];
import Link from "next/link";
import {
  Award,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Python",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Flask",
  "Prisma",
  "Supabase",
  "GitHub Actions",
  "AI Integrations",
  "Project Management",
];

const experiences = [
  {
    role: "Technical Project Manager",
    company: "Ihsan Consulting QMUL",
    period: "Mar 2026 – Present",
    location: "London Area, United Kingdom",
    highlights: [
      "Led technical delivery for a cybersecurity risk-prioritisation platform.",
      "Coordinated architecture and implementation across frontend, backend, database, and AI/ML contributors.",
      "Organised sprint planning, task ownership, and remote team workflows in Notion and GitHub.",
      "Facilitated stakeholder alignment and managed delivery milestones.",
    ],
  },
  {
    role: "AI-First Software Engineer Intern",
    company: "Risidio",
    period: "Dec 2025 – Mar 2026",
    location: "Remote, United Kingdom",
    highlights: [
      "Built reusable Next.js + TypeScript UI components and CMS-driven content pipelines.",
      "Integrated Prismic CMS and Cloudinary for dynamic content and media workflows.",
      "Delivered a GitHub Collab Map capstone with full-stack authentication and mapping features.",
      "Contributed to Agile sprints, code reviews, and production-ready feature delivery.",
    ],
  },
  {
    role: "IT Apprentice",
    company: "MAPTEC IT",
    period: "Nov 2023 – Feb 2024",
    location: "Romford, England, United Kingdom",
    highlights: [
      "Maintained endpoint security across 250+ devices using Bitdefender GravityZone.",
      "Troubleshot hardware, software, and network issues for helpdesk clients.",
      "Supported cybersecurity tooling, updates, and stable operations.",
    ],
  },
];

const projects = [
  {
    name: "IlmCubs",
    description:
      "AI-powered Quran learning app for children aged 4–6 with stories, quizzes, and positive reinforcement.",
    tech: "Next.js, React, TypeScript, Tailwind CSS, OAuth2, AI",
    link: "https://quran-companion-real-life-guidance-omega.vercel.app/",
    github: "https://github.com/rafue1968/IlmCubs",
  },
  {
    name: "GitHub Collab Map",
    description:
      "Interactive full-stack mapping app with GitHub OAuth and real-time location rendering.",
    tech: "Next.js, Firebase Auth, Firestore, GitHub OAuth, Leaflet",
    link: "https://github.com/rafue1968/github-collab-map",
    github: "https://github.com/rafue1968/github-collab-map",
  },
  {
    name: "Prismo (Prismic CMS Blog)",
    description:
      "Production-ready slice-based blog platform built with Next.js App Router and Prismic CMS.",
    tech: "Next.js, TypeScript, Prismic CMS",
    link: "https://my-prismic-site-1.vercel.app/",
    github: "https://github.com/rafue1968/my-prismic-site-1",
  },
  {
    name: "AI-Powered Interview Coach",
    description:
      "AI chat-style interview coach with dynamic prompts, feedback, and backend orchestration.",
    tech: "React, Next.js, Python, Flask, Firebase, Google Gemini, Azure TTS",
    link: "https://ai-powered-interview-coach.vercel.app/",
    github: "https://github.com/rafue1968/ai-powered-interview-coach",
  },
];

const education = [
  {
    title: "BSc (Hons) Computing — First-Class Honours",
    institution: "Solent University",
    period: "Feb 2022 – Oct 2025",
    details:
      "Studied software development, web applications, data science, security, and human-computer interaction.",
  },
  {
    title: "Level 3 IT Diploma, Information Technology",
    institution: "New City College",
    period: "2019 – 2021",
    details: "Merit-Pass in IT diploma with practical skills in Microsoft Excel and IT support.",
  },
];

const certifications = [
  "Google AI Fundamentals — Coursera (Apr 2026)",
  "AI-First Software Engineer Internship — Risidio (Mar 2026)",
  "The Complete 2024 Web Development Bootcamp — Udemy (Jan 2025)",
  "Java Essential Training: Syntax and Structure — LinkedIn Learning (Feb 2026)",
];

const highlights = [
  {
    title: "AI-First Internship Delivered",
    description:
      "Built dynamic CMS workflows, reusable TypeScript UI components, and a GitHub Collab Map capstone for Risidio.",
  },
  {
    title: "First-Class Honours Graduate",
    description:
      "Graduated from Solent University with First-Class Honours in Computing and strong software development performance.",
  },
  {
    title: "Freelance & Client Work",
    description:
      "Available for full-stack web applications, SaaS MVPs, API integrations, and technical delivery support.",
  },
];

const services = [
  {
    title: "Custom Software Development",
    description: "End-to-end web applications, SaaS MVPs, and responsive frontend experiences.",
  },
  {
    title: "AI & API Integrations",
    description: "Google Gemini, REST APIs, automated pipelines, and intelligent user workflows.",
  },
  {
    title: "Technical Project Management",
    description: "Sprint planning, stakeholder alignment, and remote engineering coordination.",
  },
];

const languages = [
  "English — Native or bilingual proficiency",
  "Bengali — Elementary proficiency",
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-10 text-slate-950 dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-12">
      <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/90 px-6 py-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="font-semibold text-slate-900 dark:text-slate-100">Rafue Karim Islam</div>
        <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400">
          <a href="#experience" className="transition hover:text-slate-900 dark:hover:text-slate-100">Experience</a>
          <a href="#projects" className="transition hover:text-slate-900 dark:hover:text-slate-100">Projects</a>
          <a href="#education" className="transition hover:text-slate-900 dark:hover:text-slate-100">Education</a>
          <a href="#contact" className="transition hover:text-slate-900 dark:hover:text-slate-100">Contact</a>
        </div>
      </nav>
      <header className="flex flex-col gap-6 border-b border-slate-200 pb-10 dark:border-slate-800 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Rafue Karim Islam</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Full-Stack Software Engineer</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
            Early-career Software Engineer and Technical Project Manager focused on AI-integrated web applications.
            I build modern full-stack experiences with React, Next.js, TypeScript, Python, and cloud-connected systems.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
              <MapPin size={16} /> Chigwell, Essex, United Kingdom
            </span>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Mail size={16} /> <a href="mailto:rafue1968@gmail.com" className="font-medium underline">rafue1968@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Link2 size={16} /> <a href="https://linkedin.com/in/rafue-karim-islam-887a2b216/" target="_blank" rel="noreferrer" className="font-medium underline">linkedin.com/in/rafue-karim-islam-887a2b216</a>
            </div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Link2 size={16} /> <a href="https://github.com/rafue1968" target="_blank" rel="noreferrer" className="font-medium underline">github.com/rafue1968</a>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-10">
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Open to work</p>
            <h2 className="mt-4 text-2xl font-semibold">Software Engineering · Full-Stack Development · Technical Project Management</h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              I am a curious, detail-oriented problem solver who thrives in collaborative, low-ego teams. I enjoy translating client vision into clean, maintainable products, debugging complex systems, and building AI-enhanced web experiences.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <Sparkles size={22} />
              <h2 className="text-2xl font-semibold">Featured Highlights</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/80">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{highlight.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-6">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <Briefcase size={22} />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold">{experience.role}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{experience.company} · {experience.location}</p>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-6">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <Sparkles size={22} />
              <h2 className="text-2xl font-semibold">Selected Projects</h2>
            </div>
            <div className="grid gap-6">
              {projects.map((project) => (
                <article key={project.name} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.tech}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                        Live <ExternalLink size={14} />
                      </Link>
                      <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                        GitHub <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">{project.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="space-y-6">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <GraduationCap size={22} />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-5">
              {education.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">{item.details}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-10">
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Profile</p>
            <h2 className="mt-4 text-2xl font-semibold">About Me</h2>
            <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I am a Software Engineer and First-Class Computing graduate driven by building scalable AI-integrated web applications. My background is “T-shaped”: deep full-stack engineering with strong IT infrastructure and project management skills.
              </p>
              <p>
                I recently completed an AI-First Software Engineer Internship at Risidio, where I engineered dynamic web features, type-safe UI components, and media workflows. I enjoy turning complex data into intuitive user experiences using modern web stacks and AI integrations.
              </p>
              <p>
                In my current role at Ihsan Consulting, I bridge client requirements and engineering execution. Previously, I managed endpoint security and helpdesk operations for 250+ devices, learning resilience and technical troubleshooting.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <Award size={22} />
              <h2 className="text-2xl font-semibold">Certifications</h2>
            </div>
            <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              {certifications.map((cert) => (
                <li key={cert} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                  {cert}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Services</p>
            <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{service.title}</p>
                  <p className="mt-2 text-sm leading-7">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Languages</p>
            <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
              {languages.map((language) => (
                <li key={language} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                  {language}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Skills</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="contact" className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              I’m actively seeking new opportunities in software engineering, full-stack development, and technical product/project management.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} /> rafue1968@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Link2 size={16} /> github.com/rafue1968
              </div>
              <div className="flex items-center gap-2">
                <Link2 size={16} /> linkedin.com/in/rafue-karim-islam-887a2b216
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

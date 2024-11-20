import ReactMarkdown from "react-markdown";
import { Layout } from "../layouts";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ title, description, technologies, link, imageSrc, createdAtYear}) => (
    <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 rounded-xl transition-all duration-300">
        <div className="md:basis-auto flex-grow space-y-4">
            {createdAtYear && <p className="text-sm text-customGray-500 dark:text-customGray-300">{createdAtYear}</p>}
            <div>
                <Link
                    to={link}
                    className="hover:underline decoration-customGray-600 dark:decoration-customGray-100 decoration-2"
                >
                    <h3 className="text-lg font-semibold text-customGray-900 dark:text-white mb-2">{title}</h3>
                </Link>
                <p className="text-customGray-600 dark:text-customGray-300 leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium
                        bg-customGray-50 dark:bg-customGray-700
                        text-customGray-700 dark:text-customGray-300
                        hover:bg-customGray-200 dark:hover:bg-customGray-600
                        transition-colors duration-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
        <div className="md:basis-64 max-w-64 w-full h-64 md:flex-shrink-0
            bg-customGray-50 dark:bg-customGray-800
            rounded-3xl flex items-center justify-center text-customGray-500 dark:text-customGray-300">
            {imageSrc ? <img className="w-full h-full object-cover rounded-3xl " src={imageSrc} alt={title} /> : <p>{title}</p>}
        </div>
    </div>
);


export default function Muhsin() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Developed a full-stack e-commerce solution with Laravel backend and React frontend, featuring robust product management, user authentication, and payment integration.",
            technologies: ["Laravel", "ReactJS", "MySQL", "Stripe"],
            link: "https://github.com/muhsin-azmal/ecommerce-platform",
            imageSrc: "./prowjekt.jpg",
            createdAtYear: 2023
        },
        {
            title: "Task Management API",
            description: "Built a scalable REST API for task management with comprehensive CRUD operations, user roles, and authentication using Laravel and JWT.",
            technologies: ["PHP", "Laravel", "JWT", "MySQL"],
            link: "https://github.com/muhsin-azmal/task-management-api",
            imageSrc: "./prowjekt.jpg",
            createdAtYear: 2023
        },
        {
            title: "Portfolio Website",
            description: "Designed and implemented a responsive personal portfolio website showcasing projects and skills using modern web technologies.",
            technologies: ["ReactJS", "Tailwind CSS", "Vercel"],
            link: "https://muhsinazmal.com",
            imageSrc: "./prowjekt.jpg",
            createdAtYear: 2023
        }
    ];

    return (
        <Layout>
            <section className="max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4 mb-32">
                <div className="relative w-32 h-32 overflow-hidden">
                    <img
                        className="w-full h-full object-cover rounded-full bg-customGray-50 dark:bg-customGray-800"
                        src="./avatar-agnostic.png"
                        alt="User Avatar"
                    />
                    <div
                        className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center text-2xl bg-customGray-50 dark:bg-customGray-800 border-2 border-white dark:border-customGray-900 rounded-full"
                    >
                        <img
                            className="w-6 h-6"
                            src="./waving-hand.png"
                            alt="Waving Hand"
                        />
                    </div>
                </div>


                <article className="prose prose-neutral max-w-none
                dark:prose-invert
                prose-a:text-emerald-600
                hover:prose-a:text-emerald-500
                dark:prose-a:text-emerald-400
                dark:hover:prose-a:text-emerald-300
                prose-strong:font-medium
                prose-headings:font-normal
                prose-headings:leading-tight">
                    <ReactMarkdown >
                        {`## Hi, I'm ***Muhsin***

I develop web applications using **PHP/Laravel** for both backend and frontend work. I create seamless web experiences and build scalable **REST APIs** to ensure smooth functionality for users. I also have experience with **ReactJS**, making me a full-stack developer capable of handling both client-side and server-side development.

Outside of coding, I'm a shutterbug, a travel enthusiast, and an avid reader. I also enjoy playing video games in my free time. I'm always open to new challenges and opportunities to learn and grow as a developer.`}
                    </ReactMarkdown>
                </article>
                
                <Link to="/view-cv" className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline flex items-center gap-2">
                    View CV ↗︎
                </Link>
            </section>

            {/* Featured Projects */}
            <section className="space-y-6 mt-8 max-w-4xl mx-auto px-4 lg:px-0">
                <h2 className="text-xl text-customGray-900 dark:text-white md:text-2xl font-display">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            imageSrc={project.imageSrc}
                            createdAtYear={project.createdAtYear}
                        />
                    ))}
                </div>
                <Link to="/projects" className="text-customGray-900 dark:text-customGray-100 hover:text-customGray-600 dark:hover:text-customGray-50 hover:underline">
                    See all projects →
                </Link>
            </section>
        </Layout>
    );
}
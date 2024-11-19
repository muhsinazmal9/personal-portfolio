import ReactMarkdown from "react-markdown";
import { Layout } from "../layouts";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, technologies, link, imageSrc, createdAtYear}) => (
    <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 rounded-xl transition-all duration-300">
        <div className="md:basis-auto flex-grow space-y-4">
            {createdAtYear && <p className="text-sm text-customGray-500 dark:text-customGray-300">{createdAtYear}</p>}
            <div>
                <Link
                    to={link}
                    className="hover:underline decoration-2"
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
            <div className="max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4 mb-32">
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
                prose-strong:font-semibold
                prose-headings:font-normal">
                    <ReactMarkdown >
                        {`### Hi, I’m **Muhsin Azmal** — a software developer currently based in Dhaka.

I specialize in web application development, focusing on **PHP/Laravel** for both backend and frontend work. I enjoy creating seamless web experiences and building scalable **REST APIs** to ensure smooth functionality for users. I also have experience with **ReactJS**, making me a full-stack developer capable of handling both client-side and server-side development. Prior to that, I worked at [SM40](https://sm40.com/) and [Binary Fusion](https://binary-fusion.com/).

Outside of programming, I enjoy photography, travel, and video games (Call of Duty Mobile and Counter-Strike are my favorites). I'm also a big fan of Asian food.`}
                    </ReactMarkdown>
                </article>
            </div>

            <section className="space-y-6 mt-8 max-w-4xl mx-auto px-4 lg:px-0">
                <h2 className="text-xl font-semibold text-customGray-900 dark:text-white">
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
            </section>
        </Layout>
    );
}
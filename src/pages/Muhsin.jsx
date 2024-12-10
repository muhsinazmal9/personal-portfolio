import ReactMarkdown from "react-markdown";
import { Layout } from "../layouts";
import { Link } from "react-router-dom";
import projects from "../jsons/projects.json";
import ProjectCard from "../components/ProjectCard";

const avatar = {
    src: "./avatar-agnostic.png",
    alt: "User Avatar",
};

const AboutMeArticle = () => {
    return (
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

Outside of coding, I'm a shutterbug, travel enthusiast, and avid reader. I'm always open to new challenges and opportunities to learn and grow as a developer. In my free time, I enjoy playing sports and e-sports.`}
            </ReactMarkdown>
        </article>
    );
}


const Muhsin = () => {
    return (
        <Layout>
            {/* About Me */}
            <section id="about-me" className="max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4 mb-32">
                <div className="relative w-32 h-32 overflow-hidden">
                    <img
                        className="w-full h-full object-cover rounded-full bg-customGray-50 dark:bg-customGray-800"
                        src={avatar.src}
                        alt={avatar.alt}
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


                <AboutMeArticle />

                <Link to="/view-cv" className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline flex items-center gap-2">
                    View CV ↗︎
                </Link>
            </section>

            {/* Featured Projects */}
            <section id="projects" className="space-y-6 mt-8 max-w-4xl mx-auto px-4 lg:px-0">
                <h2 className="text-customGray-900 dark:text-white text-3xl font-semibold font-display">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    {
                        projects?.slice(0, 3).map((project, index) => (
                            
                            <ProjectCard
                                key={index}
                                myKey={index}
                                slug={project.slug}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                link={project.link}
                                imageSrc={project.image}
                                createdAtYear={project.createdAtYear}
                            />
                        ))
                    }
                </div>
                <div>
                    <Link to="/projects" className="text-customGray-900 dark:text-customGray-100 hover:text-customGray-600 dark:hover:text-customGray-50 hover:underline block">
                        See all projects →
                    </Link>
                </div>
            </section>
        </Layout>
    );
}

export default Muhsin
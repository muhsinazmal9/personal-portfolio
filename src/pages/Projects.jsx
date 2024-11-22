import * as React from "react";
import { Layout } from "../layouts";
import projects from "../jsons/projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <Layout title={'Projects'}>
            <section id="projects" className="max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4 mb-32">
                <h1 className="text-2xl font-display text-customGray-900 dark:text-white">Projects</h1>
                <div className="grid grid-cols-1 gap-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            imageSrc={project.image}
                            createdAtYear={project.createdAtYear}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Projects
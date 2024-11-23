import { Layout } from "../layouts";
import { Navigate, useParams } from "react-router-dom";
import projects from "../jsons/projects.json";

export default function Project() {
    const { slug } = useParams();
    const project = projects.filter(project => project.slug === slug).slice(0, 1)[0];

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <Layout title={'Project'}>
            <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 rounded-xl transition-all duration-300">
                <div className="md:basis-auto flex-grow space-y-4">
                    <p className="text-sm text-customGray-500 dark:text-customGray-300">{project.createdAtYear}</p>
                    <div>
                        <h3 className="text-lg font-semibold text-customGray-900 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-customGray-600 dark:text-customGray-300 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
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
            </div>

            {/* <h1>Project {params.slug}</h1> */}
        </Layout>
    );
}
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ myKey, slug, title, description, technologies, imageSrc, createdAtYear, key }) => (
    console.log(myKey),
    <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 rounded-3xl transition-all duration-300 bg-customGray-50 dark:bg-black p-12">
        <div className="md:basis-auto flex-grow space-y-4">
            {createdAtYear && <p className="text-sm text-customGray-500 dark:text-customGray-300">{createdAtYear}</p>}
            <div>
                <Link
                    to={`/projects/${slug}`}
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
        <Link to={`/projects/${slug}`} className="md:w-64 w-full h-40 md:flex-shrink-0 bg-customGray-50 dark:bg-customGray-800 rounded-md  flex items-center justify-center text-customGray-500 dark:text-customGray-300">
            {/* {imageSrc ? <img className="w-full h-full object-contain rounded-3xl " src={imageSrc} alt={title} /> : <p>{title}</p>} */}
        </Link>
    </div>
);

export default ProjectCard;
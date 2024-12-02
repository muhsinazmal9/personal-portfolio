import React from 'react';
import { Layout } from "../layouts";
import ReactMarkdown from 'react-markdown';

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
};

const About = () => {
    return (
        <Layout title="About">
            <section className="max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4 mb-32">
                <div className="relative w-32 h-32 overflow-hidden mx-auto">
                    <img
                        className="w-full h-full object-cover rounded-full bg-customGray-50 dark:bg-customGray-800"
                        src="/path-to-avatar.jpg"
                        alt="Muhsin's Avatar"
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

                <a
                    href="/view-cv"
                    className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline flex items-center gap-2"
                >
                    View CV ↗︎
                </a>
            </section>
        </Layout>
    );
};

export default About;
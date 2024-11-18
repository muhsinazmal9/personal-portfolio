import ReactMarkdown from "react-markdown";
import { Layout } from "../layouts";

export default function Muhsin() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto rounded-lg space-y-8 md:px-0 px-4">
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
        </Layout>
    );
}
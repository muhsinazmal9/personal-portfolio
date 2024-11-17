import { Footer, Header } from "../components";
import ReactMarkdown from "react-markdown";

export default function Muhsin() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto rounded-lg space-y-8 md:px-0 px-4 py-8 md:py-12">
                <div className="relative  overflow-hidden w-32 h-32">
                    <img className="w-full h-full object-cover rounded-full bg-customGray-200 dark:bg-customGray-700" src="./avatar-agnostic.png" alt="avatar" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-white rounded-full border-2 border-customGray-50 dark:border-customGray-800 flex items-center justify-center text-2xl">
                        👋
                    </div>
                </div>

                <article className="prose prose-md prose-neutral max-w-none dark:prose-invert prose-a:text-emerald-600 hover:prose-a:text-emerald-500 dark:prose-a:text-emerald-400 dark:hover:prose-a:text-emerald-300">
                    <ReactMarkdown >
                        {`### Hi, I’m **Muhsin Azmal** — a software developer currently based in Dhaka.

I specialize in web application development, focusing on **PHP/Laravel** for both backend and frontend work. I enjoy creating seamless web experiences and building scalable **REST APIs** to ensure smooth functionality for users. I also have experience with **ReactJS**, making me a full-stack developer capable of handling both client-side and server-side development. Prior to that, I worked at [SM40](https://sm40.com/) and [Binary Fusion](https://binary-fusion.com/).

Outside of programming, I enjoy photography, travel, and video games (Call of Duty Mobile and Counter-Strike are my favorites). I'm also a big fan of Asian food.`}
                    </ReactMarkdown>
                </article>
            </div>
            <Footer />
        </>
    );
}
import { Footer, Header } from "../components";

export default function Muhsin() {
    return (
        <>
            <Header />
            <div className="bg-customGray-100 dark:bg-customGray-800 py-8 px-6 max-w-7xl mx-auto rounded-lg shadow text-customGray-600 dark:text-customGray-200">
                Hi, I’m **Muhsin Azmal** — a software developer currently based in Dhaka.

                I specialize in web application development, focusing on **PHP/Laravel** for both backend and frontend work. I enjoy creating seamless web experiences and building scalable **REST APIs** to ensure smooth functionality for users. I also have experience with **ReactJS**, making me a full-stack developer capable of handling both client-side and server-side development. Prior to that, I worked at [SM40](https://sm40.com/) and [Binary Fusion](https://binary-fusion.com/).

                Outside of programming, I enjoy photography, travel, and video games (Call of Duty Mobile and Counter-Strike are my favorites). I'm also a big fan of Asian food.
            </div>
            <Footer />
        </>
    );
}
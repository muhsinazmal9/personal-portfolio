import { SiGithub, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';

export default function Footer() {
    return (
        <footer aria-labelledby="footer" className="bg-customGray-50 dark:bg-customGray-800 w-full mt-8 md:mt-12">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between space-y-4 md:space-y-0 lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <a href="https://twitter.com/muhsinazmal9" className="text-customGray-500 hover:text-customGray-600">
                        <span className="sr-only">Twitter</span>
                        <SiX className='text-customGray-500 hover:text-customGray-600 dark:hover:text-customGray-400' size={24} />
                    </a>

                    <a href="https://github.com/muhsinazmal9" className="text-customGray-500 hover:text-customGray-600">
                        <span className="sr-only">GitHub</span>
                        <SiGithub className='text-customGray-500 hover:text-customGray-600 dark:hover:text-customGray-400' size={24} />
                    </a>

                    <a href="https://ca.linkedin.com/in/muhsinazmal9" className="text-customGray-500 hover:text-customGray-600">
                        <span className="sr-only">LinkedIn</span>
                        <SiLinkedin className='text-customGray-500 hover:text-customGray-600 dark:hover:text-customGray-400' size={24} />
                    </a>
                </div>
                <div className="md:order-1">
                    <p className="text-center text-base text-customGray-500">© {new Date().getFullYear()} Muhsin Azmal</p>
                </div>
            </div>
        </footer>
    )
}
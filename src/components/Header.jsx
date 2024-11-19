import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { X, Menu as MenuIcon, Sun, Moon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Muhsin Azmal', href: '/', skipInMobile: true, primary: true },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize theme state based on local storage or system preference
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Toggle theme between light and dark
  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Update local storage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // theme icons
  const themeIcon = theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />;

  return (
    <header className="bg-white dark:bg-customGray-900 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-row items-center justify-between md:justify-center md:space-x-12 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => [
                  isActive ? 'dark:text-customGray-100 text-customGray-900 font-semibold' : 'dark:text-customGray-300 text-customGray-600 hover:text-customGray-700 dark:hover:text-customGray-100',
                ].join('text-customGray-600  dark:text-customGray-300 transition-colors duration-200')}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}

          </div>

          {/* Logo/Name as NavLink on Mobile */}
          <Link
            to="/"
            className="md:hidden text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
          >
            Muhsin Azmal
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <a
              onClick={handleTheme}
              className="cursor-pointer dark:text-customGray-300 text-customGray-600 hover:text-customGray-700 dark:hover:text-customGray-100"
            >
              {themeIcon}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden rounded-md text-customGray-600 hover:text-customGray-700 dark:text-customGray-300 dark:hover:text-customGray-100"
            >
              <MenuIcon className="h-[26px] w-[26px]" />
            </button>
          </div>
        </nav>
      </div>

      {/* Off-canvas Menu */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          {/* Background overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-in duration-150	"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150	"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-customGray-900/50 backdrop-blur-sm transition-opacity" />
          </TransitionChild>

          {/* Sliding panel */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in duration-150	"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in duration-150	"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-customGray-900 shadow-xl">
                      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-customGray-900 dark:text-customGray-100">
                          <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => [
                              isActive
                                ? 'dark:text-customGray-100 text-customGray-900 font-semibold'
                                : 'dark:text-customGray-300 text-customGray-600 hover:text-customGray-700 dark:hover:text-customGray-100',
                            ].join('text-customGray-600  dark:text-customGray-300 transition-colors duration-200')}
                          >
                          Muhsin Azmal
                          </NavLink>
                        </DialogTitle>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="rounded-md text-customGray-600 hover:text-customGray-700 dark:text-customGray-300 dark:hover:text-customGray-100"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="relative flex-1 px-6 py-4">
                        <div className="flex flex-col space-y-4">
                          {navigation.map((item) =>
                            item.skipInMobile ? null : (
                              <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                  [
                                    isActive
                                      ? 'dark:text-customGray-100 text-customGray-900 font-semibold'
                                      : 'dark:text-customGray-300 text-customGray-600 hover:text-customGray-700 dark:hover:text-customGray-100',
                                    'text-lg',
                                  ].join(' ')
                                }
                              >
                                <span className="text-lg">{item.name}</span>
                              </NavLink>
                            )
                          )}

                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
import { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Menu as MenuIcon, X, Sun, Moon, Computer } from 'lucide-react';
import { Fragment } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme');
    }
    return 'system';
  });

  const navigation = [
    { name: 'Muhsin Azmal', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Experiences', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove('dark');
    if (isDark) root.classList.add('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Computer className="h-5 w-5" />
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Switcher */}
            <Menu as="div" className="relative ml-4">
              {({ open }) => (
                <>
                  <MenuButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open theme switcher</span>
                    {themeIcons[theme]}
                  </MenuButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {[
                          { name: 'Light', value: 'light', icon: <Sun className="h-5 w-5 mr-2" /> },
                          { name: 'Dark', value: 'dark', icon: <Moon className="h-5 w-5 mr-2" /> },
                          { name: 'System', value: 'system', icon: <Computer className="h-5 w-5 mr-2" /> }
                        ].map((option) => (
                          <MenuItem key={option.value}>
                            {({ active }) => (
                              <button
                                onClick={() => handleThemeChange(option.value)}
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-gray-600' : ''
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 dark:text-gray-100`}
                              >
                                {option.icon}
                                {option.name}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Switcher for Mobile */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <MenuButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open theme switcher</span>
                    {themeIcons[theme]}
                  </MenuButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {[
                          { name: 'Light', value: 'light', icon: <Sun className="h-5 w-5 mr-2" /> },
                          { name: 'Dark', value: 'dark', icon: <Moon className="h-5 w-5 mr-2" /> },
                          { name: 'System', value: 'system', icon: <Computer className="h-5 w-5 mr-2" /> }
                        ].map((option) => (
                          <MenuItem key={option.value}>
                            {({ active }) => (
                              <button
                                onClick={() => handleThemeChange(option.value)}
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-gray-600' : ''
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 dark:text-gray-100`}
                              >
                                {option.icon}
                                {option.name}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>

            {/* Mobile Navigation Menu */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <MenuButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </MenuButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {navigation.map((item) => (
                          <MenuItem key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-gray-600' : ''
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 dark:text-gray-100`}
                              >
                                {item.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
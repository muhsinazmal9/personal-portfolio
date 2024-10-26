import { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';


const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme');
    }
    return 'system';
  });

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

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none">
        Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange('light')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
              >
                Light
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange('dark')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
              >
                Dark
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange('system')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
              >
                System
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ThemeSwitcher;

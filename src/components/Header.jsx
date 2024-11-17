import { Fragment, useState } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { User, Folder, Mail, BookOpen, X, Menu as MenuIcon } from 'lucide-react';

const navigation = [
  { name: 'Muhsin', href: '#about' },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Folder },
  { name: 'Blog', href: '#blog', icon: BookOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-customGray-900 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 relative">
          {/* Logo/Name as NavLink */}
          {/* <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
          >
            Muhsin Azmal
          </a> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-customGray-600 hover:text-blue-600 dark:text-customGray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-md text-customGray-600 hover:text-blue-600 dark:text-customGray-300 dark:hover:text-blue-400"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
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
                          Menu
                        </DialogTitle>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="rounded-md text-customGray-600 hover:text-blue-600 dark:text-customGray-300 dark:hover:text-blue-400"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="relative flex-1 px-6 py-4">
                        <div className="flex flex-col space-y-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-2 text-customGray-600 hover:text-blue-600 dark:text-customGray-300 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              {item.icon && <item.icon size={20} />}
                              <span className="text-lg">{item.name}</span>
                            </a>
                          ))}
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
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitBranch, SquareCode } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link to="/" className="flex items-center">
            <SquareCode className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              RadiusCraft
            </span>
          </Link>
          <span className="hidden md:inline-block text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full ml-2">Beta</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium ${
              isActive('/') 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/editor"
            className={`text-sm font-medium ${
              isActive('/editor') 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Editor
          </Link>
          <Link
            to="/ai"
            className={`text-sm font-medium ${
              isActive('/ai') 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            AI Assistant
          </Link>
          <Link
            to="/docs"
            className={`text-sm font-medium ${
              isActive('/docs') 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <GitBranch className="w-4 h-4 mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
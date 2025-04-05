
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update localStorage and document class
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700",
        "flex items-center justify-center"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-yellow-300" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;

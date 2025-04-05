
import React from 'react';
import SidebarMenu from './SidebarMenu';
import ThemeToggle from './ThemeToggle';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-700 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <SidebarMenu />
            <div className="ml-4 flex items-center">
              <Calculator className="h-6 w-6 text-calculator-primary mr-2" />
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">APNA CALCULATOR</h1>
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import { Menu, X, Home, Calculator, Info, Phone, Github, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', icon: <Home className="h-5 w-5" />, path: '/' },
    { title: 'Calculator', icon: <Calculator className="h-5 w-5" />, path: '/' },
    { title: 'About Us', icon: <Info className="h-5 w-5" />, path: '/about' },
    { title: 'Contact', icon: <Phone className="h-5 w-5" />, path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://www.instagram.com/__who__am__i__007__/profilecard/?igsh=aW1mZDk4ODdsN25t' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://www.facebook.com/share/1DP1SVf4zo/' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
  ];

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-calculator-primary">Menu</h2>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link 
                  to={item.path} 
                  className="flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Links */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default SidebarMenu;

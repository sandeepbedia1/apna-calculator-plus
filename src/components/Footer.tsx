
import React from 'react';
import { Instagram, Facebook, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://www.instagram.com/__who__am__i__007__/profilecard/?igsh=aW1mZDk4ODdsN25t' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://www.facebook.com/share/1DP1SVf4zo/' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
  ];

  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-calculator-primary">APNA CALCULATOR</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Simple gram to rupees conversion calculator
            </p>
          </div>
          
          <div className="flex space-x-4">
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
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Apna Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

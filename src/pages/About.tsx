
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-8 w-8 text-calculator-primary mr-3" />
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">About Us</h1>
            </div>
            
            <div className="calculator-container p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Apna Calculator was created to solve a simple problem: making quick conversions between weight and price for goods sold by weight. 
                Our aim is to provide a fast, accurate, and easy-to-use tool for shopkeepers, customers, and anyone who needs to convert between grams and rupees.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Why Use Apna Calculator?</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-calculator-primary text-white mr-3 flex-shrink-0">1</span>
                  <span>Real-time calculations that update as you type</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-calculator-primary text-white mr-3 flex-shrink-0">2</span>
                  <span>Accurate conversions based on current price per kilogram</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-calculator-primary text-white mr-3 flex-shrink-0">3</span>
                  <span>User-friendly interface with dark mode support</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-calculator-primary text-white mr-3 flex-shrink-0">4</span>
                  <span>Completely free to use with no ads</span>
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Have questions or suggestions? We'd love to hear from you! Visit our contact page or reach out to us on social media.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

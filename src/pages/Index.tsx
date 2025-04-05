
import React from 'react';
import Header from '@/components/Header';
import CalculatorCard from '@/components/calculator/CalculatorCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <CalculatorCard />
            
            <div className="mt-12 max-w-lg text-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">How to Use</h2>
              <ol className="text-left text-gray-700 dark:text-gray-300 space-y-2">
                <li className="hover-card p-3 rounded-lg">
                  1. Enter the price per kilogram in the input field at the top.
                </li>
                <li className="hover-card p-3 rounded-lg">
                  2. Choose between "Rupees to Gram" or "Gram to Rupees" conversion.
                </li>
                <li className="hover-card p-3 rounded-lg">
                  3. Enter the value you want to convert.
                </li>
                <li className="hover-card p-3 rounded-lg">
                  4. See the real-time calculation results instantly!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React, { useState, useEffect } from 'react';
import GramToRupees from './GramToRupees';
import RupeesToGram from './RupeesToGram';
import { cn } from '@/lib/utils';
import { Calculator } from 'lucide-react';

const CalculatorCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rupees-to-gram' | 'gram-to-rupees'>('rupees-to-gram');
  const [pricePerKg, setPricePerKg] = useState<string>(''); // Changed from number to string, empty initial value

  const tabs = [
    { id: 'rupees-to-gram', label: 'Rupees to Gram' },
    { id: 'gram-to-rupees', label: 'Gram to Rupees' },
  ];

  return (
    <div className="calculator-container max-w-md w-full animate-fade-in">
      <div className="flex items-center justify-center mb-6">
        <Calculator className="mr-2 h-6 w-6 text-calculator-primary" />
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">APNA CALCULATOR</h2>
      </div>
      
      {/* Price per KG input */}
      <div className="mb-6">
        <label htmlFor="price-per-kg" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Price per Kilogram (₹)
        </label>
        <input
          id="price-per-kg"
          type="number"
          value={pricePerKg}
          onChange={(e) => setPricePerKg(e.target.value)}
          className="calculator-input"
          min="0"
          step="1"
          placeholder="Enter price per kg"
        />
      </div>
      
      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "flex-1 py-2 px-4 text-center font-medium border-b-2 transition-all duration-300",
              activeTab === tab.id
                ? "border-calculator-primary text-calculator-primary"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab(tab.id as 'rupees-to-gram' | 'gram-to-rupees')}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === 'gram-to-rupees' ? (
          <GramToRupees pricePerKg={pricePerKg === '' ? 0 : Number(pricePerKg)} />
        ) : (
          <RupeesToGram pricePerKg={pricePerKg === '' ? 0 : Number(pricePerKg)} />
        )}
      </div>
    </div>
  );
};

export default CalculatorCard;

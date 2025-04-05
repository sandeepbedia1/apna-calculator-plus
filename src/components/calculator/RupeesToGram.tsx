
import React, { useState, useEffect } from 'react';

interface RupeesToGramProps {
  pricePerKg: number;
}

const RupeesToGram: React.FC<RupeesToGramProps> = ({ pricePerKg }) => {
  const [rupees, setRupees] = useState<string>('');
  const [grams, setGrams] = useState<string>('');

  // Calculate grams when rupees or price changes
  useEffect(() => {
    if (rupees && !isNaN(Number(rupees)) && pricePerKg) {
      const rupeesValue = parseFloat(rupees);
      const gramsValue = (rupeesValue * 1000) / pricePerKg; // Convert to grams (rupees * 1000 / price per kg)
      setGrams(gramsValue.toFixed(2));
    } else {
      setGrams('');
    }
  }, [rupees, pricePerKg]);

  const handleRupeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(Number(value)) && Number(value) >= 0)) {
      setRupees(value);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="rupees" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Rupees (₹)
        </label>
        <input
          id="rupees"
          type="number"
          value={rupees}
          onChange={handleRupeesChange}
          placeholder="Enter amount in rupees"
          className="calculator-input"
          min="0"
          step="0.01"
        />
      </div>

      <div className="result-box">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Weight in Grams
        </label>
        <div className="text-2xl font-bold text-calculator-primary">
          {grams ? `${grams} g` : '0.00 g'}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Based on ₹{pricePerKg} per kg
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
        Formula: (Rupees × 1000) ÷ Price per kg
      </div>
    </div>
  );
};

export default RupeesToGram;

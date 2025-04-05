
import React, { useState, useEffect } from 'react';

interface GramToRupeesProps {
  pricePerKg: number;
}

const GramToRupees: React.FC<GramToRupeesProps> = ({ pricePerKg }) => {
  const [grams, setGrams] = useState<string>('');
  const [rupees, setRupees] = useState<string>('');

  // Calculate rupees when grams or price changes
  useEffect(() => {
    if (grams && !isNaN(Number(grams)) && pricePerKg) {
      const gramValue = parseFloat(grams);
      const rupeesValue = (gramValue * pricePerKg) / 1000; // Convert to rupees (price per kg / 1000 * grams)
      setRupees(rupeesValue.toFixed(2));
    } else {
      setRupees('');
    }
  }, [grams, pricePerKg]);

  const handleGramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(Number(value)) && Number(value) >= 0)) {
      setGrams(value);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="grams" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Grams
        </label>
        <input
          id="grams"
          type="number"
          value={grams}
          onChange={handleGramChange}
          placeholder="Enter weight in grams"
          className="calculator-input"
          min="0"
          step="0.01"
        />
      </div>

      <div className="result-box">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Price in Rupees (₹)
        </label>
        <div className="text-2xl font-bold text-calculator-primary">
          {rupees ? `₹ ${rupees}` : '₹ 0.00'}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {pricePerKg ? `Based on ₹${pricePerKg} per kg` : 'Please enter price per kg'}
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
        Formula: (Grams × Price per kg) ÷ 1000
      </div>
    </div>
  );
};

export default GramToRupees;

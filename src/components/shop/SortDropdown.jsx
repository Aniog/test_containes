import React from 'react';
import { ChevronDown } from 'lucide-react';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
  { id: 'rating', label: 'Top Rated' },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent border border-charcoal/20 pl-4 pr-10 py-2 
                   text-sm text-charcoal focus:border-charcoal transition-colors cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown 
        size={14} 
        className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/50 pointer-events-none" 
      />
    </div>
  );
}

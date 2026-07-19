import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SortDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const options = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' },
  ];

  const selectedLabel = options.find((o) => o.value === value)?.label || 'Featured';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-warmgray hover:text-velmora-espresso transition-colors"
      >
        Sort: <span className="text-velmora-espresso font-medium">{selectedLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-velmora-border shadow-lg z-20">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 font-sans text-xs tracking-wider uppercase transition-colors ${
                value === option.value
                  ? 'bg-velmora-cream text-velmora-espresso font-medium'
                  : 'text-velmora-warmgray hover:bg-velmora-cream hover:text-velmora-espresso'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

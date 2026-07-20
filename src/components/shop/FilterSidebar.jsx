import React, { useState } from 'react';
import { ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const FilterSection = ({ title, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-borders py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-medium uppercase tracking-widest text-xs">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-muted" /> : <ChevronDown className="w-4 h-4 text-muted" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-3">
              {options.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                  <div className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selected.includes(option.value) 
                      ? "border-foreground bg-foreground" 
                      : "border-borders group-hover:border-foreground/50"
                  )}>
                    {selected.includes(option.value) && <div className="w-2 h-2 bg-background" />}
                  </div>
                  <span className={cn(
                    "text-sm transition-colors",
                    selected.includes(option.value) ? "text-foreground font-medium" : "text-foreground/70"
                  )}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilterSidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [prices, setPrices] = useState([]);

  const toggleFilter = (state, setter, value) => {
    if (state.includes(value)) {
      setter(state.filter(item => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  const categoryOptions = [
    { label: 'Earrings', value: 'earrings' },
    { label: 'Necklaces', value: 'necklaces' },
    { label: 'Huggies', value: 'huggies' },
    { label: 'Rings', value: 'rings' },
    { label: 'Sets', value: 'sets' },
  ];

  const materialOptions = [
    { label: '18K Gold Plated', value: '18k-gold' },
    { label: 'Sterling Silver', value: 'silver' },
    { label: 'Solid Gold', value: 'solid-gold' },
  ];

  const priceOptions = [
    { label: 'Under $50', value: 'under-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: 'over-100' },
  ];

  const clearAll = () => {
    setCategories([]);
    setMaterials([]);
    setPrices([]);
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      />
      
      <div className={cn(
        "fixed lg:sticky top-0 lg:top-24 left-0 h-[100dvh] lg:h-[calc(100vh-6rem)] w-[300px] lg:w-64 bg-background z-50 lg:z-0 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto no-scrollbar pb-24 lg:pb-0 border-r lg:border-r-0 border-borders lg:pt-0 pt-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 lg:p-0 lg:mb-8 border-b border-borders lg:border-0 sticky top-0 bg-background z-10 lg:static">
          <h2 className="font-serif text-xl lg:text-lg tracking-widest uppercase flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 lg:hidden" />
            Filters
          </h2>
          <div className="flex items-center gap-4">
            {(categories.length > 0 || materials.length > 0 || prices.length > 0) && (
              <button onClick={clearAll} className="text-xs uppercase tracking-widest text-muted hover:text-foreground">
                Clear
              </button>
            )}
            <button className="lg:hidden p-2" onClick={() => setIsMobileOpen(false)}>×</button>
          </div>
        </div>

        <div className="p-6 lg:p-0">
          <FilterSection 
            title="Category" 
            options={categoryOptions}
            selected={categories}
            onChange={(val) => toggleFilter(categories, setCategories, val)}
          />
          <FilterSection 
            title="Material" 
            options={materialOptions}
            selected={materials}
            onChange={(val) => toggleFilter(materials, setMaterials, val)}
          />
          <FilterSection 
            title="Price" 
            options={priceOptions}
            selected={prices}
            onChange={(val) => toggleFilter(prices, setPrices, val)}
          />
        </div>
        
        {/* Mobile sticky apply button */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-borders">
          <button 
            className="w-full bg-foreground text-background py-3 font-medium uppercase tracking-widest text-sm"
            onClick={() => setIsMobileOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;

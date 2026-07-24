import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

// We're omitting actual complex range sliders for simplicity and using simple radio/checkboxes for price brackets initially, but we can update to slider later if needed
const FilterSidebar = ({ filters, setFilters }) => {
  
  const handleCategoryChange = (val) => {
    if (filters.category === val) {
      setFilters(prev => ({ ...prev, category: 'all' }));
    } else {
      setFilters(prev => ({ ...prev, category: val }));
    }
  };

  const handlePriceChange = (val) => {
    if (filters.priceRange === val) {
      setFilters(prev => ({ ...prev, priceRange: null }));
    } else {
      setFilters(prev => ({ ...prev, priceRange: val }));
    }
  };

  return (
    <div className="w-full">
      <div className="hidden md:block mb-6 pt-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">Filters</h3>
        <p className="text-xs text-muted-foreground">{filters.count || 0} Products</p>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "material"]} className="w-full">
        <AccordionItem value="category" className="border-border/60">
          <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-4">
            Category
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
                <div key={cat} className="flex items-center gap-3 group cursor-pointer" onClick={() => handleCategoryChange(cat)}>
                  <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${filters.category === cat ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50 text-transparent'}`}>
                    {filters.category === cat && <svg viewBox="0 0 24 24" className="w-3 h-3 text-primary-foreground fill-none stroke-current stroke-[3px]"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground">{cat}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-border/60">
          <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-4">
            Price
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-3">
              {[
                { label: 'Under $50', value: '0-50' },
                { label: '$50 - $100', value: '50-100' },
                { label: 'Over $100', value: '100-plus' }
              ].map((range) => (
                <div key={range.value} className="flex items-center gap-3 group cursor-pointer" onClick={() => handlePriceChange(range.value)}>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${filters.priceRange === range.value ? 'border-primary' : 'border-border group-hover:border-primary/50'}`}>
                    {filters.priceRange === range.value && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                  </div>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground">{range.label}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="material" className="border-border/60">
          <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-4">
            Material
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-3 pt-1">
               <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 border border-border bg-primary text-transparent flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-primary-foreground fill-none stroke-current stroke-[3px]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm">18K Gold Plated</span>
                </div>
                <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 border border-border flex items-center justify-center text-transparent">
                  </div>
                  <span className="text-sm">925 Sterling Silver</span>
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Clear Filters Button (only shows when filters are active) */}
      {(filters.category !== 'all' || filters.priceRange) && (
        <div className="pt-6">
          <button 
            onClick={() => setFilters({ category: 'all', priceRange: null, sort: filters.sort })}
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;

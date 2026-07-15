import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const filterGroups = [
  {
    label: 'Category',
    key: 'category',
    options: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  },
  {
    label: 'Price',
    key: 'price',
    options: ['All', 'Under $50', '$50 - $75', '$75 - $100', 'Over $100'],
  },
  {
    label: 'Material',
    key: 'material',
    options: ['All', '18K Gold Plated', 'Silver Tone'],
  },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const [openGroups, setOpenGroups] = useState({ Category: true, Price: true, Material: true });

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleFilter = (groupKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [groupKey]: value === 'All' ? null : value,
    }));
  };

  const clearAll = () => {
    setFilters({ category: null, price: null, material: null });
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg tracking-wider">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-velvet-600 hover:text-velvet-700 underline underline-offset-2"
          >
            Clear all
          </button>
        )}
      </div>

      {filterGroups.map((group) => (
        <div key={group.key} className="border-t border-charcoal-200 pt-4">
          <button
            onClick={() => toggleGroup(group.label)}
            className="w-full flex items-center justify-between text-xs tracking-wider uppercase font-medium text-charcoal-700 mb-3"
          >
            {group.label}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openGroups[group.label] ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openGroups[group.label] && (
            <div className="space-y-2">
              {group.options.map((opt) => {
                const isActive = opt === 'All'
                  ? !filters[group.key]
                  : filters[group.key] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => handleFilter(group.key, opt)}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      isActive
                        ? 'text-velvet-600 font-medium'
                        : 'text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">{sidebarContent}</aside>

      {/* Mobile filter overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-80 max-w-[85vw] bg-cream-50 h-full overflow-y-auto p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebarContent}
            <button
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}
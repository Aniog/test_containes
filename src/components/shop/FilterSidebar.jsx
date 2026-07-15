import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materials = [
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (s) => setOpenSection(openSection === s ? null : s);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const current = prev[type] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearAll = () => setFilters({});

  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-espresso">Filters</h3>
        <button
          onClick={clearAll}
          className="text-xs text-velmora-stone underline hover:text-velmora-espresso"
        >
          Clear all
        </button>
      </div>

      {/* Category */}
      <FilterSection
        title="Category"
        isOpen={openSection === 'category'}
        onToggle={() => toggleSection('category')}
      >
        {categories.map((c) => (
          <FilterCheckbox
            key={c.value}
            label={c.label}
            checked={(filters.category || []).includes(c.value)}
            onChange={() => toggleFilter('category', c.value)}
          />
        ))}
      </FilterSection>

      {/* Material */}
      <FilterSection
        title="Material"
        isOpen={openSection === 'material'}
        onToggle={() => toggleSection('material')}
      >
        {materials.map((m) => (
          <FilterCheckbox
            key={m.value}
            label={m.label}
            checked={(filters.material || []).includes(m.value)}
            onChange={() => toggleFilter('material', m.value)}
          />
        ))}
      </FilterSection>

      {/* Price */}
      <FilterSection
        title="Price"
        isOpen={openSection === 'price'}
        onToggle={() => toggleSection('price')}
      >
        {priceRanges.map((p) => (
          <FilterCheckbox
            key={p.value}
            label={p.label}
            checked={(filters.price || []).includes(p.value)}
            onChange={() => toggleFilter('price', p.value)}
          />
        ))}
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0">{sidebar}</aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-velmora-espresso/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-velmora-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="text-velmora-stone">
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebar}
          </div>
        </div>
      )}
    </>
  );
}

function FilterSection({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-t border-velmora-sand pt-4">
      <button onClick={onToggle} className="w-full flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase font-medium text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-velmora-stone transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div className={`mt-3 space-y-2.5 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-60' : 'max-h-0 mt-0'
      }`}>
        {children}
      </div>
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div
        className={`w-4 h-4 border transition-colors flex items-center justify-center ${
          checked
            ? 'bg-velmora-gold border-velmora-gold'
            : 'border-velmora-stone-light group-hover:border-velmora-gold'
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className="text-sm text-velmora-charcoal">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
}

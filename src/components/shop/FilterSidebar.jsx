import { X } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters, isOpen, setIsOpen }) => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
    { id: '50-80', name: '$50 – $80', min: 50, max: 80 },
    { id: 'over-80', name: 'Over $80', min: 80, max: Infinity },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-charcoal/40 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`
        fixed md:relative top-0 left-0 h-full md:h-auto w-72 md:w-full
        bg-white md:bg-transparent z-40 md:z-auto
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto md:overflow-visible
        p-6 md:p-0
      `}>
        {/* Mobile close */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h3 className="font-serif text-xl text-charcoal">Filters</h3>
          <button onClick={() => setIsOpen(false)} className="text-charcoal">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category filter */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-taupe font-sans font-medium mb-4">Category</h4>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilters(prev => ({ ...prev, category: cat.id }))}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.category === cat.id
                    ? 'text-charcoal font-medium'
                    : 'text-taupe hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price filter */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-taupe font-sans font-medium mb-4">Price</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setFilters(prev => ({ ...prev, price: range.id }))}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.price === range.id
                    ? 'text-charcoal font-medium'
                    : 'text-taupe hover:text-charcoal'
                }`}
              >
                {range.name}
              </button>
            ))}
          </div>
        </div>

        {/* Material filter */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-taupe font-sans font-medium mb-4">Material</h4>
          <div className="space-y-2">
            {['All', 'Gold', 'Silver'].map((mat) => (
              <button
                key={mat}
                onClick={() => setFilters(prev => ({ ...prev, material: mat.toLowerCase() }))}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.material === mat.toLowerCase()
                    ? 'text-charcoal font-medium'
                    : 'text-taupe hover:text-charcoal'
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;

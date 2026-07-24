import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/data';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const SORTS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = getProducts();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [products, activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false); // Close mobile filter on selection
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-muted py-16 px-4 text-center border-b border-border">
        <h1 className="font-serif text-4xl mb-4">The Collection</h1>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Discover our full range of demi-fine jewelry. Crafted from sustainable materials for everyday elegance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 font-serif tracking-widest uppercase text-sm border border-border px-4 py-2"
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-serif tracking-widest uppercase text-sm border border-border px-4 py-2 pr-8 focus:outline-none focus:border-primary"
            >
              {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
          </div>
        </div>

        {/* Sidebar */}
        <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28">
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6">Categories</h3>
            <ul className="space-y-4">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm tracking-wide transition-colors ${
                      activeCategory === cat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Sort - purely visual for layout consistency with design */}
            <div className="hidden md:block mt-12 pt-12 border-t border-border">
              <h3 className="font-serif text-lg uppercase tracking-widest mb-6">Sort By</h3>
              <ul className="space-y-4">
                {SORTS.map(s => (
                  <li key={s.value}>
                    <button
                      onClick={() => setSortBy(s.value)}
                      className={`text-sm tracking-wide transition-colors ${
                        sortBy === s.value ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <h2 className="font-serif text-2xl mb-4">No products found</h2>
              <p className="text-muted-foreground">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

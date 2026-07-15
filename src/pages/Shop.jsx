import { useState, useEffect, useRef, useMemo } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      const catMap = {
        Earrings: 'earrings',
        Necklaces: 'necklaces',
        Huggies: 'huggies',
        Sets: 'sets',
      };
      result = result.filter((p) => p.category === catMap[activeCategory]);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="heading-serif text-3xl md:text-4xl">Shop</h1>
            <p className="text-sm text-taupe mt-1 font-sans">{filteredProducts.length} pieces</p>
          </div>

          {/* Sort + Filter controls */}
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-sans font-medium text-warm-black border border-taupe-pale px-4 py-2 hover:border-gold transition-colors"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none text-xs tracking-wider uppercase font-sans font-medium text-warm-black bg-transparent border border-taupe-pale px-4 py-2 pr-8 cursor-pointer hover:border-gold transition-colors focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-taupe pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-wider uppercase font-sans font-medium text-warm-black mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors duration-300 ${
                      activeCategory === cat
                        ? 'text-gold font-medium'
                        : 'text-taupe hover:text-warm-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-taupe-pale">
                <h3 className="text-xs tracking-wider uppercase font-sans font-medium text-warm-black mb-4">Price</h3>
                <div className="text-sm text-taupe font-sans">
                  <p className="mb-1">$30 — $120</p>
                  <p className="text-xs text-taupe-light">All items</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-warm-white p-6 overflow-y-auto animate-slide-down"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs tracking-wider uppercase font-sans font-medium">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-xs tracking-wider uppercase font-sans font-medium text-warm-black mb-3">Category</h4>
                <div className="space-y-2 mb-8">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                      className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                        activeCategory === cat ? 'text-gold font-medium' : 'text-taupe hover:text-warm-black'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe">No products found in this category.</p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="btn-outline mt-4 inline-block"
                >
                  View All
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
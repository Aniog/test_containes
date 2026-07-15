import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
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
  }, [activeCategory, priceRange, sortBy]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-ink font-medium mb-4">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-300 ${
                activeCategory === cat.id
                  ? 'text-gold font-medium'
                  : 'text-taupe hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-ink font-medium mb-4">Price</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={200}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full accent-gold h-1"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-taupe">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full border border-beige px-3 py-2 text-sm text-ink bg-transparent focus:outline-none focus:border-gold"
              placeholder="Min"
            />
            <span className="text-taupe">&ndash;</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full border border-beige px-3 py-2 text-sm text-ink bg-transparent focus:outline-none focus:border-gold"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Clear */}
      <button
        onClick={() => {
          setPriceRange([0, 200]);
          setCategory('all');
        }}
        className="text-xs uppercase tracking-widest text-taupe hover:text-ink transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-ink font-light uppercase tracking-wider">
              {activeCategory === 'all' ? 'All Jewelry' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
            </h1>
            <p className="text-taupe text-sm mt-1 font-light">{filteredProducts.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs uppercase tracking-widest text-taupe bg-transparent border-none focus:outline-none cursor-pointer py-2"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-taupe">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setPriceRange([0, 200]);
                    setCategory('all');
                  }}
                  className="text-xs uppercase tracking-widest text-gold hover:text-ink mt-4 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block aspect-[3/4] bg-beige-light overflow-hidden relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product.id, product.name, product.price, product.images[0], 'gold', 1);
                        }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Add to cart"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </button>
                    </Link>
                    <div className="mt-3 space-y-1">
                      <h3 className="font-serif text-xs uppercase tracking-widest text-ink">
                        {product.name}
                      </h3>
                      <p className="text-sm text-taupe font-medium">${product.price}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-[11px] text-taupe">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-sm bg-cream p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg uppercase tracking-wider">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
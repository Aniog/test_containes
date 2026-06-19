import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const materials = ['All', '18K Gold Plated', 'Silver Tone'];
const sortOptions = [
  { label: 'Best Sellers', value: 'bestseller' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || 'All';
  const activeSort = searchParams.get('sort') || 'bestseller';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'All' || value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.material === activeMaterial || p.colors.includes(activeMaterial.replace(' Tone', '')));
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-gold font-medium'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', activePrice === range.label ? '' : range.label)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activePrice === range.label
                  ? 'text-gold font-medium'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activeMaterial === mat
                  ? 'text-gold font-medium'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-serif text-charcoal">Shop All</h1>
            <p className="text-sm text-charcoal-muted mt-1">{filteredProducts.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-light hover:text-charcoal transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-xs bg-transparent border border-beige text-charcoal-light py-2 px-3 focus:outline-none focus:border-gold transition-colors uppercase tracking-wider"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-charcoal-light text-sm">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-gold text-sm underline underline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-beige-light">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-charcoal/80 text-white text-[10px] px-2.5 py-1 tracking-wider uppercase">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xs md:text-sm tracking-widest uppercase text-charcoal font-medium hover:text-gold transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-gold-light fill-gold-light" />
                        <span className="text-[10px] text-charcoal-muted">{product.rating} ({product.reviews})</span>
                      </div>
                      <p className="font-serif italic text-sm md:text-base text-charcoal mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm tracking-widest uppercase text-charcoal font-medium">Filters</h4>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-charcoal-light hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => { setSearchParams({}); setMobileFiltersOpen(false); }}
              className="mt-8 w-full py-2.5 border border-beige text-charcoal-light text-xs tracking-wider uppercase hover:bg-beige transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
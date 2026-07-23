import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
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

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="border-b border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso text-center">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-taupe text-sm text-center mt-2 font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-espresso font-sans mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm font-sans transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-taupe hover:text-espresso'
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm font-sans transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-taupe hover:text-espresso'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-espresso font-sans mb-4">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={200}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full accent-gold"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={200}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                </div>
                <div className="flex justify-between text-xs text-taupe font-sans">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="md:hidden flex items-center gap-2 text-sm text-espresso font-sans"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs text-espresso font-sans uppercase tracking-wider bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe font-sans">No products match your filter.</p>
                <button
                  onClick={() => { setPriceRange([0, 200]); setCategory('all'); }}
                  className="text-gold text-sm mt-2 underline font-sans"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductGridCard
                    key={product.id}
                    product={product}
                    onAddToCart={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                      })
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-espresso font-sans">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-espresso font-sans mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false); }}
                    className={`text-sm font-sans ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-taupe'}`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false); }}
                      className={`text-sm font-sans ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-taupe'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-espresso font-sans mb-4">Price</h4>
              <div className="space-y-2">
                <input type="range" min={0} max={200} value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full accent-gold" />
                <input type="range" min={0} max={200} value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold" />
                <div className="flex justify-between text-xs text-taupe">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ProductGridCard({ product, onAddToCart }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[3/4] bg-warm-muted overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-espresso/80 text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1 font-sans">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddToCart();
          }}
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-gold hover:text-white p-2.5 shadow-sm transition-all duration-300"
          aria-label="Quick add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
      <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-espresso group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold text-gold" />
        <span className="text-xs text-taupe">{product.rating}</span>
      </div>
      <p className="text-sm font-sans text-espresso mt-1">${product.price}</p>
    </Link>
  );
}
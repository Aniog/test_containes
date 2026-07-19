import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }
    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCategory, priceRange, material, sortBy]);

  const allCategories = [{ id: 'all', name: 'All Jewelry' }, ...categories, { id: 'sets', name: 'Gift Sets' }];

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setMaterial('all');
    setSearchParams({});
  };

  return (
    <div className="pt-24 lg:pt-28 bg-background min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest">Shop</h1>
            <p className="mt-2 text-sm text-muted">{filtered.length} piece{filtered.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-hairline text-xs uppercase tracking-widest font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-surface border border-hairline text-xs uppercase tracking-widest font-medium px-4 py-2 pr-10 focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest font-medium">Filters</h3>
              <button onClick={clearFilters} className="text-xs text-muted hover:text-accent transition-colors">Clear All</button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Price</h4>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: '30-50', label: '$30 — $50' },
                  { value: '50-80', label: '$50 — $80' },
                  { value: '80-120', label: '$80 — $120' },
                ].map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPriceRange(p.value)}
                    className={`block text-sm transition-colors ${priceRange === p.value ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Material</h4>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Materials' },
                  { value: 'gold', label: 'Gold Plated' },
                  { value: 'silver', label: 'Silver Plated' },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMaterial(m.value)}
                    className={`block text-sm transition-colors ${material === m.value ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-72 bg-surface z-50 p-6 overflow-y-auto lg:hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs uppercase tracking-widest font-medium">Filters</h3>
                  <button onClick={() => setSidebarOpen(false)}>
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {allCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Price</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: '30-50', label: '$30 — $50' },
                      { value: '50-80', label: '$50 — $80' },
                      { value: '80-120', label: '$80 — $120' },
                    ].map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setPriceRange(p.value)}
                        className={`block text-sm transition-colors ${priceRange === p.value ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Material</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Materials' },
                      { value: 'gold', label: 'Gold Plated' },
                      { value: 'silver', label: 'Silver Plated' },
                    ].map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setMaterial(m.value)}
                        className={`block text-sm transition-colors ${material === m.value ? 'text-accent font-medium' : 'text-base hover:text-accent'}`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => { clearFilters(); setSidebarOpen(false); }}
                  className="w-full bg-accent text-white uppercase text-xs tracking-widest font-medium py-3"
                >
                  Clear All
                </button>
              </div>
            </>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm text-muted">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-accent text-xs uppercase tracking-widest font-medium">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
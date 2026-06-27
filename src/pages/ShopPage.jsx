import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function ShopPage() {
  const { category } = useParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setSelectedCategory(category || 'All');
  }, [category]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const categoryLabel = selectedCategory === 'All' ? 'All Jewelry' : selectedCategory;

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-surface-alt)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">The Collection</span>
          <h1 className="font-[var(--font-serif)] text-4xl md:text-5xl mt-3 font-semibold">{categoryLabel}</h1>
          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-56 flex-none hidden md:block`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">Category</h4>
                <div className="space-y-1">
                  {['All', ...categories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat
                          ? 'text-[var(--color-text-primary)] font-medium'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', range: [0, 200] },
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 – $75', range: [50, 75] },
                    { label: '$75 – $100', range: [75, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setPriceRange(opt.range)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                          ? 'text-[var(--color-text-primary)] font-medium'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">Material</h4>
                <div className="space-y-1">
                  {['All', 'Gold', 'Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedMaterial === mat
                          ? 'text-[var(--color-text-primary)] font-medium'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden fixed bottom-6 right-6 z-20">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="w-12 h-12 bg-[var(--color-surface-dark)] text-white rounded-full shadow-xl flex items-center justify-center"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Filter Panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-20 bg-[var(--color-surface)] pt-20 px-6 overflow-y-auto animate-fade-in">
              <button onClick={() => setFilterOpen(false)} className="absolute top-6 right-6 text-sm text-[var(--color-text-muted)]">Done</button>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...categories].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 text-sm border rounded-sm transition-colors ${
                          selectedCategory === cat
                            ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white'
                            : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'All', range: [0, 200] },
                      { label: 'Under $50', range: [0, 50] },
                      { label: '$50–$75', range: [50, 75] },
                      { label: '$75–$100', range: [75, 100] },
                      { label: 'Over $100', range: [100, 200] },
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setPriceRange(opt.range)}
                        className={`px-3 py-1.5 text-sm border rounded-sm transition-colors ${
                          priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                            ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white'
                            : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort + Results */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-[var(--color-text-muted)]">{filtered.length} pieces</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none text-xs text-[var(--color-text-secondary)] bg-transparent border border-[var(--color-border)] rounded-sm pl-3 pr-8 py-2 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--color-text-muted)] pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[var(--color-text-muted)]">No pieces match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setPriceRange([0, 200]); setSelectedMaterial('All'); }}
                  className="mt-3 text-sm text-[var(--color-accent)] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

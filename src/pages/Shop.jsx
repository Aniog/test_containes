import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <nav className="flex items-center gap-2 text-[12px] text-text-muted mb-6">
          <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-secondary">Shop</span>
        </nav>

        <h1 className="font-serif text-[32px] md:text-[40px] tracking-[0.08em] uppercase text-text-primary">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="text-[14px] text-text-secondary mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-border-light mb-8">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-text-secondary"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`h-8 px-4 text-[11px] uppercase tracking-[0.1em] border transition-colors ${
                activeCategory === 'all'
                  ? 'border-accent text-accent bg-accent/5'
                  : 'border-border text-text-secondary hover:border-text-secondary'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`h-8 px-4 text-[11px] uppercase tracking-[0.1em] border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-accent text-accent bg-accent/5'
                    : 'border-border text-text-secondary hover:border-text-secondary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-8 px-3 text-[12px] text-text-secondary border border-border bg-white focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-4 border border-border-light bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[12px] uppercase tracking-[0.1em] text-text-primary">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-text-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`h-8 px-4 text-[11px] uppercase tracking-[0.1em] border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-accent text-accent bg-accent/5'
                    : 'border-border text-text-secondary'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`h-8 px-4 text-[11px] uppercase tracking-[0.1em] border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-accent text-accent bg-accent/5'
                      : 'border-border text-text-secondary'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-[14px]">No products found in this category.</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-accent text-[12px] uppercase tracking-[0.1em] border-b border-accent pb-0.5"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

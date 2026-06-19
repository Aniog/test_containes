import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const materials = ['18k Gold Plated'];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const range = priceRanges.find(r => r.label === selectedPrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial);
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(null);
    setSelectedMaterial(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice || selectedMaterial;

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-fg mb-2">Shop All</h1>
        <p className="text-sm text-muted-fg">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-fg hover:text-accent transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover transition-colors"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs text-muted-fg hidden sm:block">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs border border-border bg-surface px-3 py-1.5 text-fg focus:outline-none focus:border-accent"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="md:sticky md:top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-fg mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory('all'); setSearchParams({}); }}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-fg hover:text-fg'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSearchParams({ category: cat.id });
                      }}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-fg hover:text-fg'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-fg mb-3">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice === range.label ? null : range.label)}
                      className={`block text-sm transition-colors ${
                        selectedPrice === range.label ? 'text-accent font-medium' : 'text-muted-fg hover:text-fg'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-fg mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                      className={`block text-sm transition-colors ${
                        selectedMaterial === mat ? 'text-accent font-medium' : 'text-muted-fg hover:text-fg'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-fg mb-2">No pieces found</p>
                <p className="text-sm text-muted-fg mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="border border-accent text-accent px-6 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent hover:text-accent-fg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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

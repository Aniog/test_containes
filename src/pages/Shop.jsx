import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const matchedCategory = CATEGORIES.find(
    c => c.toLowerCase() === initialCategory?.toLowerCase()
  ) || 'All';

  const [selectedCategory, setSelectedCategory] = useState(matchedCategory);
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    result = result.filter(p => p.price >= selectedPrice.min && p.price <= selectedPrice.max);

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <main className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-mist/60 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-charcoal tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-taupe mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-4">
                  Category
                </h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-inter text-xs transition-colors ${
                          selectedCategory === cat
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-charcoal'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-mist/60" />

              {/* Price */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-4">
                  Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setSelectedPrice(range)}
                        className={`font-inter text-xs transition-colors ${
                          selectedPrice.label === range.label
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-mist/60" />

              {/* Material */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-4">
                  Material
                </h3>
                <ul className="space-y-2.5">
                  {['18K Gold Plated', 'Silver Tone'].map(mat => (
                    <li key={mat}>
                      <button className="font-inter text-xs text-taupe hover:text-charcoal transition-colors">
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter bar + sort */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-mist px-4 py-2.5 hover:border-gold transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-taupe hover:text-charcoal transition-colors"
                >
                  Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-ivory border border-mist/60 shadow-lg z-20 min-w-[180px]">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-3 font-inter text-xs hover:bg-parchment transition-colors ${
                          sortBy === opt.value ? 'text-gold' : 'text-charcoal'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-parchment border border-mist/60 p-6 mb-6 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-inter text-xs uppercase tracking-widest text-charcoal">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-taupe" />
                  </button>
                </div>
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-inter text-xs px-3 py-1.5 border transition-colors ${
                          selectedCategory === cat
                            ? 'border-gold text-gold bg-gold/5'
                            : 'border-mist text-taupe hover:border-charcoal'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map(range => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPrice(range)}
                        className={`font-inter text-xs px-3 py-1.5 border transition-colors ${
                          selectedPrice.label === range.label
                            ? 'border-gold text-gold bg-gold/5'
                            : 'border-mist text-taupe hover:border-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-charcoal mb-2">No pieces found</p>
                <p className="font-inter text-sm text-taupe">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

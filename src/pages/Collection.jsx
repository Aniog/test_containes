import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categoryOptions = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function Collection() {
  const { category: urlCategory } = useParams();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products
  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  const priceRange = priceRanges.find(r => r.id === selectedPrice);
  if (priceRange && selectedPrice !== 'all') {
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
  }

  if (selectedMaterial !== 'all') {
    filtered = filtered.filter(p =>
      p.variants.some(v => v.toLowerCase() === selectedMaterial.toLowerCase())
    );
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const activeFilters = [
    selectedCategory !== 'all' ? selectedCategory : null,
    selectedPrice !== 'all' ? priceRange?.label : null,
    selectedMaterial !== 'all' ? selectedMaterial : null,
  ].filter(Boolean);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-surface-alt py-12 md:py-16">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <h1 className="heading-display mb-4">
            {selectedCategory !== 'all'
              ? categoryOptions.find(c => c.id === selectedCategory)?.label || 'Collection'
              : 'Our Collection'}
          </h1>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Handcrafted demi-fine jewelry designed for the modern woman.
          </p>
        </div>
      </div>

      <div className="container-wide mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm font-medium text-text-primary lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={12} />
                Clear filters
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-surface border border-border rounded-md px-4 py-2 pr-8 text-sm text-text-primary cursor-pointer focus:outline-none focus:border-accent transition-colors"
              >
                {sortOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className={`lg:block flex-shrink-0 w-64 ${filterOpen ? 'block' : 'hidden'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-medium tracking-nav uppercase text-text-secondary mb-4">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-accent font-medium'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Price Filter */}
              <div>
                <h3 className="text-xs font-medium tracking-nav uppercase text-text-secondary mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPrice(range.id)}
                      className={`block text-sm transition-colors ${
                        selectedPrice === range.id
                          ? 'text-accent font-medium'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Material Filter */}
              <div>
                <h3 className="text-xs font-medium tracking-nav uppercase text-text-secondary mb-4">Material</h3>
                <div className="space-y-2">
                  {['all', 'Gold', 'Silver'].map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm transition-colors capitalize ${
                        selectedMaterial === mat
                          ? 'text-accent font-medium'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {mat === 'all' ? 'All Materials' : `${mat} Plated`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-xs text-text-secondary mb-6">{filtered.length} pieces</p>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-primary mb-2">No pieces found</p>
                <p className="text-sm text-text-secondary mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

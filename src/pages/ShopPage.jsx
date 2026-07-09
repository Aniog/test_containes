import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range && (product.price < range.min || product.price >= range.max)) return false;
    }
    if (selectedMaterial !== 'all') {
      const hasVariant = product.variants.some(v => v.id === selectedMaterial);
      if (!hasVariant) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange || selectedMaterial !== 'all';

  return (
    <main className="pt-20">
      {/* Hero banner */}
      <div className="bg-velmora-espresso py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl lg:text-heading-1 text-white mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-velmora-taupe max-w-md mx-auto">
            Discover our curated collection of demi-fine jewelry, designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-velmora-taupe">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-velmora-stone pr-8 pl-2 py-1 border border-velmora-sand rounded cursor-pointer focus:outline-none focus:border-velmora-gold transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-velmora-stone absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-10">
          {/* Filters sidebar */}
          <aside
            className={`fixed lg:static inset-0 z-50 lg:z-auto bg-white lg:bg-transparent p-6 lg:p-0 transform transition-transform duration-300 lg:transform-none lg:w-56 flex-shrink-0 ${
              showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden p-1"
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-velmora-stone" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[10px] uppercase tracking-widest-xl text-velmora-stone mb-3">
                Category
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm transition-colors ${
                    selectedCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-stone hover:text-velmora-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm transition-colors ${
                      selectedCategory === cat.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-stone hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[10px] uppercase tracking-widest-xl text-velmora-stone mb-3">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(selectedPriceRange === range.id ? null : range.id)}
                    className={`block text-sm transition-colors ${
                      selectedPriceRange === range.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-stone hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[10px] uppercase tracking-widest-xl text-velmora-stone mb-3">
                Material
              </h4>
              <div className="space-y-2">
                {['all', 'gold', 'silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block text-sm transition-colors capitalize ${
                      selectedMaterial === mat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-stone hover:text-velmora-charcoal'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : mat}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-velmora-gold hover:text-velmora-gold-dark transition-colors underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone mb-2">No pieces found</p>
                <p className="text-sm text-velmora-taupe mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {sortedProducts.map((product) => (
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

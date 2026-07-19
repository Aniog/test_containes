import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange, selectedMaterial]);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

  const handleCategoryChange = (value) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs text-gold tracking-widest uppercase mb-3 font-sans">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide">
            Shop All
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filter Sidebar — Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-medium text-espresso tracking-wider uppercase mb-6">
                Categories
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`text-left text-sm py-1.5 transition-colors ${
                      activeCategory === cat.value
                        ? 'text-gold font-medium'
                        : 'text-taupe hover:text-espresso'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-medium text-espresso tracking-wider uppercase mb-4">
                Material
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                {[
                  { value: 'all', label: 'All' },
                  { value: 'gold', label: '18K Gold Plated' },
                  { value: 'silver', label: 'Silver' },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setSelectedMaterial(m.value)}
                    className={`text-left text-sm py-1.5 transition-colors ${
                      selectedMaterial === m.value
                        ? 'text-gold font-medium'
                        : 'text-taupe hover:text-espresso'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-medium text-espresso tracking-wider uppercase mb-4">
                Price
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-taupe">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <span className="text-xs text-taupe">${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-espresso border border-border rounded px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter & Sort
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none text-sm text-espresso border border-border rounded px-4 py-2 pr-8 bg-transparent cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-taupe absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="lg:hidden bg-white border border-border rounded-lg p-4 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-medium text-espresso tracking-wider uppercase">
                  Filters
                </h3>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-4 h-4 text-taupe" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      activeCategory === cat.value
                        ? 'bg-espresso text-white border-espresso'
                        : 'border-border text-taupe hover:border-gold'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { value: 'all', label: 'All Materials' },
                  { value: 'gold', label: '18K Gold Plated' },
                  { value: 'silver', label: 'Silver' },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setSelectedMaterial(m.value)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      selectedMaterial === m.value
                        ? 'bg-espresso text-white border-espresso'
                        : 'border-border text-taupe hover:border-gold'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div>
                <p className="text-xs text-taupe mb-2">
                  Price: ${priceRange[0]} – ${priceRange[1]}
                </p>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold"
                />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-xs text-taupe">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none text-sm text-espresso border border-border rounded px-4 py-2 pr-8 bg-transparent cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-taupe absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm mb-4">No products match your filters.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setSelectedMaterial('all');
                    setPriceRange([0, 120]);
                  }}
                  className="text-sm text-gold hover:text-gold-deep underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
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
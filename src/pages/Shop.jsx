import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const filters = {
  category: [
    { value: 'all', label: 'All Jewelry' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Sets' },
  ],
  price: [
    { value: 'all', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: '75-100', label: '$75 - $100' },
    { value: 'over-100', label: 'Over $100' },
  ],
  material: [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: 'Gold Tone' },
    { value: 'silver', label: 'Silver Tone' },
  ],
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryParam = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [categoryParam, sortBy]);

  const handleCategoryChange = (value) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-medium text-warm-black mb-4">Category</h3>
        <div className="space-y-3">
          {filters.category.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={categoryParam === option.value}
                onChange={() => handleCategoryChange(option.value)}
                className="w-4 h-4 accent-champagne"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-medium text-warm-black mb-4">Price</h3>
        <div className="space-y-3">
          {filters.price.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                defaultChecked={option.value === 'all'}
                className="w-4 h-4 accent-champagne"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-medium text-warm-black mb-4">Material</h3>
        <div className="space-y-3">
          {filters.material.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                defaultChecked={option.value === 'all'}
                className="w-4 h-4 accent-champagne"
              />
              <span className="text-sm text-stone group-hover:text-charcoal transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl text-warm-black mb-2">
            Shop All
          </h1>
          <p className="text-stone">
            {filteredProducts.length} pieces
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-pebble">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-charcoal"
              >
                <SlidersHorizontal size={18} strokeWidth={1.5} />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-sm text-charcoal focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                />
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone mb-4">
                  No products found in this category.
                </p>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="text-champagne hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/50"
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-full bg-cream shadow-hover transform transition-transform duration-300 ${
            isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-pebble">
              <h2 className="font-serif text-xl text-warm-black">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-charcoal/60 hover:text-champagne transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterContent />
            </div>
            <div className="p-6 border-t border-pebble">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full h-12 bg-champagne text-white font-medium text-sm uppercase tracking-wider hover:bg-antique-gold transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
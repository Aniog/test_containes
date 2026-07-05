import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(sortParam || 'featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', name: 'Under $50', min: 0, max: 50 },
    { id: '50to75', name: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', name: 'Over $75', min: 75, max: Infinity },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    const range = priceRanges.find(r => r.id === priceRange);
    if (range) {
      result = result.filter(p => p.price >= range.min && p.price < range.max);
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
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    updateParams('category', categoryId);
  };

  const handleSortChange = (sortId) => {
    setSortBy(sortId);
    updateParams('sort', sortId);
  };

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-left text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`block text-left text-sm transition-colors ${
                priceRange === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-charcoal'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Material</h3>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver'].map((material) => (
            <button
              key={material}
              className="block text-left text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              {material}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name}
          </h1>
          <p className="text-velmora-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          <div
            className={`fixed inset-0 z-50 lg:hidden ${
              isFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity ${
                isFilterOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsFilterOpen(false)}
            />
            <div
              className={`absolute left-0 top-0 h-full w-80 bg-velmora-cream p-6 overflow-y-auto transition-transform duration-300 ${
                isFilterOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-8">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-sand px-4 py-2 pr-10 text-sm focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velmora-taupe mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
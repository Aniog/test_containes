import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(sortParam);

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const materials = [
    { id: 'all', name: 'All Materials' },
    { id: 'gold', name: 'Gold' },
    { id: 'silver', name: 'Silver' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to75', name: '$50 - $75' },
    { id: 'over75', name: 'Over $75' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (priceRange === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    priceRange !== 'all',
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen pt-[72px]">
      <div className="container-main py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide">
            {categories.find(c => c.id === selectedCategory)?.name || 'Shop All'}
          </h1>
          <p className="mt-4 text-[var(--color-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-border)]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium"
          >
            <SlidersHorizontal size={18} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-[var(--color-gold)] text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden lg:flex items-center gap-4">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm font-medium focus:outline-none cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block text-left text-sm py-1 transition-colors ${
                        selectedCategory === category.id
                          ? 'text-[var(--color-gold)] font-medium'
                          : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`block text-left text-sm py-1 transition-colors ${
                        selectedMaterial === material.id
                          ? 'text-[var(--color-gold)] font-medium'
                          : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {material.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block text-left text-sm py-1 transition-colors ${
                        priceRange === range.id
                          ? 'text-[var(--color-gold)] font-medium'
                          : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[var(--color-muted)] mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--color-cream)] shadow-xl transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`block text-left text-sm py-2 w-full ${
                      selectedCategory === category.id
                        ? 'text-[var(--color-gold)] font-medium'
                        : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map(material => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`block text-left text-sm py-2 w-full ${
                      selectedMaterial === material.id
                        ? 'text-[var(--color-gold)] font-medium'
                        : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {material.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-left text-sm py-2 w-full ${
                      priceRange === range.id
                        ? 'text-[var(--color-gold)] font-medium'
                        : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 btn-outline text-sm"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-accent text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

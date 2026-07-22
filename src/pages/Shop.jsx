import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

const materials = [
  { id: 'gold', name: 'Gold' },
  { id: 'silver', name: 'Silver' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', name: '$75+', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => 
        p.material === selectedMaterial || p.variants.includes(selectedMaterial)
      );
    }

    // Price filter
    const priceRange = priceRanges.find(p => p.id === selectedPrice);
    if (priceRange) {
      filtered = filtered.filter(p => 
        p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    selectedPrice !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedPrice('all');
    setSearchParams({});
  };

  return (
    <div className="bg-bg min-h-screen">
      {/* Header */}
      <div className="bg-bg-alt border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-text text-center">
            Shop the Collection
          </h1>
          <p className="text-text-muted text-center mt-2">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-text-muted">Filter:</span>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-extra-wide uppercase transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-text text-white'
                      : 'bg-bg-alt text-text-muted hover:bg-border'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200"
            >
              <span>Sort by: {sortOptions.find(s => s.id === sortBy)?.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-elevated rounded py-2 z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                      sortBy === option.id
                        ? 'bg-bg-alt text-text font-medium'
                        : 'text-text-muted hover:bg-bg-alt hover:text-text'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 space-y-6">
                {/* Category */}
                <div>
                  <h3 className="text-xs font-medium tracking-extra-wide uppercase text-text-muted mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleCategoryChange(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full text-left py-2 text-sm transition-colors duration-200 ${
                          selectedCategory === cat.id
                            ? 'text-accent font-medium'
                            : 'text-text-muted hover:text-text'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h3 className="text-xs font-medium tracking-extra-wide uppercase text-text-muted mb-3">
                    Material
                  </h3>
                  <div className="space-y-2">
                    {materials.map((mat) => (
                      <button
                        key={mat.id}
                        onClick={() => setSelectedMaterial(mat.id)}
                        className={`block w-full text-left py-2 text-sm transition-colors duration-200 ${
                          selectedMaterial === mat.id
                            ? 'text-accent font-medium'
                            : 'text-text-muted hover:text-text'
                        }`}
                      >
                        {mat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-xs font-medium tracking-extra-wide uppercase text-text-muted mb-3">
                    Price
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPrice(range.id)}
                        className={`block w-full text-left py-2 text-sm transition-colors duration-200 ${
                          selectedPrice === range.id
                            ? 'text-accent font-medium'
                            : 'text-text-muted hover:text-text'
                        }`}
                      >
                        {range.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 p-4 border-t border-border bg-white">
                <div className="flex gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="flex-1 py-3 text-sm font-medium text-text border border-border hover:bg-bg-alt transition-colors duration-200"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-3 text-sm font-medium text-white bg-accent hover:bg-accent-dark transition-colors duration-200"
                  >
                    Show {filteredProducts.length} Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-text-muted">Active filters:</span>
            
            {selectedCategory !== 'all' && (
              <button
                onClick={() => handleCategoryChange('all')}
                className="flex items-center gap-1 px-3 py-1 text-xs bg-bg-alt text-text hover:bg-border transition-colors duration-200"
              >
                {categories.find(c => c.id === selectedCategory)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            
            {selectedMaterial !== 'all' && (
              <button
                onClick={() => setSelectedMaterial('all')}
                className="flex items-center gap-1 px-3 py-1 text-xs bg-bg-alt text-text hover:bg-border transition-colors duration-200"
              >
                {materials.find(m => m.id === selectedMaterial)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            
            {selectedPrice !== 'all' && (
              <button
                onClick={() => setSelectedPrice('all')}
                className="flex items-center gap-1 px-3 py-1 text-xs bg-bg-alt text-text hover:bg-border transition-colors duration-200"
              >
                {priceRanges.find(p => p.id === selectedPrice)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            
            <button
              onClick={clearAllFilters}
              className="text-xs text-text-muted hover:text-text underline underline-offset-2"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted mb-4">No products match your filters.</p>
            <button
              onClick={clearAllFilters}
              className="text-sm text-accent hover:text-accent-dark transition-colors duration-200 underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

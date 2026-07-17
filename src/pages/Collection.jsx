import { useState, useMemo } from 'react';
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
  { id: 'all', name: 'All Materials' },
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
  { id: 'newest', name: 'Newest' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const materialParam = searchParams.get('material') || 'all';
  const priceParam = searchParams.get('price') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (categoryParam !== 'all') {
      filtered = filtered.filter(p => p.category === categoryParam);
    }

    // Filter by material
    if (materialParam !== 'all') {
      filtered = filtered.filter(p => p.material === materialParam);
    }

    // Filter by price
    const priceRange = priceRanges.find(p => p.id === priceParam);
    if (priceRange) {
      filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Sort
    switch (sortParam) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return filtered;
  }, [categoryParam, materialParam, priceParam, sortParam]);

  const activeFiltersCount = [
    categoryParam !== 'all',
    materialParam !== 'all',
    priceParam !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-sand/30 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
            Shop All Jewelry
          </h1>
          <p className="text-charcoal/70 mt-4 max-w-xl mx-auto">
            Discover our complete collection of demi-fine gold jewelry, 
            designed to elevate every moment.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-gold text-white text-[10px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Desktop Filter Pills */}
            <div className="hidden lg:flex items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateFilter('category', cat.id)}
                  className={`text-xs tracking-wider uppercase transition-colors ${
                    categoryParam === cat.id 
                      ? 'text-gold' 
                      : 'text-charcoal/60 hover:text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal"
              >
                Sort: {sortOptions.find(s => s.id === sortParam)?.name}
                <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setOpenDropdown(false)} 
                  />
                  <div className="absolute right-0 top-full mt-2 bg-white border border-sand rounded shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          updateFilter('sort', option.id);
                          setOpenDropdown(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-xs tracking-wide transition-colors first:rounded-t last:rounded-b ${
                          sortParam === option.id
                            ? 'bg-sand/50 text-gold'
                            : 'text-charcoal hover:bg-sand/30'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-36 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm transition-colors ${
                        categoryParam === cat.id 
                          ? 'text-gold' 
                          : 'text-charcoal/60 hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => updateFilter('material', mat.id)}
                      className={`block text-sm transition-colors ${
                        materialParam === mat.id 
                          ? 'text-gold' 
                          : 'text-charcoal/60 hover:text-charcoal'
                      }`}
                    >
                      {mat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={`block text-sm transition-colors ${
                        priceParam === range.id 
                          ? 'text-gold' 
                          : 'text-charcoal/60 hover:text-charcoal'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs tracking-wider uppercase text-warmGray hover:text-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div 
                className="absolute inset-0 bg-espresso/60"
                onClick={() => setShowFilters(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl max-h-[70vh] overflow-y-auto animate-slide-out">
                <div className="sticky top-0 bg-cream p-4 border-b border-sand flex items-center justify-between">
                  <h2 className="font-serif text-lg text-charcoal">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2"
                  >
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>
                <div className="p-4 space-y-6">
                  {/* Category */}
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-charcoal mb-3">
                      Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => updateFilter('category', cat.id)}
                          className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-colors ${
                            categoryParam === cat.id
                              ? 'border-charcoal bg-charcoal text-white'
                              : 'border-sand text-charcoal hover:border-charcoal'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-charcoal mb-3">
                      Material
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {materials.map((mat) => (
                        <button
                          key={mat.id}
                          onClick={() => updateFilter('material', mat.id)}
                          className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-colors ${
                            materialParam === mat.id
                              ? 'border-charcoal bg-charcoal text-white'
                              : 'border-sand text-charcoal hover:border-charcoal'
                          }`}
                        >
                          {mat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-charcoal mb-3">
                      Price
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => updateFilter('price', range.id)}
                          className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-colors ${
                            priceParam === range.id
                              ? 'border-charcoal bg-charcoal text-white'
                              : 'border-sand text-charcoal hover:border-charcoal'
                          }`}
                        >
                          {range.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sticky bottom-0 bg-cream p-4 border-t border-sand flex gap-3">
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="flex-1 py-3 border border-sand text-xs tracking-wider uppercase text-charcoal rounded"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 py-3 bg-charcoal text-white text-xs tracking-wider uppercase rounded"
                  >
                    Show {filteredProducts.length} Results
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-charcoal/60 mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-warmGray mb-6">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

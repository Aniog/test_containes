import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories, materials } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import FilterSidebar from '@/components/shop/FilterSidebar';

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-75', label: '$50 – $75' },
  { id: '75-100', label: '$75 – $100' },
  { id: 'over-100', label: 'Over $100' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem, setDrawer } = useCart();

  const selectedCategory = searchParams.get('category') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const selectedPrice = searchParams.get('price') || '';

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (selectedPrice) {
      switch (selectedPrice) {
        case 'under-50':
          result = result.filter((p) => p.price < 50);
          break;
        case '50-75':
          result = result.filter((p) => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          result = result.filter((p) => p.price > 75 && p.price <= 100);
          break;
        case 'over-100':
          result = result.filter((p) => p.price > 100);
          break;
        default:
          break;
      }
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
      case 'newest':
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, product.material, 1);
    setDrawer(true);
  };

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <CartDrawer />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">
              {selectedCategory
                ? categories.find((c) => c.id === selectedCategory)?.label || 'Shop'
                : 'Shop All'}
            </h1>
            <p className="text-sm text-warm-gray mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-border text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-ink hover:border-ink transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-border pl-4 pr-10 py-2.5 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-ink focus:outline-none focus:border-ink cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              categories={categories}
              materials={materials}
              priceRanges={priceRanges}
              selectedCategory={selectedCategory}
              selectedMaterial={selectedMaterial}
              selectedPrice={selectedPrice}
              onCategoryChange={(val) => updateFilter('category', val)}
              onMaterialChange={(val) => updateFilter('material', val)}
              onPriceChange={(val) => updateFilter('price', val)}
              onClear={clearFilters}
            />
          </div>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-paper p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink">
                    Filters
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-warm-gray hover:text-ink"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar
                  categories={categories}
                  materials={materials}
                  priceRanges={priceRanges}
                  selectedCategory={selectedCategory}
                  selectedMaterial={selectedMaterial}
                  selectedPrice={selectedPrice}
                  onCategoryChange={(val) => {
                    updateFilter('category', val);
                  }}
                  onMaterialChange={(val) => updateFilter('material', val)}
                  onPriceChange={(val) => updateFilter('price', val)}
                  onClear={clearFilters}
                />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-6 py-3.5 bg-ink text-paper text-[11px] font-sans font-semibold tracking-[0.2em] uppercase"
                >
                  Show Results
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-ink mb-2">No pieces found</p>
                <p className="text-sm text-warm-gray mb-6">Try adjusting your filters to discover more.</p>
                <button
                  onClick={clearFilters}
                  className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[3/4] bg-cream overflow-hidden mb-3 relative">
                        <img
                          src={`https://placehold.co/600x800/f7f4ef/c9a96e?text=${encodeURIComponent(product.name)}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="absolute bottom-3 left-3 right-3 py-2.5 bg-ink/90 backdrop-blur-sm text-paper text-[10px] font-sans font-semibold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ink"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </Link>
                    <div>
                      <h3 className="font-serif text-xs sm:text-sm tracking-[0.12em] uppercase text-ink group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-[10px] text-warm-gray">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium text-ink mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;

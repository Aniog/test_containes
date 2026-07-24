import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' }
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' }
];

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-[var(--color-cream-dark)] overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={product.images[1]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] text-xs font-sans font-medium tracking-wider uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-warm-gold)]"
          >
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="product-name text-[var(--color-charcoal)]">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star size={12} fill="var(--color-warm-gold)" stroke="var(--color-warm-gold)" />
            <span className="text-xs text-[var(--color-stone)]">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="mt-2 font-sans text-sm text-[var(--color-charcoal)]">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (selectedPrice !== 'all') {
      result = result.filter(p => {
        switch (selectedPrice) {
          case 'under-50': return p.price < 50;
          case '50-75': return p.price >= 50 && p.price <= 75;
          case '75-100': return p.price >= 75 && p.price <= 100;
          case 'over-100': return p.price > 100;
          default: return true;
        }
      });
    }

    // Sort
    switch (selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, just reverse
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedSort]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all';

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-stone)] mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm text-left w-full py-1 transition-colors ${
              selectedCategory === 'all'
                ? 'text-[var(--color-charcoal)] font-medium'
                : 'text-[var(--color-stone)] hover:text-[var(--color-charcoal)]'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm text-left w-full py-1 transition-colors ${
                selectedCategory === cat.id
                  ? 'text-[var(--color-charcoal)] font-medium'
                  : 'text-[var(--color-stone)] hover:text-[var(--color-charcoal)]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-stone)] mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedPrice(range.value)}
              className={`block text-sm text-left w-full py-1 transition-colors ${
                selectedPrice === range.value
                  ? 'text-[var(--color-charcoal)] font-medium'
                  : 'text-[var(--color-stone)] hover:text-[var(--color-charcoal)]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-stone)] mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((material) => (
            <label
              key={material}
              className="flex items-center gap-2 text-sm text-[var(--color-stone)] cursor-pointer hover:text-[var(--color-charcoal)]"
            >
              <input
                type="checkbox"
                className="w-4 h-4 border border-[var(--color-charcoal)] border-opacity-30 rounded-sm accent-[var(--color-warm-gold)]"
              />
              {material}
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[var(--color-warm-gold)] hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <div className="pt-[72px]">
      {/* Page Header */}
      <div className="bg-[var(--color-cream-dark)] py-16">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)]">
            Shop
          </h1>
          <p className="mt-4 text-[var(--color-stone)] max-w-md mx-auto">
            Discover our collection of demi-fine jewelry, crafted for everyday luxury
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[var(--color-warm-gold)] rounded-full" />
            )}
          </button>
          
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--color-stone)]">
                {filteredProducts.length} products
              </p>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm focus:outline-none border-b border-[var(--color-charcoal)] border-opacity-20 pb-1"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      Sort: {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-stone)] mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-cream)] p-6 overflow-y-auto transition-transform duration-300 ${
            isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-xl">Filters</h2>
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="p-1"
            >
              <X size={20} />
            </button>
          </div>
          <FilterContent />
          <button
            onClick={() => setIsMobileFiltersOpen(false)}
            className="w-full btn-primary mt-8"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
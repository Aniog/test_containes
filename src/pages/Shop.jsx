import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-velmora-charcoal/90 backdrop-blur-sm text-white font-sans font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
        {product.bestseller && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-velmora-gold text-white text-xs font-sans font-medium tracking-wide">
            Bestseller
          </span>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-velmora-gold fill-velmora-gold'
                  : 'text-velmora-taupe'
              }`}
            />
          ))}
        </div>
        <h3 className="font-serif text-sm tracking-ultra-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-velmora-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'sets', label: 'Gift Sets' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-espresso/40 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 md:z-auto w-80 max-w-[85%] md:w-auto bg-velmora-cream md:bg-transparent transform transition-transform duration-300 md:transform-none overflow-y-auto md:overflow-visible ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 md:p-0 h-full md:h-auto">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-sans font-semibold text-velmora-charcoal mb-4 tracking-wide">
              CATEGORY
            </h3>
            <div className="space-y-3">
              {categoryOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={option.value}
                    checked={filters.category === option.value}
                    onChange={(e) =>
                      setFilters({ ...filters, category: e.target.value })
                    }
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm font-sans text-velmora-text-secondary group-hover:text-velmora-charcoal transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-sans font-semibold text-velmora-charcoal mb-4 tracking-wide">
              PRICE
            </h3>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range.value}
                    checked={filters.price === range.value}
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm font-sans text-velmora-text-secondary group-hover:text-velmora-charcoal transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Mobile Apply button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide md:hidden"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    sort: 'featured',
  });

  // Update filters when URL params change
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      if (filters.price !== 'all') {
        switch (filters.price) {
          case 'under-50':
            if (product.price >= 50) return false;
            break;
          case '50-75':
            if (product.price < 50 || product.price > 75) return false;
            break;
          case '75-100':
            if (product.price < 75 || product.price > 100) return false;
            break;
          case 'over-100':
            if (product.price <= 100) return false;
            break;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const currentSort = sortOptions.find((o) => o.value === filters.sort);

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all', sort: filters.sort });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category !== 'all' || filters.price !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-2">
            {filters.category === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.id === filters.category)?.name || 'Shop'}
          </h1>
          <p className="text-sm font-sans text-velmora-text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
          {/* Filter button (mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>

          {/* Clear filters (desktop) */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="hidden md:block text-sm font-sans text-velmora-text-secondary hover:text-velmora-gold transition-colors"
            >
              Clear Filters
            </button>
          )}

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm font-sans text-velmora-charcoal"
            >
              Sort by: <span className="font-medium">{currentSort?.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isSortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-velmora-sand shadow-lg z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilters({ ...filters, sort: option.value });
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm font-sans transition-colors ${
                        filters.sort === option.value
                          ? 'text-velmora-gold bg-velmora-warm'
                          : 'text-velmora-charcoal hover:bg-velmora-warm'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex gap-8">
          {/* Filter sidebar (desktop) */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={false}
              onClose={() => {}}
            />
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-text-secondary font-sans mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm font-sans text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar */}
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}

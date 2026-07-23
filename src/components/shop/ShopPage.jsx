import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, X, SlidersHorizontal } from 'lucide-react';
import { products, categories, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory)] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-warm-white)] text-xs font-sans font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="text-center">
        <h3 className="text-product-name text-xs" style={{ color: 'var(--color-charcoal)' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-[var(--color-gold)]" style={{ color: 'var(--color-gold)' }} />
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
            {product.rating}
          </span>
        </div>
        <p className="mt-1 font-serif text-sm" style={{ color: 'var(--color-charcoal)' }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

const FilterSidebar = ({ filters, setFilters, isOpen, onClose }) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Gift Sets' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: 'over75', label: 'Over $75' }
  ];

  const materialOptions = [
    { value: 'all', label: 'All Materials' },
    { value: '18K Gold Plated', label: '18K Gold Plated' },
    { value: 'Rose Gold', label: 'Rose Gold' },
    { value: 'Silver', label: 'Silver' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 w-72 md:w-64 bg-[var(--color-cream)] shadow-xl md:shadow-none transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="font-serif text-xl" style={{ color: 'var(--color-charcoal)' }}>
              Filters
            </h2>
            <button onClick={onClose} className="p-2">
              <X className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-charcoal)' }}>
              Category
            </h3>
            <div className="space-y-2">
              {categoryOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === option.value}
                    onChange={() => setFilters({ ...filters, category: option.value })}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span
                    className="text-sm group-hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-charcoal)' }}>
              Price
            </h3>
            <div className="space-y-2">
              {priceOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === option.value}
                    onChange={() => setFilters({ ...filters, price: option.value })}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span
                    className="text-sm group-hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-charcoal)' }}>
              Material
            </h3>
            <div className="space-y-2">
              {materialOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="material"
                    checked={filters.material === option.value}
                    onChange={() => setFilters({ ...filters, material: option.value })}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span
                    className="text-sm group-hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => setFilters({ category: 'all', price: 'all', material: 'all', sort: 'featured' })}
            className="text-xs underline hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Clear all filters
          </button>
        </div>
      </aside>
    </>
  );
};

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'all',
    material: 'all',
    sort: 'featured'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Price filter
    if (filters.price === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.price === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (filters.price === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    // Material filter
    if (filters.material !== 'all') {
      result = result.filter(p => p.material === filters.material);
    }

    // Sort
    if (filters.sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filters]);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Best Rated' }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 min-h-screen">
      {/* Page Header */}
      <div className="bg-[var(--color-ivory)] py-12 md:py-16">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
            Shop All
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="container-narrow">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 py-4 border-b" style={{ borderColor: 'var(--color-light-gray)' }}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 text-sm"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {filteredProducts.length} products
                </span>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm hidden md:block" style={{ color: 'var(--color-muted)' }}>
                  Sort by:
                </label>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                  className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>
                  No products found
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => setFilters({ category: 'all', price: 'all', material: 'all', sort: 'featured' })}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Star, ShoppingBag } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import { useCart } from '@/context/CartContext';

function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handlePriceChange = (priceId) => {
    setFilters(prev => ({
      ...prev,
      prices: prev.prices.includes(priceId)
        ? prev.prices.filter(p => p !== priceId)
        : [...prev.prices, priceId]
    }));
  };

  const handleMaterialChange = (material) => {
    setFilters(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material]
    }));
  };

  const clearFilters = () => {
    setFilters({ categories: [], prices: [], materials: [] });
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.prices.length > 0 || filters.materials.length > 0;

  const filterContent = (
    <>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="w-4 h-4 accent-[var(--color-gold)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold)] transition-colors">
                {category.name}
              </span>
              <span className="text-xs text-[var(--color-taupe)]">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.prices.includes(range.id)}
                onChange={() => handlePriceChange(range.id)}
                className="w-4 h-4 accent-[var(--color-gold)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold)] transition-colors">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4">Material</h3>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver'].map((material) => (
            <label key={material} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.materials.includes(material)}
                onChange={() => handleMaterialChange(material)}
                className="w-4 h-4 accent-[var(--color-gold)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold)] transition-colors">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[var(--color-gold)] hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <>
      {/* Mobile Filter Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-80 bg-[var(--color-cream)] z-50 lg:z-0 transform transition-transform duration-300 lg:transform-none overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 lg:p-0">
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h2 className="font-serif text-xl">Filters</h2>
            <button onClick={onClose} aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {filterContent}
        </div>
      </aside>
    </>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] text-xs uppercase tracking-wider font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-white"
          >
            Add to Cart
          </button>
        </div>

        <div className="text-center">
          <h3 className="product-title">{product.name}</h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
            <span className="text-xs text-[var(--color-taupe)]">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    prices: [],
    materials: []
  });
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Filter by price
    if (filters.prices.length > 0) {
      result = result.filter(p => {
        return filters.prices.some(priceId => {
          const range = priceRanges.find(r => r.id === priceId);
          return p.price >= range.min && p.price < range.max;
        });
      });
    }

    // Filter by material
    if (filters.materials.length > 0) {
      result = result.filter(p => filters.materials.includes(p.material));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="pt-8 pb-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mb-4">
            Shop All
          </h1>
          <p className="text-[var(--color-taupe)]">
            Discover our complete collection of demi-fine jewelry.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-taupe-light)]">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <span className="text-sm text-[var(--color-taupe)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--color-taupe)] hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 py-1 text-sm focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-10">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[var(--color-taupe)] mb-4">No products match your filters.</p>
                <button
                  onClick={() => setFilters({ categories: [], prices: [], materials: [] })}
                  className="text-[var(--color-gold)] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
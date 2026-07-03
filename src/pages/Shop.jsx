import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', name: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity },
];

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-velmora-ivory overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream text-velmora-charcoal text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-velmora-gold`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </span>
        </button>
      </div>

      <div className="text-center">
        <h3 className="product-name text-xs text-velmora-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-stone mb-2">{product.description}</p>
        <p className="font-medium text-velmora-charcoal">${product.price}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-mist'
              }`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by price
    const priceRange = priceRanges.find((p) => p.id === activePriceRange);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
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
        // Featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all';

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-velmora-ivory py-12 md:py-16">
        <div className="container-main text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Shop All
          </h1>
          <p className="text-velmora-stone">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="container-main py-8 md:py-12">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm text-velmora-graphite"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="text-sm text-velmora-graphite border-none bg-transparent focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-4">
                Category
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => updateFilter('category', category.id)}
                      className={`text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-stone hover:text-velmora-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-4">
                Price
              </h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      onClick={() => updateFilter('price', range.id)}
                      className={`text-sm transition-colors ${
                        activePriceRange === range.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-stone hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-stone">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm text-velmora-graphite border-none bg-transparent focus:outline-none"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Sort by: Price: Low to High</option>
                <option value="price-high">Sort by: Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-stone mb-4">
                  No products found with your current filters.
                </p>
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

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-velmora-charcoal/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-soft-lg animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-3">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          updateFilter('category', category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm transition-colors ${
                          activeCategory === category.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-stone'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-3">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => {
                          updateFilter('price', range.id);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm transition-colors ${
                          activePriceRange === range.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-stone'
                        }`}
                      >
                        {range.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="w-full btn-outline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
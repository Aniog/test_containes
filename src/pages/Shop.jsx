import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown, Star, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-sand/30 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1 bg-gold text-[10px] font-semibold tracking-[0.1em] uppercase text-charcoal">
              {product.tag}
            </span>
          </div>
        )}

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transform transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className={`w-full py-3 text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-colors ${
              isAdded ? 'bg-green-600 text-white' : 'bg-ivory text-charcoal hover:bg-gold'
            }`}
          >
            {isAdded ? 'Added to Cart!' : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand'
              }`}
            />
          ))}
          <span className="text-xs text-warm-gray ml-1">({product.reviews})</span>
        </div>

        <p className="text-sm font-semibold text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-sand pb-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between mb-3"
      >
        <span className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && children}
    </div>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryParam = searchParams.get('category') || 'all';
  const priceMin = searchParams.get('min') || 0;
  const priceMax = searchParams.get('max') || 200;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }

    // Price filter
    result = result.filter((p) => p.price >= priceMin && p.price <= priceMax);

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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryParam, priceMin, priceMax, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 0 || value === 200) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const FilterContent = () => (
    <>
      <FilterSection title="Category">
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={categoryParam === 'all'}
              onChange={() => updateFilter('category', 'all')}
              className="w-4 h-4 text-gold border-sand focus:ring-gold"
            />
            <span className="text-sm text-charcoal">All Products</span>
            <span className="text-xs text-warm-gray ml-auto">({products.length})</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={categoryParam === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="w-4 h-4 text-gold border-sand focus:ring-gold"
              />
              <span className="text-sm text-charcoal">{cat.name}</span>
              <span className="text-xs text-warm-gray ml-auto">({cat.count})</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-warm-gray">
            <span>${priceMin}</span>
            <span>${priceMax}</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceMax}
            onChange={(e) => updateFilter('max', e.target.value)}
            className="w-full h-1 bg-sand rounded-full appearance-none cursor-pointer accent-gold"
          />
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => updateFilter('min', e.target.value)}
              className="w-1/2 px-3 py-2 text-xs border border-sand focus:outline-none focus:border-gold"
            />
            <input
              type="number"
              min="0"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => updateFilter('max', e.target.value)}
              className="w-1/2 px-3 py-2 text-xs border border-sand focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Material">
        <div className="space-y-2">
          {['18K Gold Plated', 'Rose Gold', 'Silver'].map((material) => (
            <label key={material} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-gold border-sand focus:ring-gold rounded"
              />
              <span className="text-sm text-charcoal">{material}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="bg-sand/30 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Our Collection
          </h1>
          <p className="text-warm-gray max-w-md mx-auto">
            Discover our curated selection of demi-fine jewelry, crafted with intention 
            for the modern woman.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal mb-6">
                Filters
              </h2>
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-sand text-xs font-medium tracking-wide"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand">
              <p className="text-xs text-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs text-charcoal bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/60"
          onClick={() => setIsFilterOpen(false)}
        />
        <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal">
              Filters
            </h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 text-warm-gray hover:text-charcoal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
          
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full mt-6 py-3 bg-charcoal text-ivory text-xs font-semibold tracking-[0.1em] uppercase"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;

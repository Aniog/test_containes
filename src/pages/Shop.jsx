import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import { useCart } from '@/context/CartContext';

function FilterSidebar({ filters, setFilters, closeMobile }) {
  const toggleCategory = (catId) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(catId)
        ? prev.categories.filter(c => c !== catId)
        : [...prev.categories, catId],
    }));
  };

  const togglePrice = (priceId) => {
    setFilters(prev => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(priceId)
        ? prev.priceRanges.filter(p => p !== priceId)
        : [...prev.priceRanges, priceId],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Mobile close */}
      {closeMobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif text-lg tracking-wider uppercase">Filters</h3>
          <button onClick={closeMobile} className="text-charcoal-400 hover:text-charcoal-600">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Category filter */}
      <div>
        <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-charcoal-600 mb-4">
          Category
        </h4>
        <div className="space-y-3">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border border-charcoal-300 text-gold-500 focus:ring-gold-500 rounded-none"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {cat.name}
              </span>
              <span className="text-xs text-charcoal-300 ml-auto">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-charcoal-600 mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.priceRanges.includes(range.id)}
                onChange={() => togglePrice(range.id)}
                className="w-4 h-4 border border-charcoal-300 text-gold-500 focus:ring-gold-500 rounded-none"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-charcoal-600 mb-4">
          Material
        </h4>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver', 'Hypoallergenic'].map(mat => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 border border-charcoal-300 text-gold-500 focus:ring-gold-500 rounded-none"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      <button
        onClick={() => setFilters({ categories: [], priceRanges: [], materials: [] })}
        className="text-xs text-gold-600 hover:text-gold-700 tracking-wide uppercase transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-cream-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-charcoal-800 text-cream-50 text-[10px] font-medium tracking-ultra-wide uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 py-3 text-xs font-medium tracking-ultra-wide uppercase hover:bg-charcoal-900 transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-charcoal-800 hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-400">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-charcoal-700 mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    priceRanges: [],
    materials: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters(prev => ({ ...prev, categories: [cat] }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      const selectedRanges = filters.priceRanges.map(id => priceRanges.find(r => r.id === id));
      result = result.filter(p =>
        selectedRanges.some(range => p.price >= range.min && p.price < range.max)
      );
    }

    // Sort
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
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-charcoal-900 py-16 md:py-20 text-center">
        <p className="text-label text-gold-400 mb-4">Collection</p>
        <h1 className="heading-display text-cream-50">Our Jewelry</h1>
        <div className="divider-gold mx-auto mt-6" />
      </div>

      <div className="container-narrow py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <p className="text-sm text-charcoal-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-charcoal-600 pr-8 py-2 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-400 mb-4">No pieces found</p>
                <p className="text-sm text-charcoal-300">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-950/50" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream-50 p-6 overflow-y-auto transform transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            closeMobile={() => setMobileFilterOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

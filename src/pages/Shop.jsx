import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { products, categories } from '../data/products';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-cream-200 aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[${product.id}-shop-name] gold jewelry elegant dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover product-img-zoom"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-800 text-cream-50 text-2xs tracking-widest-xl uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold');
            }}
            className="w-full py-2.5 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 text-2xs tracking-widest-xl uppercase font-medium hover:bg-charcoal-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <p
          id={`${product.id}-shop-name`}
          className="font-serif text-sm tracking-widest-xl uppercase text-charcoal-800 mb-1"
        >
          {product.name}
        </p>
        <p className="text-sm text-charcoal-500">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
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
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrice, sortBy]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSortBy('featured');
  };

  const hasFilters = selectedCategories.length > 0 || selectedPrice !== null;

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-cream-50">
      {/* Header */}
      <div className="bg-cream-100 py-12 md:py-16 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">Discover</p>
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal-800" style={{ fontWeight: 400 }}>
          Our Collection
        </h1>
        <div className="hairline max-w-24 mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-600 hover:text-charcoal-800 transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-charcoal-400 hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-charcoal-400 hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs tracking-wider uppercase text-charcoal-600 bg-transparent border border-charcoal-200 px-3 py-2 focus:outline-none focus:border-gold-500 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`md:block w-56 flex-shrink-0 ${showFilters ? 'fixed inset-0 z-40 bg-cream-50 p-6 overflow-auto md:relative md:p-0 md:bg-transparent' : 'hidden'}`}>
            {showFilters && (
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Category filter */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest-xl uppercase text-charcoal-800 mb-4 font-medium">Category</h4>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-4 h-4 border-charcoal-300 text-gold-500 focus:ring-gold-400 cursor-pointer accent-gold-500"
                    />
                    <span className="text-sm text-charcoal-500 group-hover:text-charcoal-800 transition-colors">
                      {cat.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest-xl uppercase text-charcoal-800 mb-4 font-medium">Price</h4>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === range.id}
                      onChange={() => setSelectedPrice(range.id)}
                      className="w-4 h-4 border-charcoal-300 text-gold-500 focus:ring-gold-400 cursor-pointer accent-gold-500"
                    />
                    <span className="text-sm text-charcoal-500 group-hover:text-charcoal-800 transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest-xl uppercase text-charcoal-800 mb-4 font-medium">Material</h4>
              <p className="text-sm text-charcoal-400">All pieces are 18K gold plated</p>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs tracking-wider uppercase text-gold-600 hover:text-gold-700 transition-colors underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500 mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest-xl uppercase text-gold-600 hover:text-gold-700 transition-colors underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

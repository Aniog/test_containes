import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60to100', label: '$60 – $100', min: 60, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants?.[0] || null, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-accent-light overflow-hidden rounded-sm mb-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-6xl text-velmora-accent/20 uppercase tracking-wider">
            {product.name.charAt(0)}
          </span>
        </div>
        <div
          className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-5 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="bg-white text-velmora-text px-5 py-2 text-xs uppercase tracking-widest font-sans font-medium hover:bg-velmora-accent hover:text-white transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="product-name text-xs mb-1 group-hover:text-velmora-accent transition-colors truncate">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-velmora-accent text-velmora-accent" />
        <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
      </div>
      <p className="font-sans text-sm font-medium">${product.price}</p>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.id === selectedPrice);
    if (priceRange && selectedPrice !== 'all') {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
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
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + (selectedPrice !== 'all' ? 1 : 0);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.id}
              onClick={() => setSelectedPrice(range.id)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                selectedPrice === range.id ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      {activeFiltersCount > 0 && (
        <button
          onClick={() => {
            setSelectedCategory('all');
            setSelectedPrice('all');
            searchParams.delete('category');
            setSearchParams(searchParams);
          }}
          className="text-xs uppercase tracking-widest text-velmora-muted underline hover:text-velmora-text transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="section-title mb-2">Shop All</h1>
          <p className="font-sans text-sm text-velmora-muted">{filteredProducts.length} pieces</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-velmora-divider">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          {/* Sort — desktop */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <span className="font-sans text-xs uppercase tracking-widest text-velmora-muted">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm text-velmora-text bg-transparent border border-velmora-divider px-3 py-2 focus:outline-none focus:border-velmora-accent"
            >
              {sortOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Sort — mobile */}
          <div className="md:hidden">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-velmora-text bg-transparent border border-velmora-divider px-2 py-1.5 focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted mb-4">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-base z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}

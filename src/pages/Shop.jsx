import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown, Gem } from 'lucide-react';
import { products, categories, priceRanges, materials } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial);
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
  }, [selectedCategories, selectedPriceRange, selectedMaterial, sortBy]);

  const toggleCategory = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
    setSortBy('featured');
  };

  const hasFilters = selectedCategories.length > 0 || selectedPriceRange || selectedMaterial;

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold rounded-none accent-velmora-gold"
              />
              <span className="font-sans text-sm text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {cat.name}
              </span>
              <span className="font-sans text-xs text-velmora-soft-gray ml-auto">
                ({cat.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.id}
                onChange={() => setSelectedPriceRange(
                  selectedPriceRange === range.id ? null : range.id
                )}
                className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold accent-velmora-gold"
              />
              <span className="font-sans text-sm text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materials.map(mat => (
            <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat.id}
                onChange={() => setSelectedMaterial(
                  selectedMaterial === mat.id ? null : mat.id
                )}
                className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold accent-velmora-gold"
              />
              <span className="font-sans text-sm text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav className="flex items-center gap-2 font-sans text-xs text-velmora-warm-gray mb-6">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">Shop</span>
        </nav>
        <h1 className="section-heading text-3xl md:text-4xl">Our Collection</h1>
        <p className="font-sans text-sm text-velmora-warm-gray mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-velmora-warm-gray hidden sm:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-sans text-xs tracking-wide text-velmora-charcoal pr-6 py-1.5 pl-2 border border-velmora-sand focus:outline-none focus:border-velmora-gold cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-velmora-warm-gray absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map(catId => {
                  const cat = categories.find(c => c.id === catId);
                  return (
                    <button
                      key={catId}
                      onClick={() => toggleCategory(catId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-cream font-sans text-xs text-velmora-charcoal"
                    >
                      {cat?.name}
                      <X className="w-3 h-3" />
                    </button>
                  );
                })}
                {selectedPriceRange && (
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-cream font-sans text-xs text-velmora-charcoal"
                  >
                    {priceRanges.find(r => r.id === selectedPriceRange)?.label}
                    <X className="w-3 h-3" />
                  </button>
                )}
                {selectedMaterial && (
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-cream font-sans text-xs text-velmora-charcoal"
                  >
                    {materials.find(m => m.id === selectedMaterial)?.label}
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Gem className="w-12 h-12 text-velmora-sand mx-auto mb-4" />
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-velmora-warm-gray mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-charcoal/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileFiltersOpen(false)}>
          <div
            className="absolute top-0 left-0 bottom-0 w-80 bg-velmora-ivory shadow-xl p-6 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-wide text-velmora-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-charcoal" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden mb-3">
          <div className="absolute inset-0 bg-gradient-to-br from-velmora-sand via-velmora-cream to-velmora-sand" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-velmora-gold/20 to-velmora-gold/5 flex items-center justify-center">
              <Gem className="w-8 h-8 md:w-10 md:h-10 text-velmora-gold/40" />
            </div>
          </div>
          <div className={`absolute inset-0 bg-velmora-charcoal/10 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold');
            }}
            className={`absolute bottom-3 left-3 right-3 bg-velmora-charcoal text-white py-2.5 font-sans text-xs tracking-ultra-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm md:text-base">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
            />
          ))}
          <span className="font-sans text-xs text-velmora-warm-gray ml-1">({product.reviewCount})</span>
        </div>
        <p className="price-text text-sm mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const activeCategory = searchParams.get('category') || 'All';
  const [filterCategory, setFilterCategory] = useState(activeCategory);
  const [filterMaterial, setFilterMaterial] = useState('All');
  const [filterPrice, setFilterPrice] = useState(0);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filterCategory !== 'All') {
      result = result.filter((p) => p.category === filterCategory);
    }
    if (filterMaterial !== 'All') {
      result = result.filter((p) => p.material === filterMaterial);
    }
    const range = priceRanges[filterPrice];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

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
  }, [filterCategory, filterMaterial, filterPrice, sortBy]);

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const clearFilters = () => {
    setFilterCategory('All');
    setFilterMaterial('All');
    setFilterPrice(0);
    setSearchParams({});
  };

  const hasActiveFilters = filterCategory !== 'All' || filterMaterial !== 'All' || filterPrice !== 0;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-sm tracking-wider mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilterCategory(cat);
                if (cat === 'All') {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: cat });
                }
              }}
              className={`block text-xs tracking-wider transition-colors ${
                filterCategory === cat ? 'text-espresso font-medium' : 'text-muted hover:text-espresso'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-sm tracking-wider mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilterMaterial(mat)}
              className={`block text-xs tracking-wider transition-colors ${
                filterMaterial === mat ? 'text-espresso font-medium' : 'text-muted hover:text-espresso'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-sm tracking-wider mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setFilterPrice(i)}
              className={`block text-xs tracking-wider transition-colors ${
                filterPrice === i ? 'text-espresso font-medium' : 'text-muted hover:text-espresso'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold hover:text-gold-dark transition-colors tracking-wider"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Explore</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso">
            {filterCategory !== 'All' ? filterCategory : 'All Jewelry'}
          </h1>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs tracking-wider text-muted hover:text-espresso transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>
                <span className="text-xs text-muted-light">{filteredProducts.length} products</span>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider text-espresso pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-sm">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-xs text-gold hover:text-gold-dark tracking-wider">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4 rounded-sm">
                      <div
                        className="w-full h-full"
                        style={{
                          background: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
                        }}
                      >
                        <div
                          className="w-full h-full"
                          style={{
                            background: 'radial-gradient(ellipse at 50% 40%, rgba(196, 162, 101, 0.25) 0%, transparent 70%)',
                          }}
                        />
                      </div>

                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-cream/90 text-espresso text-[10px] px-2 py-1 tracking-wider uppercase font-medium">
                          {product.badge}
                        </span>
                      )}

                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={(e) => handleAdd(e, product)}
                          className={`p-2.5 rounded-full shadow-lg transition-all duration-300 ${
                            addedId === product.id ? 'bg-gold text-cream' : 'bg-cream text-espresso hover:bg-gold hover:text-cream'
                          }`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-espresso mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-muted-light text-muted-light'}`}
                        />
                      ))}
                      <span className="text-[10px] text-muted ml-1">({product.reviewCount})</span>
                    </div>
                    <p className="font-sans text-sm font-medium text-espresso">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl animate-slide-in-left">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-serif text-lg tracking-wider">Filters</span>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto h-[calc(100%-57px)]">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-brand-ivory rounded-sm">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[88px] right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-4 text-center">
        <h3 className="text-xs tracking-product uppercase font-serif text-brand-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-sans text-brand-muted">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 – $80', min: 50, max: 80 },
    { label: '$80+', min: 80, max: Infinity },
  ];
  const [priceRange, setPriceRange] = useState(priceRanges[0]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, priceRange, sort]);

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-3 text-sm text-brand-muted font-sans">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.08]">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (cat === 'all') {
                    searchParams.delete('category');
                  } else {
                    searchParams.set('category', cat);
                  }
                  setSearchParams(searchParams);
                }}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase font-sans rounded-full border transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-charcoal text-white border-brand-charcoal'
                    : 'border-black/15 text-brand-charcoal hover:border-brand-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs tracking-wider uppercase font-sans text-brand-charcoal bg-transparent border border-black/15 rounded-sm px-3 py-1.5 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs tracking-wider uppercase font-sans text-brand-muted mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range)}
                    className={`block text-sm font-sans transition-colors ${
                      priceRange.label === range.label
                        ? 'text-brand-charcoal font-medium'
                        : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-brand-muted">No products found</p>
                <button
                  onClick={() => {
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                    setPriceRange(priceRanges[0]);
                  }}
                  className="mt-4 text-sm text-brand-gold hover:underline font-sans"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {showFilters && (
          <>
            <div className="fixed inset-0 bg-black/40 z-[60] md:hidden" onClick={() => setShowFilters(false)} />
            <div className="fixed bottom-0 left-0 right-0 bg-brand-cream z-[70] md:hidden rounded-t-xl p-6 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-xs tracking-wider uppercase font-sans text-brand-muted mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        if (cat === 'all') {
                          searchParams.delete('category');
                        } else {
                          searchParams.set('category', cat);
                        }
                        setSearchParams(searchParams);
                      }}
                      className={`px-4 py-1.5 text-xs tracking-wider uppercase font-sans rounded-full border transition-colors ${
                        activeCategory === cat
                          ? 'bg-brand-charcoal text-white border-brand-charcoal'
                          : 'border-black/15 text-brand-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-wider uppercase font-sans text-brand-muted mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(range)}
                      className={`block text-sm font-sans transition-colors ${
                        priceRange.label === range.label
                          ? 'text-brand-charcoal font-medium'
                          : 'text-brand-muted'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addItem, openCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

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

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0].src,
    });
    openCart();
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(null);
  };

  const hasFilters = selectedCategory !== 'all' || selectedPrice !== null;

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-4">Category</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`block text-sm py-1 transition-colors ${
                selectedCategory === cat.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === range.label ? null : range.label)}
              className={`block text-sm py-1 transition-colors ${
                selectedPrice === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-muted hover:text-velmora-base underline underline-offset-4 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 lg:pt-24 bg-velmora-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">
            Collections
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide">Shop All</h1>
        </div>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>

          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-base hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter & Sort
              {hasFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
              )}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-transparent border border-velmora-border px-3 py-2 focus:outline-none focus:border-velmora-base"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Desktop sort */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <p className="text-xs text-velmora-muted">{filteredProducts.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-transparent border border-velmora-border px-3 py-2 focus:outline-none focus:border-velmora-base"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Product grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-widest uppercase text-velmora-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-velmora-base overflow-hidden">
                      <img
                        src={product.images[0].src}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-0 left-0 right-0 bg-velmora-base/90 backdrop-blur-sm text-white py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Quick Add
                      </button>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-serif text-sm tracking-wider uppercase">{product.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'fill-velmora-gold text-velmora-gold'
                                : 'text-velmora-border'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="font-sans text-sm mt-1">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-surface z-50 lg:hidden p-6 rounded-t-2xl shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl tracking-wide">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full mt-8 bg-velmora-base text-white py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold transition-colors"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </>
      )}
    </main>
  );
}
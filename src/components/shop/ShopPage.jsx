import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem, openCart } = useCart();

  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
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
  }, [activeCategory, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-charcoal font-medium mb-4">Category</h3>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Earrings', value: 'earrings' },
            { label: 'Necklaces', value: 'necklaces' },
            { label: 'Huggies', value: 'huggies' },
          ].map((c) => (
            <button
              key={c.value}
              onClick={() => updateFilter('category', c.value)}
              className={`block text-sm transition-colors ${
                activeCategory === c.value
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-charcoal font-medium mb-4">Material</h3>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: '18K Gold Plated', value: 'gold' },
          ].map((m) => (
            <button
              key={m.value}
              onClick={() => updateFilter('material', m.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === m.value
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price range info */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-charcoal font-medium mb-4">Price Range</h3>
        <p className="text-sm text-velmora-stone">$30 – $120</p>
      </div>
    </div>
  );

  return (
    <main className="pt-24 md:pt-32 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Page header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-stone mb-4">
            <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-velmora-charcoal">Shop</span>
          </div>
          <h1 className="heading-lg text-velmora-charcoal">
            {activeCategory !== 'all'
              ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
              : 'All Jewelry'}
          </h1>
        </div>

        <div className="flex gap-12 lg:gap-16">
          {/* Desktop filters */}
          <aside className="hidden md:block w-48 lg:w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-border">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-charcoal"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <p className="text-xs text-velmora-stone hidden md:block">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-[11px] tracking-wider uppercase text-velmora-stone hidden md:inline">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs tracking-wider uppercase bg-transparent border-none outline-none text-velmora-charcoal cursor-pointer pr-6 appearance-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-stone">No products found for this filter.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} addItem={addItem} openCart={openCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-velmora-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </main>
  );
}

function ShopProductCard({ product, addItem, openCart }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: 'gold',
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square bg-velmora-sand overflow-hidden mb-4">
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/5" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-gradient-to-tl from-velmora-gold/30 to-velmora-charcoal/5" />
        </div>
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 z-10 py-2.5 text-center text-[11px] tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-green-700 text-white'
              : 'bg-velmora-charcoal/90 text-white opacity-0 group-hover:opacity-100 hover:bg-velmora-charcoal'
          }`}
        >
          {added ? 'Added ✓' : 'Add to Bag'}
        </button>
      </div>
      <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-charcoal leading-tight">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(product.rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-mist/30'
            }`}
          />
        ))}
        <span className="text-[11px] text-velmora-stone ml-1">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-velmora-charcoal mt-1">${product.price}</p>
    </Link>
  );
}

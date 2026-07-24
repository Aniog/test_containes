import React from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75to100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over100', label: '$100+', min: 100, max: Infinity },
];

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Silver Tone' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name-asc', label: 'Name: A-Z' },
];

export default function Shop() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [activePrice, setActivePrice] = React.useState('all');
  const [activeMaterial, setActiveMaterial] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  // Filter and sort
  const filtered = React.useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      const range = priceRanges.find((r) => r.id === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
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
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const clearFilters = () => {
    setActiveCategory('all');
    setActivePrice('all');
    setActiveMaterial('all');
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-[#1A1A1A] mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-[#C79A5E] font-medium'
                  : 'text-[#6B6358] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-[#1A1A1A] mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setActivePrice(range.id)}
              className={`block text-sm transition-colors ${
                activePrice === range.id
                  ? 'text-[#C79A5E] font-medium'
                  : 'text-[#6B6358] hover:text-[#1A1A1A]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-[#1A1A1A] mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setActiveMaterial(mat.id)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.id
                  ? 'text-[#C79A5E] font-medium'
                  : 'text-[#6B6358] hover:text-[#1A1A1A]'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.12em] text-[#C79A5E] hover:text-[#B8894D] transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-24 md:pt-28">
      <div className="max-w-8xl mx-auto px-6">
        {/* Page Header */}
        <div className="pb-8 border-b border-[#E8E2D8]">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">Shop</h1>
          <p className="text-[#6B6358] text-sm mt-2">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>

        <div className="flex gap-8 mt-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#6B6358] hover:text-[#1A1A1A] transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs text-[#9C9488] uppercase tracking-[0.08em]">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs uppercase tracking-[0.08em] text-[#1A1A1A] bg-transparent border border-[#E8E2D8] px-3 py-2 focus:outline-none focus:border-[#C79A5E]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B6358]">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="btn-ghost mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[4/5] bg-[#F0EBE4] overflow-hidden mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <h3 className="product-name text-xs md:text-sm truncate">
                      <Link to={`/product/${product.id}`} className="hover:text-[#C79A5E] transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#1A1A1A] mt-1 font-medium">{formatPrice(product.price)}</p>
                    <button
                      onClick={() => addItem(product)}
                      className="btn-primary w-full text-center mt-3"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-[#FAF7F2] shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E2D8]">
              <span className="text-xs uppercase tracking-[0.12em] font-medium">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
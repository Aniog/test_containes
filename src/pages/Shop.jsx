import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const { addItem, setDrawer } = useCart();

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      list = list.filter((p) => p.price >= min && p.price <= max);
    }
    if (material !== 'all') {
      list = list.filter((p) => p.material === material);
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, priceRange, material, sortBy]);

  const handleAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold',
      image: product.images[0],
      qty: 1,
    });
    setDrawer(true);
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setPriceRange('all');
    setMaterial('all');
  };

  const hasFilters = activeCategory !== 'all' || priceRange !== 'all' || material !== 'all';

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-paper min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide">Shop All</h1>
            <p className="mt-1 text-sm text-ink-500">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="md:hidden inline-flex items-center gap-2 border border-ink-200 px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-ink-200 px-4 py-2 pr-8 text-xs font-medium tracking-wide rounded-sm focus:outline-none focus:ring-1 focus:ring-ink-300"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-ink-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside
            className={`md:w-60 shrink-0 space-y-6 ${
              showFilters ? 'block' : 'hidden md:block'
            }`}
          >
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-ink-500 hover:text-ink-800 underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3">Category</h4>
              <div className="space-y-2">
                {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={c}
                      checked={activeCategory === c}
                      onChange={() => setActiveCategory(c)}
                      className="accent-brand-700"
                    />
                    <span className="capitalize">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-ink-100 pt-6">
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3">Price</h4>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All' },
                  { value: '0-40', label: 'Under $40' },
                  { value: '40-60', label: '$40 – $60' },
                  { value: '60-120', label: '$60 – $120' },
                ].map((p) => (
                  <label key={p.value} className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value={p.value}
                      checked={priceRange === p.value}
                      onChange={() => setPriceRange(p.value)}
                      className="accent-brand-700"
                    />
                    {p.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-ink-100 pt-6">
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3">Material</h4>
              <div className="space-y-2">
                {['all', 'gold', 'silver'].map((m) => (
                  <label key={m} className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      value={m}
                      checked={material === m}
                      onChange={() => setMaterial(m)}
                      className="accent-brand-700"
                    />
                    <span className="capitalize">{m}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-500 text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs font-medium underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-ink-100 overflow-hidden rounded-sm">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAdd(product);
                          }}
                          className="absolute bottom-3 right-3 w-9 h-9 bg-white text-ink-950 rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-ink-50"
                          aria-label="Add to cart"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-3 text-center">
                        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-ink-950">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-ink-600">${product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

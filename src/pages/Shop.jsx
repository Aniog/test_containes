import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { fetchProducts } from '@/api/products';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated', 'Sterling Silver'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [activePrice, setActivePrice] = useState('All');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    let mounted = true;
    setStatus('loading');
    fetchProducts()
      .then((data) => { if (mounted) { setProducts(data); setStatus('ready'); } })
      .catch(() => { if (mounted) setStatus('error'); });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') {
      list = list.filter((p) => (p.data?.category || p.category) === activeCategory);
    }
    if (activeMaterial !== 'All') {
      list = list.filter((p) => (p.data?.material || p.material) === activeMaterial);
    }
    const priceRange = priceRanges.find((r) => r.label === activePrice);
    if (priceRange) {
      list = list.filter((p) => {
        const price = p.data?.price ?? p.price ?? 0;
        return price >= priceRange.min && price < priceRange.max;
      });
    }
    if (sort === 'price-asc') {
      list.sort((a, b) => (a.data?.price ?? a.price) - (b.data?.price ?? b.price));
    } else if (sort === 'price-desc') {
      list.sort((a, b) => (b.data?.price ?? b.price) - (a.data?.price ?? a.price));
    } else if (sort === 'rating') {
      list.sort((a, b) => ((b.data?.rating ?? b.rating) || 0) - ((a.data?.rating ?? a.rating) || 0));
    }
    return list;
  }, [products, activeCategory, activeMaterial, activePrice, sort]);

  const clearFilters = () => {
    setActiveCategory('All');
    setActiveMaterial('All');
    setActivePrice('All');
    setSort('featured');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark">Shop All</h1>
          <p className="mt-2 text-sm text-velmora-muted">Discover our curated collection of demi-fine jewelry.</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            className="md:hidden flex items-center gap-2 text-sm font-medium text-velmora-dark"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <span className="text-xs text-velmora-muted">{filtered.length} products</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border pl-3 pr-8 py-2 text-xs font-medium text-velmora-dark focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-muted" />
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`block text-sm ${activeCategory === c ? 'text-velmora-dark font-medium' : 'text-velmora-muted hover:text-velmora-dark'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveMaterial(m)}
                    className={`block text-sm ${activeMaterial === m ? 'text-velmora-dark font-medium' : 'text-velmora-muted hover:text-velmora-dark'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setActivePrice(r.label)}
                    className={`block text-sm ${activePrice === r.label ? 'text-velmora-dark font-medium' : 'text-velmora-muted hover:text-velmora-dark'}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            {(activeCategory !== 'All' || activeMaterial !== 'All' || activePrice !== 'All') && (
              <button
                onClick={clearFilters}
                className="text-xs font-medium tracking-widest uppercase text-velmora-accent underline"
              >
                Clear All
              </button>
            )}
          </aside>

          <div className="flex-1">
            {status === 'loading' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-velmora-bg" />
                    <div className="mt-3 h-4 w-2/3 bg-velmora-bg" />
                    <div className="mt-2 h-3 w-1/3 bg-velmora-bg" />
                  </div>
                ))}
              </div>
            )}
            {status === 'ready' && filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-dark">No products found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-medium tracking-widest uppercase text-velmora-accent underline"
                >
                  Clear filters
                </button>
              </div>
            )}
            {status === 'ready' && filtered.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-velmora-border">
            <h2 className="font-serif text-lg tracking-widest">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-3 py-1.5 text-xs border ${activeCategory === c ? 'border-velmora-dark bg-velmora-dark text-white' : 'border-velmora-border text-velmora-dark'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-3">Material</h3>
              <div className="flex flex-wrap gap-2">
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveMaterial(m)}
                    className={`px-3 py-1.5 text-xs border ${activeMaterial === m ? 'border-velmora-dark bg-velmora-dark text-white' : 'border-velmora-border text-velmora-dark'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-dark mb-3">Price</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setActivePrice(r.label)}
                    className={`px-3 py-1.5 text-xs border ${activePrice === r.label ? 'border-velmora-dark bg-velmora-dark text-white' : 'border-velmora-border text-velmora-dark'}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => { clearFilters(); setMobileFiltersOpen(false); }}
              className="w-full border border-velmora-dark py-3 text-sm font-medium tracking-widest uppercase"
            >
              Clear All
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-velmora-dark py-3 text-sm font-medium tracking-widest uppercase text-white"
            >
              Show {filtered.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

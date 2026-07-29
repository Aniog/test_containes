import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProducts } from '../api/products.js';
import ProductCard from '../components/shop/ProductCard.jsx';

const CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'nudibranch', label: 'Nudibranchs' },
  { value: 'aeolid', label: 'Aeolids' },
  { value: 'dorid', label: 'Dorids' },
  { value: 'sea-hare', label: 'Sea Hares' },
  { value: 'sacoglossan', label: 'Sacoglossans' },
  { value: 'care-kit', label: 'Care Kits' },
  { value: 'food', label: 'Food & Supplies' },
  { value: 'accessories', label: 'Accessories' },
];

const SORT_OPTIONS = [
  { value: 'name', label: 'Name A–Z' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';

  useEffect(() => {
    setLoading(true);
    fetchProducts({ category: category === 'all' ? null : category, search, sort })
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category, sort, search]);

  useEffect(() => {
    if (!loading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, products]);

  const setCategory = (val) => {
    const p = new URLSearchParams(searchParams);
    if (val === 'all') p.delete('category'); else p.set('category', val);
    setSearchParams(p);
  };

  const setSort = (val) => {
    const p = new URLSearchParams(searchParams);
    p.set('sort', val);
    setSearchParams(p);
  };

  return (
    <div className="bg-seafoam min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border-ocean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl font-extrabold text-navy mb-2">The Shop</h1>
          <p className="text-slate-text text-lg">Rare and exotic sea slugs, ethically sourced</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
            <input
              type="text"
              placeholder="Search species..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-ocean bg-white text-navy placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-teal-ocean/30 text-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-slate-text">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-muted-text flex-shrink-0" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-border-ocean rounded-xl px-3 py-2.5 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal-ocean/30"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                category === cat.value
                  ? 'bg-teal-ocean text-white'
                  : 'bg-white text-slate-text border border-border-ocean hover:border-teal-ocean hover:text-teal-ocean'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-sm text-muted-text mb-6">
            {products.length} {products.length === 1 ? 'product' : 'products'} found
          </p>
        )}

        {/* Grid */}
        <div ref={containerRef}>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-80 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-navy mb-2">No products found</h3>
              <p className="text-slate-text">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

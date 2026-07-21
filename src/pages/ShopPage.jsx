import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [sort, setSort] = useState('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (sort) {
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
  }, [activeCategory, activeMaterial, sort]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleQuickAdd = (product) => {
    addItem(product, 'gold', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const Filters = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-midnight-900 font-sans mb-4">Category</h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            ...categories.map((c) => ({ label: c.name, value: c.id })),
            { label: 'Gift Sets', value: 'sets' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter('category', cat.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                activeCategory === cat.value
                  ? 'text-midnight-900 font-medium'
                  : 'text-pearl-600 hover:text-midnight-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-midnight-900 font-sans mb-4">Material</h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: '18K Gold', value: 'gold' },
            { label: 'Sterling Silver', value: 'silver' },
          ].map((mat) => (
            <button
              key={mat.value}
              onClick={() => setFilter('material', mat.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                activeMaterial === mat.value
                  ? 'text-midnight-900 font-medium'
                  : 'text-pearl-600 hover:text-midnight-800'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-midnight-900 font-sans mb-4">Price Range</h4>
        <p className="text-sm text-pearl-600 font-sans">$30 — $120</p>
      </div>
    </div>
  );

  return (
    <main className="pt-8 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-midnight-900 tracking-wide">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-pearl-600 mt-2 font-sans">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <Filters />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 hairline-b">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-midnight-800 font-sans"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <div className="hidden md:block" />
              <div className="flex items-center gap-3">
                <label className="text-xs text-pearl-600 font-sans">Sort by</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs font-sans text-midnight-800 bg-transparent border border-pearl-200 rounded-sm px-3 py-2 focus:outline-none focus:border-midnight-400"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-pearl-500 font-sans">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                  }}
                  className="btn-outline mt-4 inline-block text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] bg-pearl-100 rounded-sm overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-midnight-950/0 group-hover:bg-midnight-950/10 transition-all duration-500" />
                      </div>
                    </Link>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="absolute bottom-3 right-3 w-9 h-9 bg-cream-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-cream-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                      aria-label="Quick add to cart"
                    >
                      <ShoppingBag className="w-4 h-4 text-midnight-900" />
                    </button>
                    <div className="mt-3 text-center">
                      <h3 className="product-name text-xs md:text-sm">{product.name}</h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-brand-500 text-brand-500" />
                        <span className="text-[10px] text-pearl-600">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium text-midnight-900 mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-midnight-950/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div
            className={`absolute top-0 left-0 h-full w-72 bg-cream-50 shadow-xl transition-transform duration-300 ${
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs tracking-widest uppercase text-midnight-900 font-sans">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1"
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
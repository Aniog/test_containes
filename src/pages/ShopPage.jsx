import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Footer from '@/components/layout/Footer';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand">
          <img
            src={product.gridImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
          />
          <img
            src={product.hoverImage}
            alt={`${product.name} hover`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          />

          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-xs tracking-wider uppercase font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-product-name text-sm text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-soft-brown mt-1">{product.subtitle}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star size={12} fill="#C9A96E" strokeWidth={0} className="text-brand-gold" />
          <span className="text-xs text-brand-mid-brown">{product.rating}</span>
          <span className="text-xs text-brand-soft-brown">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-lg text-brand-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategoryFilter(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material === materialFilter);
    }
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [categoryFilter, materialFilter, priceRange, sortBy]);

  const activeFilters = [categoryFilter, materialFilter, priceRange].filter(f => f !== 'all').length;

  const clearFilters = () => {
    setCategoryFilter('all');
    setMaterialFilter('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const FilterPanel = ({ className = '' }) => (
    <div className={className}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {[{ id: 'all', name: 'All' }, ...categories].map(cat => (
            <button
              key={cat.id}
              onClick={() => { setCategoryFilter(cat.id); if (cat.id !== 'all') setSearchParams({ category: cat.id }); else setSearchParams({}); }}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                categoryFilter === cat.id ? 'text-brand-gold font-medium' : 'text-brand-mid-brown hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { id: 'all', name: 'All Prices' },
            { id: 'under50', name: 'Under $50' },
            { id: '50to80', name: '$50 - $80' },
            { id: 'over80', name: 'Over $80' },
          ].map(range => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === range.id ? 'text-brand-gold font-medium' : 'text-brand-mid-brown hover:text-brand-charcoal'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {[
            { id: 'all', name: 'All Materials' },
            { id: 'gold', name: '18K Gold Plated' },
            { id: 'silver', name: 'Sterling Silver' },
          ].map(mat => (
            <button
              key={mat.id}
              onClick={() => setMaterialFilter(mat.id)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                materialFilter === mat.id ? 'text-brand-gold font-medium' : 'text-brand-mid-brown hover:text-brand-charcoal'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>

      {activeFilters > 0 && (
        <button onClick={clearFilters} className="mt-8 text-xs text-brand-gold underline hover:text-brand-gold-dark transition-colors">
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef}>
      {/* Header */}
      <div className="pt-20 lg:pt-24 pb-8 section-padding">
        <div className="text-center">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">Collection</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-charcoal">
            {categoryFilter !== 'all' ? categories.find(c => c.id === categoryFilter)?.name || 'Shop' : 'Shop All'}
          </h1>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>
      </div>

      <div className="section-padding pb-16 lg:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-brand-mid-brown hover:text-brand-charcoal transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span className="tracking-wider uppercase text-xs">Filters</span>
            {activeFilters > 0 && (
              <span className="w-5 h-5 bg-brand-gold text-white text-[10px] rounded-full flex items-center justify-center">{activeFilters}</span>
            )}
          </button>
          <p className="hidden lg:block text-sm text-brand-soft-brown">{filtered.length} products</p>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="text-sm text-brand-mid-brown bg-transparent border border-brand-warmgray/40 px-4 py-2 focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <FilterPanel />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No products found</p>
                <p className="text-sm text-brand-soft-brown mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
        <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-brand-cream shadow-xl transition-transform duration-300 ${filterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-brand-warmgray/30">
            <h2 className="font-serif text-xl">Filters</h2>
            <button onClick={() => setFilterOpen(false)} className="p-1" aria-label="Close filters">
              <X size={20} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
            <FilterPanel />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

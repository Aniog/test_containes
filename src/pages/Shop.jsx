import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [filterOpen, setFilterOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  let filtered = [...products];

  if (categoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
  } else if (priceRange === 'over80') {
    filtered = filtered.filter(p => p.price > 80);
  }

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortBy, priceRange]);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">The Collection</h1>
          <p className="mt-3 font-sans text-sm text-brand-muted">Timeless pieces for every occasion</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal bg-transparent border-none cursor-pointer hover:text-brand-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <span className="font-sans text-xs text-brand-muted">{filtered.length} pieces</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wide bg-transparent border border-brand-sand px-3 py-2 text-brand-charcoal cursor-pointer focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="md:sticky md:top-28 space-y-8">
              {/* Mobile close */}
              <div className="flex items-center justify-between md:hidden">
                <span className="font-sans text-sm font-medium text-brand-charcoal">Filters</span>
                <button onClick={() => setFilterOpen(false)} className="p-1 bg-transparent border-none cursor-pointer">
                  <X className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wide-xl text-brand-muted mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                        categoryFilter === cat ? 'text-brand-gold font-medium' : 'text-brand-graphite hover:text-brand-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wide-xl text-brand-muted mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                        priceRange === opt.value ? 'text-brand-gold font-medium' : 'text-brand-graphite hover:text-brand-charcoal'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wide-xl text-brand-muted mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block font-sans text-sm text-brand-graphite py-1.5">18K Gold Plated</span>
                  <span className="block font-sans text-sm text-brand-graphite py-1.5">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-charcoal">No pieces match your filters</p>
                <button
                  onClick={() => { setCategoryFilter('all'); setPriceRange('all'); }}
                  className="mt-4 font-sans text-sm text-brand-gold underline bg-transparent border-none cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block no-underline">
                      <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory">
                        <img
                          data-strk-img-id={`shop-${product.id}-p1q2r3`}
                          data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <div className="pt-4 flex items-start justify-between gap-2">
                      <div>
                        <h3 id={`shop-${product.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
                          {product.name}
                        </h3>
                        <p className="mt-1 font-sans text-sm text-brand-muted">${product.price}</p>
                      </div>
                      <button
                        onClick={() => addItem(product)}
                        className="flex-shrink-0 px-3 py-1.5 border border-brand-sand text-brand-charcoal font-sans text-[10px] uppercase tracking-wide-xl bg-transparent hover:border-brand-gold hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy, priceRange]);

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
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

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">The Collection</h1>
          <p className="mt-3 text-sm text-stone font-sans">Timeless pieces for every occasion</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm font-sans text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-6">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-sm font-sans font-medium uppercase tracking-wide transition-colors ${
                  selectedCategory === cat.value ? 'text-gold' : 'text-stone hover:text-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-sans text-charcoal bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="mb-8">
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(pr => (
                  <button
                    key={pr.value}
                    onClick={() => setPriceRange(pr.value)}
                    className={`block text-sm font-sans transition-colors ${
                      priceRange === pr.value ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    {pr.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">Material</h3>
              <div className="space-y-2">
                <span className="block text-sm font-sans text-gold font-medium">18K Gold Plated</span>
                <span className="block text-sm font-sans text-stone">Sterling Silver</span>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Panel */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 bg-ivory md:hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-sand">
                <h2 className="font-serif text-lg text-charcoal">Filters</h2>
                <button onClick={() => setFilterOpen(false)} className="text-charcoal">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-8">
                <div>
                  <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => { setSelectedCategory(cat.value); setFilterOpen(false); }}
                        className={`block text-sm font-sans ${selectedCategory === cat.value ? 'text-gold font-medium' : 'text-stone'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map(pr => (
                      <button
                        key={pr.value}
                        onClick={() => { setPriceRange(pr.value); setFilterOpen(false); }}
                        className={`block text-sm font-sans ${priceRange === pr.value ? 'text-gold font-medium' : 'text-stone'}`}
                      >
                        {pr.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-stone font-sans">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
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

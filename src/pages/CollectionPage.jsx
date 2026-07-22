import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  // Filter products
  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (selectedPrice !== 'all') {
      if (selectedPrice === 'under50' && p.price >= 50) return false;
      if (selectedPrice === '50to75' && (p.price < 50 || p.price > 75)) return false;
      if (selectedPrice === 'over75' && p.price <= 75) return false;
    }
    if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
    return true;
  });

  // Sort products
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: 'over75', label: 'Over $75' },
  ];

  const materialOptions = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'name', label: 'Name A-Z' },
  ];

  const activeFilters = [selectedCategory, selectedPrice, selectedMaterial].filter(f => f !== 'all').length;

  return (
    <div className="bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="bg-velmora-cream-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle text-center">Our Collection</p>
          <h1 className="section-title text-center mt-3">Shop All Jewelry</h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            className="lg:hidden flex items-center gap-2 mb-6 text-sm"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal size={18} />
            Filters {activeFilters > 0 && `(${activeFilters})`}
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className={`hidden lg:block w-64 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm transition-colors ${selectedCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-black'}`}
                    >
                      All ({products.length})
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm transition-colors ${selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-black'}`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setSelectedPrice(opt.value)}
                        className={`text-sm transition-colors ${selectedPrice === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-black'}`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Material</h3>
                <ul className="space-y-2">
                  {materialOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setSelectedMaterial(opt.value)}
                        className={`text-sm transition-colors ${selectedMaterial === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-black'}`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear filters */}
              {activeFilters > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                    setSelectedMaterial('all');
                  }}
                  className="text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-velmora-cream overflow-y-auto animate-slide-in-right">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-serif text-xl">Filters</h2>
                    <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Category</h3>
                      <ul className="space-y-3">
                        <li>
                          <button onClick={() => setSelectedCategory('all')} className={`text-sm ${selectedCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray'}`}>
                            All ({products.length})
                          </button>
                        </li>
                        {categories.map(cat => (
                          <li key={cat.id}>
                            <button onClick={() => setSelectedCategory(cat.id)} className={`text-sm ${selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray'}`}>
                              {cat.name} ({cat.count})
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Price</h3>
                      <ul className="space-y-3">
                        {priceOptions.map(opt => (
                          <li key={opt.value}>
                            <button onClick={() => setSelectedPrice(opt.value)} className={`text-sm ${selectedPrice === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray'}`}>
                              {opt.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs tracking-widest uppercase text-velmora-black mb-4">Material</h3>
                      <ul className="space-y-3">
                        {materialOptions.map(opt => (
                          <li key={opt.value}>
                            <button onClick={() => setSelectedMaterial(opt.value)} className={`text-sm ${selectedMaterial === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray'}`}>
                              {opt.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedPrice('all');
                        setSelectedMaterial('all');
                        setFilterOpen(false);
                      }}
                      className="w-full btn-outline"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-warm-gray">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-velmora-taupe/50 bg-transparent px-3 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(product => (
                <div
                  key={product.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-velmora-cream-dark mb-4">
                    <img
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[${product.id}-title] [${product.id}-desc] [shop-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.shortName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1">
                        {product.badge}
                      </span>
                    )}
                    <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product, product.variants[0]);
                        }}
                        className="w-full bg-white/95 backdrop-blur-sm text-velmora-black py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
                      >
                        <ShoppingBag size={14} />
                        Add to Bag
                      </button>
                    </div>
                  </Link>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-sm tracking-wider text-velmora-black group-hover:text-velmora-gold transition-colors truncate">
                      {product.shortName}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={12} className="fill-velmora-gold text-velmora-gold" />
                      <span className="text-xs text-velmora-warm-gray">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium mt-1">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-black mb-2">No products found</p>
                <p className="text-sm text-velmora-warm-gray mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                    setSelectedMaterial('all');
                  }}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

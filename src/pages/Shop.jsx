import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const containerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, material, sortBy]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange('all');
    setMaterial('all');
  };

  const hasActiveFilters = selectedCategory || priceRange !== 'all' || material !== 'all';

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-sans uppercase tracking-ultra-wide text-brand-charcoal">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs font-sans text-brand-gold hover:underline">Clear all</button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <p className="text-xs font-sans uppercase tracking-ultra-wider text-brand-muted mb-3">Category</p>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm font-sans transition-colors ${!selectedCategory ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`block text-sm font-sans transition-colors ${selectedCategory === cat.slug ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="text-xs font-sans uppercase tracking-ultra-wider text-brand-muted mb-3">Price</p>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '30-50', label: '$30 – $50' },
            { value: '50-70', label: '$50 – $70' },
            { value: '70-120', label: '$70 – $120' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block text-sm font-sans transition-colors ${priceRange === opt.value ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <p className="text-xs font-sans uppercase tracking-ultra-wider text-brand-muted mb-3">Material</p>
        <div className="space-y-2">
          <button
            onClick={() => setMaterial('all')}
            className={`block text-sm font-sans transition-colors ${material === 'all' ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
          >
            All Materials
          </button>
          <button
            onClick={() => setMaterial('18K Gold Plated')}
            className={`block text-sm font-sans transition-colors ${material === '18K Gold Plated' ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">The Collection</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Sort & mobile filter toggle */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs font-sans text-brand-muted">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-hairline px-3 py-1.5 focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No products found</p>
                <p className="text-sm text-brand-muted font-sans">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product);
                            }}
                            className="w-full bg-brand-charcoal/90 text-white text-[11px] font-sans uppercase tracking-ultra-wide py-3 flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-sm uppercase tracking-ultra-wider text-brand-charcoal">{product.name}</h3>
                      <p className="text-xs text-brand-muted font-sans mt-0.5">{product.description}</p>
                      <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-brand-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-sans uppercase tracking-ultra-wide text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;

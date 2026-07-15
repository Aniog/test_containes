import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileFiltersOpen]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const priceRanges = ['All', 'Under $50', '$50–$75', '$75–$100', 'Over $100'];
  const materials = ['All', 'Gold', 'Silver'];

  const filtered = products.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedPrice === 'Under $50' && p.price >= 50) return false;
    if (selectedPrice === '$50–$75' && (p.price < 50 || p.price > 75)) return false;
    if (selectedPrice === '$75–$100' && (p.price < 75 || p.price > 100)) return false;
    if (selectedPrice === 'Over $100' && p.price <= 100) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-[11px] tracking-super-wide uppercase text-brand-charcoal mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block font-sans text-sm transition-colors ${
                selectedCategory === cat ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-[11px] tracking-super-wide uppercase text-brand-charcoal mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedPrice(range)}
              className={`block font-sans text-sm transition-colors ${
                selectedPrice === range ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-[11px] tracking-super-wide uppercase text-brand-charcoal mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block font-sans text-sm transition-colors ${
                selectedMaterial === mat ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-brand-cream">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-6">
        <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-brand-charcoal">
          Shop All
        </h1>
        <div className="w-12 h-px bg-brand-gold mt-4" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="font-sans text-xs text-brand-warm-gray hidden md:block">
            {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-4">
            <p className="font-sans text-xs text-brand-warm-gray md:hidden">
              {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-wider uppercase text-brand-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-charcoal">No pieces found</p>
                <p className="font-sans text-sm text-brand-warm-gray mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-warm">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-hover-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </Link>

                    {/* Quick add */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="font-sans text-[10px] tracking-super-wide uppercase text-white flex items-center gap-2 hover:text-brand-gold transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>

                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-xs md:text-sm tracking-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-brand-warm-gray mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-brand-cream shadow-2xl p-6 overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-sans text-[11px] tracking-super-wide uppercase text-brand-charcoal">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-warm-gray hover:text-brand-charcoal" aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

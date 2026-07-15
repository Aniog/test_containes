import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem, openCart } = useCart();

  const [hoveredId, setHoveredId] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy, priceRange, selectedMaterial]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      const cat = categories.find((c) => c.id === activeCategory);
      if (cat) {
        result = result.filter((p) => p.category.toLowerCase() === cat.name.toLowerCase());
      }
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedMaterial) {
      result = result.filter((p) => p.materials.toLowerCase().includes(selectedMaterial.toLowerCase()));
    }

    switch (sortBy) {
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
  }, [activeCategory, priceRange, selectedMaterial, sortBy]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] });
    openCart();
  };

  const clearFilters = () => {
    setSearchParams({});
    setPriceRange([0, 120]);
    setSelectedMaterial('');
  };

  const hasActiveFilters = activeCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 120;

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => { setSearchParams({}); }}
            className={`text-left font-sans text-sm py-1 transition-colors ${
              !activeCategory ? 'text-warmgold' : 'text-taupe hover:text-cocoa'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSearchParams({ category: c.id })}
              className={`text-left font-sans text-sm py-1 transition-colors ${
                activeCategory === c.id ? 'text-warmgold' : 'text-taupe hover:text-cocoa'
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Price</h3>
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs text-taupe">${priceRange[0]}</span>
          <input
            type="range"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-warmgold"
          />
          <span className="font-sans text-xs text-taupe">${priceRange[1]}</span>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Swarovski Crystal'].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(selectedMaterial === m ? '' : m)}
              className={`text-left font-sans text-sm py-1 transition-colors ${
                selectedMaterial === m ? 'text-warmgold' : 'text-taupe hover:text-cocoa'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button onClick={clearFilters} className="font-sans text-xs text-warmgold hover:text-goldlight transition-colors tracking-wider uppercase text-left">
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="serif-heading text-3xl md:text-4xl text-espresso mb-2">
              {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'Shop All'}
            </h1>
            <p className="font-sans text-sm text-taupe">{filteredProducts.length} products</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-wider uppercase bg-transparent border border-stone px-3 py-2 rounded-sm text-espresso focus:outline-none focus:border-warmgold cursor-pointer appearance-none pr-8"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B7E6E' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-espresso"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl text-espresso mb-3">No products found</p>
                <p className="font-sans text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] bg-sand rounded-sm overflow-hidden mb-3">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className={`absolute bottom-2 left-2 right-2 py-2 bg-cream/95 text-espresso font-sans text-[10px] tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 ${
                          hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Quick Add
                      </button>
                    </div>
                    <p id={product.titleId} className="product-name text-xs mb-1">{product.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="product-price text-xs">${product.price}</span>
                      <span className="flex items-center gap-1 text-[10px] text-taupe font-sans">
                        <Star className="w-2.5 h-2.5 fill-warmgold text-warmgold" />
                        {product.rating}
                      </span>
                    </div>
                    <p id={product.descId} className="sr-only">{product.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-cream shadow-2xl p-6 transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans text-sm tracking-widest uppercase text-espresso">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-taupe hover:text-espresso">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  );
}

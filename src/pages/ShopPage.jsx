import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filterOpen, setFilterOpen] = useState(false);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  switch (sortBy) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    default: break;
  }

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  return (
    <section className="py-8 md:py-16" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Jewelry'}
          </h1>
          <p className="text-text-secondary font-sans text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-sans text-text-primary mb-4">Category</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory('all')}
                      className={`text-sm font-sans transition-colors ${
                        activeCategory === 'all' ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setCategory(cat.id)}
                        className={`text-sm font-sans transition-colors ${
                          activeCategory === cat.id ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-sans text-text-primary mb-4">Price</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Under $40', range: [0, 40] },
                    { label: '$40 – $60', range: [40, 60] },
                    { label: '$60 – $90', range: [60, 90] },
                    { label: '$90 & Above', range: [90, 200] },
                  ].map((r, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setPriceRange(r.range)}
                        className={`text-sm font-sans transition-colors ${
                          priceRange[0] === r.range[0] && priceRange[1] === r.range[1]
                            ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {r.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 text-sm font-sans uppercase tracking-wider text-text-secondary mb-4"
            onClick={() => setFilterOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-wrap gap-2">
                {activeCategory !== 'all' && (
                  <button
                    onClick={() => setCategory('all')}
                    className="inline-flex items-center gap-1 text-xs bg-gold/10 text-gold px-3 py-1.5 rounded-full font-sans"
                  >
                    {categories.find(c => c.id === activeCategory)?.name}
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="text-xs font-sans uppercase tracking-wider text-text-secondary bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-text-secondary font-sans">No pieces found matching your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} addItem={addItem} openCart={openCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-xl md:hidden p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-widest font-sans">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-sans text-text-primary mb-4">Category</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => { setCategory('all'); setFilterOpen(false); }} className={`text-sm font-sans ${activeCategory === 'all' ? 'text-gold' : 'text-text-secondary'}`}>
                      All
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button onClick={() => { setCategory(cat.id); setFilterOpen(false); }} className={`text-sm font-sans ${activeCategory === cat.id ? 'text-gold' : 'text-text-secondary'}`}>
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function ProductCard({ product, addItem, openCart }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream-dark rounded overflow-hidden mb-3">
        <img
          data-strk-img-id={`shop-${product.id}-front`}
          data-strk-img={`[shop-name-${product.id}] [shop-cat-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.id}-hover`}
          data-strk-img={`[shop-name-${product.id}] [shop-cat-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-text-primary text-xs uppercase tracking-widest py-2.5 font-sans flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-1">
        <span id={`shop-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-text-secondary font-sans">
          {product.category}
        </span>
        <h3 id={`shop-name-${product.id}`} className="product-name mt-1">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-text-secondary font-sans">{product.rating}</span>
        </div>
        <p className="font-sans text-sm font-medium mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-charcoal text-ivory text-[9px] font-sans uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-charcoal text-[9px] font-sans uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className={`w-full py-3.5 text-[10px] font-sans uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-300 ${
              added ? 'bg-gold text-charcoal' : 'bg-charcoal text-ivory hover:bg-gold-dark'
            }`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <p
          id={`shop-title-${product.id}`}
          className="font-serif text-sm uppercase tracking-widest text-charcoal group-hover:text-gold-dark transition-colors leading-tight"
        >
          {product.name}
        </p>
        <p
          id={`shop-desc-${product.id}`}
          className="text-xs font-sans text-stone mt-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gold/30'}
                  strokeWidth={0}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-[10px] font-sans text-stone">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-gold/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
            {activeCategory === 'all' ? 'All Pieces' : categories.find(c => c.value === activeCategory)?.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            {activeCategory === 'all' ? 'The Collection' : categories.find(c => c.value === activeCategory)?.label}
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-charcoal hover:text-gold transition-colors md:hidden"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
            </button>
            <span className="text-xs font-sans text-stone hidden md:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans text-stone hidden md:block uppercase tracking-widest">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-gold/30 text-xs font-sans text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer uppercase tracking-widest"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-stone mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`block text-sm font-sans transition-colors w-full text-left py-1 ${
                        activeCategory === cat.value
                          ? 'text-charcoal font-medium'
                          : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {activeCategory === cat.value && (
                        <span className="inline-block w-3 h-px bg-gold mr-2 align-middle" />
                      )}
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-stone mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setActivePriceRange(range.value)}
                      className={`block text-sm font-sans transition-colors w-full text-left py-1 ${
                        activePriceRange === range.value
                          ? 'text-charcoal font-medium'
                          : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {activePriceRange === range.value && (
                        <span className="inline-block w-3 h-px bg-gold mr-2 align-middle" />
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-stone mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-gold/40 group-hover:border-gold transition-colors flex-shrink-0" />
                      <span className="text-sm font-sans text-stone group-hover:text-charcoal transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} strokeWidth={1.5} className="text-charcoal" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat.value}
                          onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                          className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                            activeCategory === cat.value
                              ? 'border-charcoal bg-charcoal text-ivory'
                              : 'border-gold/30 text-charcoal'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">Price</p>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map(range => (
                        <button
                          key={range.value}
                          onClick={() => { setActivePriceRange(range.value); setFilterOpen(false); }}
                          className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                            activePriceRange === range.value
                              ? 'border-charcoal bg-charcoal text-ivory'
                              : 'border-gold/30 text-charcoal'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal-soft font-light mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); }}
                  className="text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
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

import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

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
  { value: 'rating', label: 'Best Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        <span id={`shop-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</span>

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-inter text-[9px] uppercase tracking-widest px-2 py-0.5">
            Bestseller
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-inter text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-300 ${
              added ? 'bg-gold text-obsidian' : 'bg-obsidian text-cream hover:bg-gold hover:text-obsidian'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="pt-4">
        <p className="font-cormorant text-sm uppercase tracking-widest text-obsidian leading-tight">
          {product.name}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-inter text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-gold" fill="#C9A96E" />
            <span className="font-inter text-xs text-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    if (val === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => {
      if (selectedPrice === 'all') return true;
      const [min, max] = selectedPrice.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeCategory = categories.find(c => c.value === selectedCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <CartDrawer />

      {/* Page header */}
      <div className="pt-20 bg-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-obsidian">
            {activeCategory?.label || 'All Jewelry'}
          </h1>
          <p className="font-inter text-sm text-taupe mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-border">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-obsidian text-cream border-obsidian'
                    : 'bg-transparent text-taupe border-border hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-obsidian border border-border px-4 py-2"
          >
            <SlidersHorizontal className="w-3 h-3" />
            Filter
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-inter text-xs text-stone uppercase tracking-widest hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-border font-inter text-xs uppercase tracking-widest text-obsidian px-4 py-2 pr-8 outline-none cursor-pointer hover:border-obsidian transition-colors"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-obsidian mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        selectedCategory === cat.value
                          ? 'text-obsidian font-medium'
                          : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8 mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-obsidian mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPrice(range.value)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        selectedPrice === range.value
                          ? 'text-obsidian font-medium'
                          : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div className="border-t border-border pt-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-obsidian mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3 h-3 border border-border group-hover:border-obsidian transition-colors" />
                      <span className="font-inter text-xs text-taupe group-hover:text-obsidian transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-cream overflow-y-auto">
              <div className="px-4 py-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-cormorant text-2xl text-obsidian">Filter</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-obsidian" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="font-inter text-xs uppercase tracking-widest text-obsidian mb-4">Category</h3>
                  <div className="flex flex-col gap-3">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                        className={`text-left font-inter text-sm py-2 border-b border-border ${
                          selectedCategory === cat.value ? 'text-obsidian font-medium' : 'text-taupe'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-inter text-xs uppercase tracking-widest text-obsidian mb-4">Price</h3>
                  <div className="flex flex-col gap-3">
                    {priceRanges.map(range => (
                      <button
                        key={range.value}
                        onClick={() => { setSelectedPrice(range.value); setFilterOpen(false); }}
                        className={`text-left font-inter text-sm py-2 border-b border-border ${
                          selectedPrice === range.value ? 'text-obsidian font-medium' : 'text-taupe'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <p className="font-cormorant text-2xl text-taupe">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setSelectedPrice('all'); }}
                  className="font-inter text-xs uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors"
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

      <Footer />
    </div>
  );
}

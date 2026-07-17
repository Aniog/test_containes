import { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const MATERIALS = ['All', '18K Gold Plated'];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();

  useStrkImages(containerRef, [category, priceRange, sort]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileFiltersOpen]);

  const filteredProducts = products
    .filter((p) => category === 'All' || p.category === category)
    .filter((p) => p.price >= PRICE_RANGES[priceRange].min && p.price <= PRICE_RANGES[priceRange].max)
    .sort((a, b) => {
      switch (sort) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div ref={containerRef} className="bg-brand-cream min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Page header */}
        <div
          ref={revealRef}
          className={`text-center mb-10 md:mb-14 scroll-reveal animate-reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            {category === 'All' ? 'All Jewelry' : category}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm font-sans text-brand-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        category === cat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(idx)}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        priceRange === idx ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {MATERIALS.map((mat) => (
                    <span key={mat} className="block text-sm font-sans text-brand-warm-gray">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters overlay */}
          <div
            className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
            <div
              className={`absolute top-0 left-0 h-full w-72 bg-brand-cream p-6 overflow-y-auto transition-transform duration-300 ease-out ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg text-brand-charcoal">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5 text-brand-warm-gray" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-3">Category</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { handleCategoryChange(cat); setMobileFiltersOpen(false); }}
                      className={`block text-sm font-sans ${category === cat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-3">Price</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => { setPriceRange(idx); setMobileFiltersOpen(false); }}
                      className={`block text-sm font-sans ${priceRange === idx ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-warm-gray mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); }}
                  className="text-sm font-sans text-brand-gold hover:text-brand-gold-dark"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    className={`group scroll-reveal animate-reveal-up ${revealed ? `revealed stagger-${(idx % 3) + 1}` : ''}`}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory">
                        <img
                          data-strk-img-id={`shop-${product.images[0].imgId}`}
                          data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Quick add */}
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-brand-onyx/90 py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                        >
                          <ShoppingBag className="w-4 h-4 text-white" />
                          <span className="text-[11px] font-sans font-semibold tracking-extra-wide uppercase text-white">
                            Add to Cart
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.images[0].titleId}
                          className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p
                        id={product.images[0].descId}
                        className="text-xs text-brand-warm-gray font-sans mt-1"
                      >
                        {product.description}
                      </p>
                      <p className="text-sm font-sans font-medium text-brand-charcoal mt-2">
                        ${product.price}
                      </p>
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

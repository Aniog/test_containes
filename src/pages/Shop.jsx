import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    const range = priceRanges[priceRange];
    result = result.filter(p => p.price >= range.min && p.price < range.max);

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [category, priceRange, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">The Collection</h1>
          <p className="text-sm text-warm-gray mt-2">Timeless pieces crafted for everyday elegance.</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-sans text-charcoal hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          <p className="text-xs text-warm-gray">{filteredProducts.length} products</p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-stone px-4 py-2 pr-8 text-xs font-sans text-charcoal cursor-pointer focus:outline-none focus:border-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            {/* Category */}
            <div className="mb-8">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">Category</h3>
              <div className="flex flex-col gap-2">
                {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left text-sm font-sans capitalize bg-transparent border-none cursor-pointer transition-colors ${
                      category === cat ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">Price</h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setPriceRange(i)}
                    className={`text-left text-sm font-sans bg-transparent border-none cursor-pointer transition-colors ${
                      priceRange === i ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-warm-gray mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block no-underline">
                      <div className="relative aspect-[3/4] bg-stone/30 overflow-hidden mb-3">
                        <img
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={product.imgId2}
                          data-strk-img={`[${product.titleId}] gold jewelry close up`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} alternate view`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </div>
                      <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm font-sans text-warm-gray">${product.price}</p>
                      <p id={product.descId} className="sr-only">{product.description}</p>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="absolute bottom-[72px] left-0 right-0 mx-2 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs font-sans font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-stone hover:bg-gold hover:text-white hover:border-gold cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

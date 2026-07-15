import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, priceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const Filters = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-super uppercase text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-super uppercase text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {['$0 – $50', '$50 – $100', '$100+'].map((range, i) => (
            <button
              key={range}
              onClick={() => {
                if (i === 0) setPriceRange([0, 50]);
                if (i === 1) setPriceRange([50, 100]);
                if (i === 2) setPriceRange([100, 120]);
              }}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                (i === 0 && priceRange[1] === 50) ||
                (i === 1 && priceRange[1] === 100) ||
                (i === 2 && priceRange[1] === 120)
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="section-padding pt-24 pb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          {selectedCategory === 'All' ? 'Shop All' : selectedCategory}
        </h1>
        <p className="font-sans text-sm text-velmora-stone mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="flex gap-10">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-28">
            <Filters />
          </div>
        </aside>

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex items-center justify-between w-full mb-6">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-smoke hover:text-velmora-charcoal transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none font-sans text-xs tracking-wider uppercase text-velmora-smoke bg-transparent pr-6 cursor-pointer hover:text-velmora-charcoal"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-stone pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter overlay */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-72 bg-velmora-cream p-6 animate-slide-in-right">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl tracking-wide">Filters</h2>
                <button onClick={() => setMobileFilterOpen(false)} className="text-velmora-stone">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <Filters />
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop sort */}
          <div className="hidden lg:flex justify-end mb-8">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans text-xs tracking-wider uppercase text-velmora-stone bg-transparent pr-6 cursor-pointer hover:text-velmora-charcoal"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-stone pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                    <img
                      data-strk-img-id={`shop-${product.images[0].id}`}
                      data-strk-img={`${product.images[0].query}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                      }`}
                    />
                    <img
                      data-strk-img-id={`shop-${product.images[1].id}`}
                      data-strk-img={`${product.images[1].query}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                        hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product, product.variants[0]);
                        }}
                        className="w-full bg-velmora-charcoal/90 backdrop-blur-sm text-white font-sans text-xs tracking-wider uppercase py-3 hover:bg-velmora-gold transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
                <div>
                  <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'fill-velmora-gold text-velmora-gold'
                            : 'text-velmora-pearl'
                        }`}
                      />
                    ))}
                    <span className="font-sans text-[11px] text-velmora-stone ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <p className="font-sans text-sm font-medium text-velmora-smoke mt-1">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-velmora-stone">No products found</p>
              <button
                onClick={() => { setSelectedCategory('All'); setPriceRange([0, 120]); }}
                className="btn-ghost mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
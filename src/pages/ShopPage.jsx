import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

const materialOptions = [
  { label: 'All Materials', value: 'all' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [category, priceRange, material, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    const range = priceRanges[priceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [category, priceRange, material, sort]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  const activeFilterCount = (category !== 'all' ? 1 : 0) + (priceRange !== 0 ? 1 : 0) + (material !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setCategory('all');
    setPriceRange(0);
    setMaterial('all');
    setSearchParams({});
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Page header */}
      <div className="velmora-container py-8 md:py-12">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-velvet-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-velvet-800">Shop</span>
        </nav>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-serif text-heading-1 md:text-display text-velvet-900">
              {category === 'all' ? 'All Jewelry' : categories.find((c) => c.id === category)?.name || 'Shop'}
            </h1>
            <p className="font-sans text-sm text-muted-foreground mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort dropdown (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-sans tracking-wider uppercase">
              Sort by
            </span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-cream border border-border px-4 py-2.5 pr-10 text-sm font-sans text-velvet-800 focus:outline-none focus:border-gold/50 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velvet-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="velmora-container pb-16 md:pb-24">
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6 flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-sans font-medium text-velvet-800 border border-border px-4 py-2.5"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold text-velvet-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Mobile sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-cream border border-border px-4 py-2.5 pr-10 text-sm font-sans text-velvet-800 focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velvet-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Filter sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-56 lg:w-64 flex-shrink-0`}
          >
            <div className="sticky top-28 space-y-8">
              {/* Mobile filter header */}
              <div className="md:hidden flex items-center justify-between pb-4 border-b border-border">
                <span className="font-sans text-sm font-semibold text-velvet-800">Filters</span>
                <button onClick={() => setShowFilters(false)} className="p-1">
                  <X className="w-5 h-5 text-velvet-600" />
                </button>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velvet-800 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                      category === 'all' ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-800'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                        category === cat.id ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="velmora-divider" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velvet-800 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(index)}
                      className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                        priceRange === index ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="velmora-divider" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velvet-800 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materialOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setMaterial(opt.value)}
                      className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                        material === opt.value ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFilterCount > 0 && (
                <>
                  <div className="velmora-divider" />
                  <button
                    onClick={clearFilters}
                    className="text-xs font-sans tracking-wider uppercase text-muted-foreground hover:text-red-600 transition-colors underline underline-offset-2"
                  >
                    Clear All Filters
                  </button>
                </>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velvet-700 mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearFilters} className="velmora-btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group velmora-card"
                  >
                    <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-title-${product.id}] [shop-desc-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.images[0].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Quick add */}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-velvet-900 font-sans text-xs font-semibold tracking-widest uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>

                    <div className="p-4">
                      <h3
                        id={`shop-title-${product.id}`}
                        className="font-serif text-sm md:text-base font-semibold text-velvet-900 uppercase tracking-wider leading-tight mb-1"
                      >
                        {product.name}
                      </h3>
                      <p
                        id={`shop-desc-${product.id}`}
                        className="text-xs text-muted-foreground line-clamp-1 mb-2"
                      >
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-semibold text-velvet-800">
                          {formatPrice(product.price)}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-gold fill-gold" />
                          <span className="text-xs text-muted-foreground">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

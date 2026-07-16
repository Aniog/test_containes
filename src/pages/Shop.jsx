import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name', label: 'Name: A-Z' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const raf = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [selectedCategory, selectedPrice, sortBy]);

  const filteredProducts = products
    .filter((p) => selectedCategory === 'all' || p.category === selectedCategory)
    .filter((p) => {
      if (!selectedPrice) return true;
      const range = priceRanges.find((r) => r.id === selectedPrice);
      return p.price >= range.min && p.price < range.max;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const activeFilters = [
    selectedCategory !== 'all' && categories.find((c) => c.id === selectedCategory)?.name,
    selectedPrice && priceRanges.find((r) => r.id === selectedPrice)?.label,
  ].filter(Boolean);

  return (
    <div className="pt-24 md:pt-28 pb-20" ref={containerRef}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-charcoal mb-3">
            Our Collection
          </h1>
          <p className="font-sans text-sm text-warm-gray">
            Discover handcrafted pieces for every occasion.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filter - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedPrice={selectedPrice}
              onCategoryChange={handleCategoryChange}
              onPriceChange={setSelectedPrice}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden btn-ghost flex items-center gap-2 border border-border-warm"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>

                {/* Active filters */}
                {activeFilters.length > 0 && (
                  <div className="flex items-center gap-2">
                    {activeFilters.map((filter) => (
                      <span
                        key={filter}
                        className="flex items-center gap-1.5 bg-gold-wash text-charcoal px-3 py-1.5 font-sans text-xs"
                      >
                        {filter}
                        <button
                          onClick={() => {
                            setSelectedCategory('all');
                            setSelectedPrice(null);
                            searchParams.delete('category');
                            setSearchParams(searchParams);
                          }}
                          className="text-warm-gray hover:text-charcoal"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wider text-warm-gray border border-border-warm pl-4 pr-8 py-2.5 cursor-pointer focus:outline-none focus:border-charcoal"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Product count */}
            <p className="font-sans text-xs text-warm-gray mb-6">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {/* Products grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductGridCard
                  key={product.id}
                  product={product}
                  addItem={addItem}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-warm-gray mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice(null);
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {filterOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setFilterOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 bg-cream shadow-2xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl uppercase tracking-wider">Filters</h3>
                <button onClick={() => setFilterOpen(false)} className="text-charcoal">
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar
                selectedCategory={selectedCategory}
                selectedPrice={selectedPrice}
                onCategoryChange={(cat) => {
                  handleCategoryChange(cat);
                  setFilterOpen(false);
                }}
                onPriceChange={(price) => {
                  setSelectedPrice(price);
                  setFilterOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSidebar({ selectedCategory, selectedPrice, onCategoryChange, onPriceChange }) {
  return (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-wider font-medium text-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={cn(
              'block font-sans text-sm w-full text-left py-1.5 transition-colors',
              selectedCategory === 'all' ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'block font-sans text-sm w-full text-left py-1.5 transition-colors',
                selectedCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-wider font-medium text-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => onPriceChange(null)}
            className={cn(
              'block font-sans text-sm w-full text-left py-1.5 transition-colors',
              !selectedPrice ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
            )}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => onPriceChange(range.id)}
              className={cn(
                'block font-sans text-sm w-full text-left py-1.5 transition-colors',
                selectedPrice === range.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductGridCard({ product, addItem }) {
  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-pearl overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={product.imgQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, defaultVariant);
              }}
              className="w-full bg-charcoal text-white py-2.5 flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-button font-medium hover:bg-gold transition-colors"
            >
              <ShoppingBag size={13} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1">{product.name}</h3>
        <p className="font-sans text-sm font-medium text-charcoal">${product.price}</p>
      </Link>
    </div>
  );
}

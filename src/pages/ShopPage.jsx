import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-4">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.imageHover}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-ivory text-velmora-dark font-sans text-[10px] uppercase tracking-wider px-2.5 py-1">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className={`absolute bottom-3 left-3 right-3 bg-velmora-ivory/95 backdrop-blur-sm text-velmora-dark font-sans text-caption uppercase tracking-widest-xl py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-product-name text-sm md:text-base text-velmora-dark mb-1">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-velmora-sand'}`} />
          ))}
        </div>
        <span className="font-sans text-[11px] text-velmora-stone">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-velmora-dark">${product.price}</p>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over100') {
      result = result.filter((p) => p.price > 100);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="section-padding py-10 md:py-14 text-center bg-velmora-ivory border-b border-velmora-sand/20">
        <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-heading-xl text-velmora-dark">
          Shop All Jewelry
        </h1>
        <p className="font-sans text-sm text-velmora-stone mt-3 max-w-md mx-auto">
          Every piece is crafted from 18K gold plated materials, designed to last and hypoallergenic.
        </p>
      </div>

      <div className="section-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Mobile filter toggle */}
          <div className="lg:w-56 flex-shrink-0">
            {/* Mobile filter button */}
            <button
              className="lg:hidden w-full flex items-center justify-between px-4 py-3 border border-velmora-sand/40 text-velmora-dark font-sans text-sm mb-4"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${filterOpen ? 'block' : 'hidden'} lg:block`}>
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-stone mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-velmora-charcoal hover:text-gold'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-velmora-charcoal hover:text-gold'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-stone mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 — $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${priceRange === opt.value ? 'text-gold font-medium' : 'text-velmora-charcoal hover:text-gold'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-stone mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <p className="font-sans text-sm text-gold font-medium py-1.5">18K Gold Plated</p>
                  <p className="font-sans text-sm text-velmora-charcoal py-1.5">Sterling Silver</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand/20">
              <p className="font-sans text-sm text-velmora-stone">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm text-velmora-dark bg-transparent border border-velmora-sand/40 pl-3 pr-8 py-2 appearance-none cursor-pointer focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-velmora-stone absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-heading-md text-velmora-dark mb-2">
                  No products found
                </p>
                <p className="font-sans text-sm text-velmora-stone mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setPriceRange('all');
                    setSearchParams({});
                  }}
                  className="btn-gold-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

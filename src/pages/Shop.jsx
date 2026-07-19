import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const categories = ['all', 'earrings', 'necklaces', 'sets'];

export default function Shop() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  let filtered = products.filter((p) => {
    if (filterCategory !== 'all' && p.category !== filterCategory) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else filtered.sort((a, b) => b.rating - a.rating);

  return (
    <main className="bg-brand-bg pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-dark font-light">
            Shop All
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold mt-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-brand-dark font-medium mb-4">
                  Category
                </h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setFilterCategory(cat)}
                        className={`text-sm font-sans capitalize transition-colors ${
                          filterCategory === cat
                            ? 'text-brand-gold font-medium'
                            : 'text-brand-muted hover:text-brand-dark'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-brand-dark font-medium mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full accent-brand-gold"
                  />
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full accent-brand-gold"
                  />
                  <div className="flex justify-between text-xs text-brand-muted font-sans">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="flex md:hidden items-center justify-between mb-4">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 text-sm text-brand-dark font-sans"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {/* Mobile filter panel */}
          {mobileFilterOpen && (
            <div className="md:hidden bg-brand-white p-4 rounded-sm border border-brand-border mb-4">
              <div className="mb-4">
                <h3 className="font-sans text-xs tracking-widest uppercase text-brand-dark font-medium mb-3">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-4 py-2 text-xs font-sans uppercase tracking-wider rounded-sm border transition-all ${
                        filterCategory === cat
                          ? 'border-brand-gold bg-brand-gold text-white'
                          : 'border-brand-border text-brand-muted hover:border-brand-gold'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-brand-dark font-medium mb-3">
                  Price Range
                </h3>
                <div className="flex gap-4 items-center">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 h-8 border border-brand-border rounded-sm px-2 text-xs font-sans text-brand-dark"
                  />
                  <span className="text-brand-muted">—</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 h-8 border border-brand-border rounded-sm px-2 text-xs font-sans text-brand-dark"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort - desktop */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted">No products found</p>
                <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    isHovered={hoveredId === product.id}
                    onHover={setHoveredId}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="appearance-none bg-transparent border border-brand-border rounded-sm px-3 py-2 pr-8 text-xs font-sans text-brand-dark cursor-pointer focus:outline-none focus:border-brand-gold"
      >
        <option value="popular">Most Popular</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted pointer-events-none" />
    </div>
  );
}

function ShopProductCard({ product, isHovered, onHover }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product);
    setTimeout(() => setAdding(false), 800);
  };

  const imgSrc = isHovered && product.hoverImage ? product.hoverImage : product.images[0];

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative aspect-[3/4] bg-brand-light overflow-hidden rounded-sm">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-brand-white/90 backdrop-blur-sm text-brand-dark text-xs tracking-widest uppercase font-sans font-medium h-10 flex items-center justify-center gap-2 transition-all duration-300 ${
            adding
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {adding ? 'Added!' : 'Quick Add'}
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-dark truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
          <span className="text-xs text-brand-muted">{product.rating}</span>
        </div>
        <p className="font-sans text-sm text-brand-gold font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
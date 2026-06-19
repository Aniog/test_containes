import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, Star, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                activeCategory === cat ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal mb-4">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={200}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-xs font-sans text-warm-gray">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Silver Tone'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-gold w-3 h-3"
                defaultChecked
              />
              <span className="text-sm font-sans text-warm-gray">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="bg-warm-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">Our Collection</p>
          <h1 className="font-serif text-heading-lg text-charcoal mb-3">Shop All</h1>
          <p className="font-sans text-sm text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-sans text-charcoal"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden lg:block" />

              <div className="flex items-center gap-3">
                <label className="text-xs uppercase tracking-[0.15em] font-sans text-warm-gray">Sort</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs font-sans text-charcoal bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-warm-gray">No products match your filters.</p>
                <button
                  onClick={() => { setSearchParams({}); setPriceRange([0, 200]); }}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-gold font-sans"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-warm-light mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"
                        />
                      )}
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal py-3 font-sans text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold hover:text-white"
                      >
                        {addedId === product.id ? (
                          <span>Added!</span>
                        ) : (
                          <>
                            <ShoppingBag className="w-3 h-3" />
                            Quick Add
                          </>
                        )}
                      </button>
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 bg-charcoal/80 text-white text-[10px] uppercase tracking-[0.1em] font-sans px-2 py-1">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <h3 className="product-name truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span className="text-[11px] text-warm-gray font-sans">{product.rating}</span>
                    </div>
                    <p className="font-sans text-sm text-charcoal mt-1 font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)} />
        <div className={`absolute top-0 left-0 bottom-0 w-72 bg-ivory p-8 transform transition-transform duration-300 ${
          mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal">Filters</span>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}
import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeMaterial && activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, sortBy]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.12em] text-[#a09890] mb-4">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block text-sm transition-colors ${activeCategory === 'all' ? 'text-gold' : 'text-[#f5f0eb] hover:text-gold'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-gold' : 'text-[#f5f0eb] hover:text-gold'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.12em] text-[#a09890] mb-4">Price</h4>
        <div className="space-y-2">
          {[
            { label: 'Under $40', value: '0-40' },
            { label: '$40 - $60', value: '40-60' },
            { label: '$60 - $80', value: '60-80' },
            { label: '$80+', value: '80-999' },
          ].map((range) => (
            <button
              key={range.value}
              className="block text-sm text-[#f5f0eb] hover:text-gold transition-colors"
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.12em] text-[#a09890] mb-4">Material</h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Gold Tone', value: 'gold' },
            { label: 'Silver Tone', value: 'silver' },
          ].map((mat) => (
            <button
              key={mat.value}
              onClick={() => setFilter('material', mat.value)}
              className={`block text-sm transition-colors ${activeMaterial === mat.value ? 'text-gold' : 'text-[#f5f0eb] hover:text-gold'}`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-1">Our Collection</p>
            <h1 className="font-serif text-3xl md:text-4xl text-[#f5f0eb]">
              {activeCategory !== 'all'
                ? categories.find(c => c.id === activeCategory)?.name || 'Jewelry'
                : 'All Jewelry'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex items-center gap-2 text-xs text-[#a09890] hover:text-[#f5f0eb] transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs text-[#a09890] hover:text-[#f5f0eb] pr-5 py-1 cursor-pointer focus:outline-none transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0a0a0a]">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-[#a09890] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {filterContent}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#a09890]">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                  }}
                  className="btn-outline mt-4 text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-[#141414] rounded overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 mr-2 inline" />
                        Add to Cart
                      </button>
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#0a0a0a]/80 px-2 py-0.5 rounded text-xs">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-[#f5f0eb] text-[10px]">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xs md:text-sm tracking-[0.08em] text-[#f5f0eb] uppercase">
                      {product.name}
                    </h3>
                    <p className="text-gold text-sm mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#141414] rounded-t-xl p-6 transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg text-[#f5f0eb]">Filters</h3>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="text-[#a09890] hover:text-[#f5f0eb] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {filterContent}
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="btn-primary w-full mt-8"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
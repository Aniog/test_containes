import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Alphabetically' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [sortBy, setSortBy] = useState('default');
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, sortBy]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-charcoal-800 mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter('category', cat.value)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.value
                  ? 'text-gold font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-charcoal-800 mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under-50', label: 'Under $50' },
            { value: '50-100', label: '$50 – $100' },
          ].map((p) => (
            <button
              key={p.value}
              onClick={() => {}}
              className="block text-sm font-sans text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-charcoal-800 mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: '18K Gold Plated' },
          ].map((m) => (
            <button
              key={m.value}
              onClick={() => setFilter('material', m.value)}
              className={`block text-sm font-sans transition-colors ${
                activeMaterial === m.value
                  ? 'text-gold font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-cream-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Page header */}
        <div className="py-10 md:py-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 text-center">
            All Jewelry
          </h1>
          <p className="text-center text-charcoal-500 font-sans text-sm mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="flex gap-10 pb-20">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-charcoal-100">
              <button
                className="md:hidden flex items-center gap-2 text-sm text-charcoal-600 uppercase tracking-wider font-sans"
                onClick={() => setMobileFilters(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-charcoal-600 bg-transparent border-none font-sans uppercase tracking-wider focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-400">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 btn-outline"
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
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-taupe-100 overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-0 left-0 right-0 bg-charcoal-900/90 text-cream-50 py-3 font-sans text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <div className="space-y-1">
                      <h3 className="product-name text-charcoal-800 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-gold fill-gold'
                                : 'text-charcoal-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="font-sans text-sm font-semibold text-charcoal-800">
                        ${product.price}
                      </p>
                    </div>
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
          mobileFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream-50 shadow-xl transform transition-transform duration-300 ${
            mobileFilters ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg text-charcoal-900">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
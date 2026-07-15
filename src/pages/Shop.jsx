import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { Plus, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem, setCartOpen } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
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
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <h1 className="section-title">Shop All</h1>
          <p className="mt-3 text-brand-muted">Discover our complete collection of demi-fine jewelry</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-4">Category</h3>
                <div className="space-y-2">
                  {['all', ...categories.map(c => c.id)].map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        activeCategory === cat ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find(c => c.id === cat)?.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-4">Price Range</h3>
                <div className="space-y-2">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map(range => (
                    <label key={range} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map(material => (
                    <label key={material} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line" />
                      {material}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm text-brand-muted"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-brand-muted">{filteredProducts.length} products</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-brand-line rounded-full px-4 py-2 bg-brand-surface focus:outline-none focus:border-brand-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {activeCategory !== 'all' && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-brand-muted">Filtered by:</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-surface border border-brand-line text-sm">
                  {categories.find(c => c.id === activeCategory)?.name}
                  <button onClick={() => handleCategoryChange('all')} className="ml-1 hover:text-brand-accent">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm relative">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="absolute bottom-4 left-4 right-4 btn-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                  <div className="mt-4">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-brand-muted">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

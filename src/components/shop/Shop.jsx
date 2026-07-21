import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryFilter, sortBy]);

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-velmora-charcoal/60">
            {filteredProducts.length} products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel
              categoryFilter={categoryFilter}
              sortBy={sortBy}
              onCategoryChange={handleCategoryChange}
              onSortChange={(sort) => {
                const newParams = new URLSearchParams(searchParams);
                newParams.set('sort', sort);
                setSearchParams(newParams);
              }}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden w-full mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-velmora-warm hover:border-velmora-charcoal transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-velmora-charcoal/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden animate-slide-down">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <FilterPanel
                categoryFilter={categoryFilter}
                sortBy={sortBy}
                onCategoryChange={(cat) => {
                  handleCategoryChange(cat);
                  setIsFilterOpen(false);
                }}
                onSortChange={(sort) => {
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set('sort', sort);
                  setSearchParams(newParams);
                }}
                onClearFilters={() => {
                  clearFilters();
                  setIsFilterOpen(false);
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-beige aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/10 transition-colors duration-300"></div>
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-light">${product.price}</p>
        <div className="flex items-center gap-1 text-sm text-velmora-charcoal/60">
          <span>★</span>
          <span>{product.rating}</span>
        </div>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-velmora-gold hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        aria-label="Add to cart"
      >
        <ShoppingBag size={16} />
      </button>
    </div>
  );
}

function FilterPanel({ categoryFilter, sortBy, onCategoryChange, onSortChange, onClearFilters }) {
  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="space-y-8">
      {/* Sort */}
      <div>
        <h4 className="font-serif text-lg mb-4">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-velmora-warm focus:outline-none focus:border-velmora-charcoal transition-colors"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="bestsellers">Best Sellers</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-serif text-lg mb-4">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:text-velmora-gold transition-colors">
            <input
              type="radio"
              name="category"
              checked={categoryFilter === ''}
              onChange={() => onCategoryChange('')}
              className="accent-velmora-gold"
            />
            <span className="text-sm">All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-velmora-gold transition-colors">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat}
                onChange={() => onCategoryChange(cat)}
                className="accent-velmora-gold"
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {categoryFilter && (
        <button
          onClick={onClearFilters}
          className="text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

// Import products data
import products from '../../data/products';

import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.bestseller && (
            <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-xs px-2 py-1 tracking-wider uppercase">
              Bestseller
            </span>
          )}
        </div>
      </Link>
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-[var(--velmora-text)] mb-1 hover:text-[var(--velmora-accent)] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-[var(--velmora-text-muted)] ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
        <button
          onClick={() => addToCart(product, product.variants[0])}
          className="mt-3 w-full py-2 text-xs tracking-widest uppercase border border-[var(--velmora-border)] hover:border-[var(--velmora-accent)] hover:bg-[var(--velmora-accent)] hover:text-white transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
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
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all';

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title text-[var(--velmora-text)] mb-4">Shop All</h1>
          <div className="w-16 h-px bg-[var(--velmora-accent)] mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm tracking-wider uppercase"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[var(--velmora-border)] px-3 py-2 bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Filter Sidebar */}
          <aside className={`lg:w-64 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm ${selectedCategory === 'all' ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm ${selectedCategory === cat.id ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: '$100+' },
                  ].map(option => (
                    <li key={option.value}>
                      <button
                        onClick={() => setSelectedPrice(option.value)}
                        className={`text-sm ${selectedPrice === option.value ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: '18K Gold Plated', label: '18K Gold Plated' },
                  ].map(option => (
                    <li key={option.value}>
                      <button
                        onClick={() => setSelectedMaterial(option.value)}
                        className={`text-sm ${selectedMaterial === option.value ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--velmora-accent)] hover:underline flex items-center gap-1"
                >
                  <X size={14} /> Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[var(--velmora-border)] px-3 py-2 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[var(--velmora-text-muted)] mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

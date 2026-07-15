import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addItem, setIsCartOpen } = useCart();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addItem(product, 'gold');
    setIsCartOpen(true);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-xs tracking-wider uppercase text-[var(--velmora-text)] mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'}`}
          >
            All ({products.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <h3 className="text-xs tracking-wider uppercase text-[var(--velmora-text)] mb-3">Material</h3>
        <div className="space-y-2">
          {['all', 'gold'].map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${selectedMaterial === mat ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'}`}
            >
              {mat === 'all' ? 'All Materials' : 'Gold Tone'}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-[var(--velmora-text)] mb-3">Price</h3>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-20 px-2 py-1.5 text-sm border border-[var(--velmora-border)] bg-transparent"
            min="0"
          />
          <span className="text-[var(--velmora-text-muted)]">—</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-20 px-2 py-1.5 text-sm border border-[var(--velmora-border)] bg-transparent"
            min="0"
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="pt-20 lg:pt-24">
      {/* Page Header */}
      <div className="bg-[var(--velmora-surface)] border-b border-[var(--velmora-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <nav className="text-xs text-[var(--velmora-text-muted)] mb-4">
            <Link to="/" className="hover:text-[var(--velmora-text)] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--velmora-text)]">Shop</span>
          </nav>
          <h1 className="velmora-heading text-3xl sm:text-4xl text-[var(--velmora-text)]">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)] mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[var(--velmora-border)] text-sm"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[var(--velmora-bg)] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="velmora-heading-uppercase text-sm">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-8 py-2 text-sm border border-[var(--velmora-border)] bg-transparent cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl text-[var(--velmora-text-muted)] mb-2">No products found</p>
                <p className="text-sm text-[var(--velmora-text-muted)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="product-card group"
                  >
                    <div className="relative aspect-[3/4] bg-[var(--velmora-border)] overflow-hidden mb-4">
                      <img
                        src={product.images.primary}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <img
                        src={product.images.secondary}
                        alt={product.name}
                        className="product-card-secondary w-full h-full object-cover"
                      />
                      <div className="quick-add">
                        <button
                          onClick={(e) => handleQuickAdd(e, product)}
                          className="w-full py-3 bg-[var(--velmora-bg-dark)] text-white text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 hover:bg-[var(--velmora-accent)] hover:text-[var(--velmora-bg-dark)] transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3 className="velmora-heading-uppercase text-xs tracking-wider text-[var(--velmora-text)] truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1 truncate">
                      {product.subtitle}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                        <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
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

import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">All Jewelry</h1>
          <p className="text-muted-foreground">{filteredProducts.length} pieces</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm tracking-wider transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-sm tracking-wider transition-colors ${
                selectedCategory === 'all'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-primary"
                    />
                    All
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-primary"
                      />
                      {cat.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-primary"
                    />
                    All
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === '18K Gold Plated'}
                      onChange={() => setSelectedMaterial('18K Gold Plated')}
                      className="accent-primary"
                    />
                    18K Gold Plated
                  </label>
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[1] === 200}
                      onChange={() => setPriceRange([0, 200])}
                      className="accent-primary"
                    />
                    All
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[1] === 50}
                      onChange={() => setPriceRange([0, 50])}
                      className="accent-primary"
                    />
                    Under $50
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 50 && priceRange[1] === 100}
                      onChange={() => setPriceRange([50, 100])}
                      className="accent-primary"
                    />
                    $50 - $100
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-background p-6 slide-in-right overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-widest uppercase">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)} className="p-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm tracking-widest uppercase mb-3">Category</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`block w-full text-left text-sm py-1 ${selectedCategory === 'all' ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`block w-full text-left text-sm py-1 ${selectedCategory === cat.id ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-widest uppercase mb-3">Price</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setPriceRange([0, 200])}
                        className={`block w-full text-left text-sm py-1 ${priceRange[1] === 200 ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setPriceRange([0, 50])}
                        className={`block w-full text-left text-sm py-1 ${priceRange[1] === 50 ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        Under $50
                      </button>
                      <button
                        onClick={() => setPriceRange([50, 100])}
                        className={`block w-full text-left text-sm py-1 ${priceRange[0] === 50 && priceRange[1] === 100 ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        $50 - $100
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-secondary/20">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-2 py-1">
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addItem(product, product.variants[0]);
                            }}
                            className="w-full bg-foreground/90 text-background text-xs tracking-widest uppercase py-3 hover:bg-primary transition-colors flex items-center justify-center gap-2"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <Link to={`/product/${product.id}`} className="product-name text-sm block text-center mb-1 hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    <p className="text-sm text-center font-medium">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

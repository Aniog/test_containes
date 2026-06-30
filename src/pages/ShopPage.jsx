import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { SlidersHorizontal, Grid3x3, LayoutList, ChevronDown } from 'lucide-react';
import products from '../../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === selectedCategory.toLowerCase() ||
        p.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material.includes(selectedMaterial));
    }

    // Sort
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
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        filtered.sort((a, b) => b.featured - a.featured);
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
  const materials = ['all', '18K Gold Plated'];

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Shop All</h1>
          <div className="divider-gold w-24 mb-6" />
          <p className="font-sans text-velmora-text-secondary">
            Discover our complete collection of demi-fine gold jewelry
          </p>
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 font-sans text-sm uppercase tracking-wider hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="font-sans text-sm text-velmora-text-secondary">
              {filteredProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm border border-velmora-border px-4 py-2 bg-white focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filter Sidebar */}
          {isFilterOpen && (
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-soft space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-serif text-lg font-medium mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSearchParams(cat === 'all' ? {} : { category: cat });
                        }}
                        className={`block w-full text-left font-sans text-sm py-2 px-3 rounded transition-colors ${
                          selectedCategory === cat
                            ? 'bg-velmora-gold/10 text-velmora-gold font-medium'
                            : 'hover:bg-velmora-sand'
                        }`}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-serif text-lg font-medium mb-4">Price</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'All', value: 'all' },
                      { label: 'Under $50', value: '0-50' },
                      { label: '$50 - $75', value: '50-75' },
                      { label: '$75 - $100', value: '75-100' },
                      { label: 'Over $100', value: '100-1000' },
                    ].map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`block w-full text-left font-sans text-sm py-2 px-3 rounded transition-colors ${
                          priceRange === range.value
                            ? 'bg-velmora-gold/10 text-velmora-gold font-medium'
                            : 'hover:bg-velmora-sand'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div>
                  <h3 className="font-serif text-lg font-medium mb-4">Material</h3>
                  <div className="space-y-2">
                    {materials.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`block w-full text-left font-sans text-sm py-2 px-3 rounded transition-colors ${
                          selectedMaterial === mat
                            ? 'bg-velmora-gold/10 text-velmora-gold font-medium'
                            : 'hover:bg-velmora-sand'
                        }`}
                      >
                        {mat === 'all' ? 'All Materials' : mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSelectedMaterial('all');
                    setSearchParams({});
                  }}
                  className="w-full font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors pt-4 border-t border-velmora-border"
                >
                  Clear All Filters
                </button>
              </div>
            </aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="font-sans text-velmora-text-secondary mb-8">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSelectedMaterial('all');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-velmora-sand mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/10 transition-colors duration-500" />
        </div>
      </Link>

      <div className="space-y-2">
        <h3 className="product-name text-sm">
          <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="font-sans text-xs text-velmora-text-secondary">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-serif text-lg font-medium">${product.price}</span>
          <div className="flex items-center space-x-1">
            <span className="text-velmora-gold text-sm">★</span>
            <span className="font-sans text-sm text-velmora-text-secondary">{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full mt-3 py-3 font-sans text-sm font-medium tracking-wider uppercase border border-velmora-charcoal hover:bg-velmora-charcoal hover:text-velmora-cream transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}

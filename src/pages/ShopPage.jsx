import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy, priceRange]);

  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Collection
          </h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 mb-8 text-sm tracking-wider uppercase"
        >
          <SlidersHorizontal size={18} />
          Filter & Sort
        </button>

        <div className="grid md:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar Filters */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-sm py-2 transition-colors ${
                        selectedCategory === cat ? 'text-gold font-medium' : 'text-gray-600 hover:text-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider" />

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm py-2 transition-colors ${
                        selectedMaterial === mat ? 'text-gold font-medium' : 'text-gray-600 hover:text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider" />

              {/* Price Range */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $80', range: [50, 80] },
                    { label: '$80 - $100', range: [80, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className="block text-sm py-2 text-gray-600 hover:text-charcoal transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-gray-300 px-4 py-2 pr-10 text-sm focus:border-gold focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 mb-4">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedMaterial('All');
                    setPriceRange([0, 200]);
                  }}
                  className="text-sm text-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <a href={`/product/${product.id}`} className="block">
                      <div className="product-card-image">
                        {product.badge && (
                          <span className="badge">{product.badge}</span>
                        )}
                        <img src={product.image} alt={product.name} />
                        <img src={product.imageHover} alt={product.name} />
                      </div>

                      <div className="p-4">
                        <h3 className="product-name text-sm mb-2">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <p className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>${product.price}</p>
                      </div>
                    </a>

                    <button
                      onClick={() => addToCart(product)}
                      className="quick-add"
                    >
                      Add to Cart
                    </button>
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

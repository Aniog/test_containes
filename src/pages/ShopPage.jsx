import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, X, Star } from 'lucide-react';
import products from '../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial) {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedMaterial('');
    setPriceRange([0, 200]);
  };

  const handleAddToCart = (product) => {
    addToCart(product, product.variants[0], 1);
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container-velmora py-8 md:py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop All
          </h1>
          <p className="text-velmora-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-sand"
          >
            <span className="flex items-center space-x-2">
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </span>
            {(selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 200) && (
              <span className="text-xs bg-velmora-gold text-velmora-cream px-2 py-1">
                Active
              </span>
            )}
          </button>

          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'fixed inset-0 z-50 bg-velmora-cream p-6 overflow-y-auto' : 'hidden'
            } lg:block lg:relative lg:z-auto lg:w-64 lg:shrink-0 lg:p-0`}
          >
            <div className="lg:sticky lg:top-32">
              {/* Mobile Close Button */}
              {isFilterOpen && (
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="font-serif text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Filters
                  </h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
              )}

              <div className="space-y-8">
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium mb-4">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                          className="w-4 h-4 accent-velmora-gold"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div>
                  <h4 className="font-medium mb-4">Material</h4>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <label key={material} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="material"
                          checked={selectedMaterial === material}
                          onChange={() => setSelectedMaterial(selectedMaterial === material ? '' : material)}
                          className="w-4 h-4 accent-velmora-gold"
                        />
                        <span className="text-sm">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-velmora-gold"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 200) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-velmora-gold hover:underline"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Mobile Apply Button */}
                {isFilterOpen && (
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full lg:hidden bg-velmora-charcoal text-velmora-cream py-3 mt-6"
                  >
                    Apply Filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-8">
              <div className="hidden md:block text-sm text-velmora-stone">
                Showing {filteredProducts.length} results
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-velmora-sand bg-transparent text-sm focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestsellers">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl font-serif mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  No products found
                </p>
                <p className="text-velmora-stone mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative overflow-hidden bg-velmora-ivory aspect-[3/4] mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-cream text-velmora-charcoal px-6 py-2 text-xs tracking-widest opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-velmora-gold hover:text-velmora-cream"
                        >
                          ADD TO CART
                        </button>
                      </div>
                      <h3
                        className="product-name text-sm mb-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-base font-medium">${product.price}.00</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

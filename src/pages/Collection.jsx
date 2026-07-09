import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function Collection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Material filter
    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
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
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, selectedMaterial, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light">Shop All</h1>
            <p className="text-charcoal-600 mt-2">{filteredProducts.length} products</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-charcoal-900/30 bg-transparent text-sm focus:outline-none focus:border-charcoal-900"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-charcoal-900/30 text-sm"
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div
            className={`${
              isFilterOpen ? 'fixed inset-0 z-40 bg-cream-50 p-6 overflow-y-auto' : 'hidden'
            } md:block md:static md:z-auto md:p-0 md:bg-transparent`}
          >
            <div className="md:sticky md:top-32">
              {/* Mobile Close */}
              {isFilterOpen && (
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="md:hidden absolute top-4 right-4"
                >
                  <X size={20} />
                </button>
              )}

              <h3 className="font-serif text-xl mb-6">Filters</h3>

              {/* Category */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 border-charcoal-900/30 rounded-none focus:ring-0"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Price</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $80', range: [50, 80] },
                    { label: '$80+', range: [80, 200] },
                  ].map((option) => (
                    <label key={option.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange[0] === option.range[0] && priceRange[1] === option.range[1]}
                        onChange={() => setPriceRange(option.range)}
                        className="w-4 h-4 border-charcoal-900/30 rounded-none focus:ring-0"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Material</h4>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === material}
                        onChange={() => setSelectedMaterial(selectedMaterial === material ? null : material)}
                        className="w-4 h-4 border-charcoal-900/30 rounded-none focus:ring-0"
                      />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 200]);
                  setSelectedMaterial(null);
                }}
                className="text-sm text-charcoal-500 hover:text-charcoal-900 underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                      />
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-charcoal-900 px-4 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-charcoal-900 hover:text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="mt-4 space-y-1">
                      <h3 className="product-name text-sm text-charcoal-900">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < Math.floor(product.rating)
                                ? 'star-filled fill-current'
                                : 'star-empty'
                            }
                          />
                        ))}
                      </div>
                      <p className="text-charcoal-900 font-medium">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-charcoal-500">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 200]);
                    setSelectedMaterial(null);
                  }}
                  className="mt-4 text-sm text-charcoal-900 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

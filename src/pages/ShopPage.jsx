import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import products from '../data/products';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'bestsellers', label: 'Best Sellers' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 200]);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-velmora">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Shop All</h1>
          <div className="divider-hairline w-24 mb-6" />
          <p className="font-sans text-lg text-warm-gray">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-3 btn-secondary w-full justify-center"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${
            isFilterOpen ? 'block' : 'hidden lg:block'
          }`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 font-sans text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-charcoal text-white'
                          : 'hover:bg-ivory'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left px-4 py-2 font-sans text-sm transition-colors ${
                        selectedMaterial === material
                          ? 'bg-charcoal text-white'
                          : 'hover:bg-ivory'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-sm">${priceRange[0]}</span>
                    <span className="text-warm-gray">-</span>
                    <span className="font-sans text-sm">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors underline"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              <div className="flex items-center gap-3">
                <label className="font-sans text-sm text-warm-gray">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm border border-sand px-4 py-2 focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-warm-gray mb-4">No products found</p>
                <p className="font-sans text-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);

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
      case 'bestsellers':
        filtered.sort((a, b) => b.bestseller - a.bestseller);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy, priceRange]);

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'Gold');
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSortBy('featured');
    setPriceRange([0, 200]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <p className="text-stone">{filteredProducts.length} products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border border-charcoal"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-8`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium tracking-wide uppercase text-sm">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-xs text-gold hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Category</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat === 'All') {
                      searchParams.delete('category');
                    } else {
                      searchParams.set('category', cat);
                    }
                    setSearchParams(searchParams);
                  }}
                  className={`block text-sm ${
                    selectedCategory === cat ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                  } transition-colors`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Material</h4>
            <div className="space-y-2">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`block text-sm ${
                    selectedMaterial === mat ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                  } transition-colors`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Price</h4>
            <div className="space-y-2">
              {[
                { label: 'Under $50', range: [0, 50] },
                { label: '$50 - $75', range: [50, 75] },
                { label: '$75 - $100', range: [75, 100] },
                { label: 'Over $100', range: [100, 200] }
              ].map((option) => (
                <button
                  key={option.label}
                  onClick={() => setPriceRange(option.range)}
                  className={`block text-sm ${
                    priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                      ? 'text-gold font-medium'
                      : 'text-charcoal-light hover:text-gold'
                  } transition-colors`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-stone text-sm focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="bestsellers">Bestsellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg mb-4">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-gold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative overflow-hidden bg-cream aspect-square mb-4">
                    <img 
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/800x800/F5F0EB/1A1A1A?text=' + product.name.replace(/ /g, '+');
                      }}
                    />
                    
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-charcoal px-4 py-2 text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-white"
                    >
                      <Plus size={16} className="inline mr-2" />
                      Quick Add
                    </button>

                    {product.bestseller && (
                      <div className="absolute top-4 left-4 bg-gold text-white text-xs px-3 py-1 tracking-wide">
                        Bestseller
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg uppercase tracking-wider hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-stone">{product.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="font-medium">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

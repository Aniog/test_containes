import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Plus, SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy]);

  return (
    <div className="px-6 lg:px-12 py-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
          Collection
        </h1>
        <div className="hairline w-24" />
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden flex items-center space-x-2 text-sm tracking-[0.15em] uppercase"
        >
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </button>

        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs tracking-[0.15em] uppercase opacity-70">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-all ${
                    selectedCategory === category
                      ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                      : 'bg-transparent text-[#2C2C2C] border-[#E8DDD0] hover:border-[#C9A96E]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="space-y-2">
            <label className="text-xs tracking-[0.15em] uppercase opacity-70">Material</label>
            <div className="flex gap-2">
              {materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-all ${
                    selectedMaterial === material
                      ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                      : 'bg-transparent text-[#2C2C2C] border-[#E8DDD0] hover:border-[#C9A96E]'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-4">
          <label className="text-xs tracking-[0.15em] uppercase opacity-70">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-[#E8DDD0] bg-transparent text-sm focus:outline-none focus:border-[#C9A96E] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm tracking-[0.15em] uppercase">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase opacity-70 mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 text-sm border transition-all ${
                        selectedCategory === category
                          ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                          : 'bg-transparent text-[#2C2C2C] border-[#E8DDD0]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase opacity-70 mb-4">Material</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => {
                        setSelectedMaterial(material);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 text-sm border transition-all ${
                        selectedMaterial === material
                          ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                          : 'bg-transparent text-[#2C2C2C] border-[#E8DDD0]'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg opacity-70">No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

// Product Card Component for Shop Page
function ProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden mb-6 bg-[#F5F0E8]">
          <img
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] px-8 py-3 text-sm tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#2C2C2C] hover:text-white"
          >
            <Plus size={16} className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="space-y-2">
        <h3 className="product-name text-sm">{product.name}</h3>
        <p className="text-sm opacity-70">{product.description}</p>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-[#E8DDD0]'}
              />
            ))}
          </div>
          <span className="text-sm opacity-70">({product.reviews})</span>
        </div>
        <p className="text-lg font-medium">${product.price}</p>
      </div>
    </div>
  );
}

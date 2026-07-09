import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { products, categories, materials } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      const matMatch = selectedMaterial === 'All' || p.material === selectedMaterial;
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && matMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat !== 'All') {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-2">DISCOVER OUR COLLECTION</p>
          <h1 className="heading-serif text-5xl tracking-[0.04em]">Shop All</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b border-[#E5E0D8] mb-4"
            >
              <span className="text-sm tracking-[0.08em]">FILTERS</span>
              <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
            </button>

            <div className={`space-y-8 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#B89778]' : 'hover:text-[#B89778]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#B89778]' : 'hover:text-[#B89778]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex justify-between text-xs text-[#8A8178] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedMaterial('All');
                  setPriceRange([0, 120]);
                  setSearchParams({});
                }}
                className="text-xs tracking-[0.08em] text-[#8A8178] hover:text-[#B89778]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
              <p className="text-sm text-[#8A8178]">{filteredProducts.length} products</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#8A8178]">Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-image-container aspect-[4/3.5] bg-[#F8F6F3] relative">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="product-image product-image-primary w-full h-full object-cover"
                      />
                      <img 
                        src={product.images[1]} 
                        alt={product.name}
                        className="product-image product-image-secondary w-full h-full object-cover"
                      />
                      <button 
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className="quick-add btn btn-accent text-xs px-6 py-2.5"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-[0.12em] mb-1.5">{product.name}</p>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#8A8178]">${product.price}</p>
                      <div className="flex items-center gap-1 text-xs text-[#B89778]">
                        <Star size={12} fill="#B89778" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#8A8178]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
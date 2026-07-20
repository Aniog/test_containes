import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter (simulated)
    if (selectedMaterial) {
      result = result.filter(p => p.material.includes(selectedMaterial));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, priceRange, sortBy, selectedMaterial]);

  const toggleCategory = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-2">Discover</div>
        <h1 className="font-serif text-5xl tracking-[0.02em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            {/* Categories */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Category</div>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="accent-[#C5A46E]"
                    />
                    {cat.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Price Range</div>
              <div className="space-y-2 text-sm">
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#C5A46E]"
                />
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Material</div>
              <div className="space-y-3 text-sm">
                {['18K Gold Plated', 'Sterling Silver'].map((m) => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === m}
                      onChange={() => setSelectedMaterial(selectedMaterial === m ? '' : m)}
                      className="accent-[#C5A46E]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#2A2A2A]">
            <div className="text-sm text-[#A3A3A3]">{filteredProducts.length} products</div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input text-sm py-2"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A–Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A] mb-5">
                  <img src={product.image1} alt={product.name} className="product-image-primary absolute inset-0 w-full h-full object-cover" />
                  <img src={product.image2} alt={product.name} className="product-image-secondary absolute inset-0 w-full h-full object-cover" />
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="quick-add absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs px-8 py-2.5"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="product-name font-serif text-base tracking-[0.08em] mb-1.5">{product.name}</div>
                <div className="text-[#C5A46E]">${product.price}</div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#A3A3A3]">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
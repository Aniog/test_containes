import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      return catMatch && priceMatch && matMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
        <h1 className="font-serif text-5xl tracking-[0.05em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category Filter */}
            <div>
              <p className="filter-label">Category</p>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#8B7355]"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div>
              <p className="filter-label">Price Range</p>
              <div className="flex items-center gap-3 text-sm">
                <span>${priceRange[0]}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1 accent-[#8B7355]"
                />
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <p className="filter-label">Material</p>
              {materials.map(mat => (
                <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                    className="accent-[#8B7355]"
                  />
                  <span className="text-sm">{mat}</span>
                </label>
              ))}
            </div>

            <button 
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 120]);
                setSelectedMaterials([]);
              }}
              className="text-xs tracking-[0.1em] text-[#8B7355] hover:text-[#2C2825]"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
            <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5E0D8] px-4 py-2 bg-transparent focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F4F1EB] overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
                  />
                  <img 
                    src={product.images[1]} 
                    alt={product.name}
                    className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                  />
                </Link>
                <div className="pt-4">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                  </Link>
                  <p className="text-[#6B665F] text-sm mb-3">${product.price}</p>
                  <button 
                    onClick={() => addToCart(product, product.variants[0])}
                    className="btn btn-outline text-xs py-2 px-6 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#6B665F]">
              No products match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import { useCart } from '../context/CartContext';

function Shop() {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

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

  let filteredProducts = products.filter(p => {
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return catMatch && matMatch && priceMatch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 pb-20">
      <div className="py-12 text-center border-b border-[#E5DFD3]">
        <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F]">Discover</p>
        <h1 className="serif text-5xl mt-2">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976F]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2 text-sm">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#B8976F]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="text-sm text-[#6B665F]">
                ${priceRange[0]} — ${priceRange[1]}
              </div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#B8976F] mt-2"
              />
            </div>

            <button 
              onClick={() => {
                setSelectedCategories([]);
                setSelectedMaterials([]);
                setPriceRange([0, 120]);
              }}
              className="text-xs uppercase tracking-[0.1em] text-[#6B665F] hover:text-[#2C2825]"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container bg-[#F8F5F1]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image product-image-primary"
                    />
                    <img 
                      src={product.imageSecondary} 
                      alt={product.name}
                      className="product-image product-image-secondary"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name text-sm tracking-[0.15em] mb-1 pr-8">{product.name}</p>
                  </Link>
                  <p className="text-sm text-[#6B665F] mb-3">${product.price}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="quick-add btn btn-outline text-xs"
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
}

export default Shop;
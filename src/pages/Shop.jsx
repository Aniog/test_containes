import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

const Shop = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery] = useState(searchParams.get('search') || '');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  let filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'All' || p.material === selectedMaterial;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMaterial && matchesPrice && matchesSearch;
  });

  // Sort
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-2">DISCOVER OUR COLLECTION</div>
        <h1 className="serif text-5xl tracking-[0.05em]">Shop</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category */}
            <div>
              <div className="filter-label">Category</div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left py-1.5 text-sm ${selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'text-[#4A4640] hover:text-[#8B7355]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              {materials.map(mat => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`block w-full text-left py-1.5 text-sm ${selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'text-[#4A4640] hover:text-[#8B7355]'}`}
                >
                  {mat}
                </button>
              ))}
            </div>

            {/* Price */}
            <div>
              <div className="filter-label mb-4">Price Range</div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} 
                className="w-full accent-[#8B7355]"
              />
              <div className="flex justify-between text-sm mt-2 text-[#8A8178]">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
            <div className="text-sm text-[#8A8178]">{filteredProducts.length} products</div>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F5F1]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <img src={product.imageSecondary} alt={product.name} className="secondary w-full h-full object-cover" />
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                    <div className="text-sm text-[#8A8178]">${product.price}</div>
                  </Link>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-primary text-xs py-2.5 px-8"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#8A8178]">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
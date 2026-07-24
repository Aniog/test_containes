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
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products
    .filter(p => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
          <h1 className="serif text-5xl mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <div className="text-xs tracking-[0.1em] mb-4">CATEGORY</div>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#8B7355]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div>
                <div className="text-xs tracking-[0.1em] mb-4">PRICE RANGE</div>
                <div className="flex items-center gap-3 text-sm">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="input w-20 py-2 text-sm"
                  />
                  <span className="text-[#6B665F]">to</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="input w-20 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-image-container">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="product-image product-image-primary"
                      />
                      <img 
                        src={product.images[1]} 
                        alt={product.name}
                        className="product-image product-image-secondary"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm mb-1 pr-2">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6B665F] mb-3">${product.price}</p>
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
              <div className="text-center py-20 text-[#6B665F]">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
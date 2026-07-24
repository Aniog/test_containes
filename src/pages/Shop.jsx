import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({ category: 'All', material: 'All', price: 'All' });
  const [sort, setSort] = useState('featured');

  const filteredProducts = products
    .filter(p => {
      if (filters.category !== 'All' && p.category !== filters.category) return false;
      if (filters.material !== 'All' && p.material !== filters.material) return false;
      if (filters.price === 'Under $50' && p.price >= 50) return false;
      if (filters.price === '$50–$80' && (p.price < 50 || p.price > 80)) return false;
      if (filters.price === 'Over $80' && p.price <= 80) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return 0;
    });

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const materials = ['All', 'Gold'];
  const priceRanges = ['All', 'Under $50', '$50–$80', 'Over $80'];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-12 text-center border-b border-[#E5DFD3]">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355]">Discover</p>
          <h1 className="serif text-5xl mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8 text-sm">
              <div>
                <p className="uppercase tracking-wider mb-4 text-[#8B7355]">Category</p>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilters({ ...filters, category: cat })}
                    className={`block py-1 ${filters.category === cat ? 'text-[#8B7355]' : 'text-[#6B665F] hover:text-[#2C2825]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div>
                <p className="uppercase tracking-wider mb-4 text-[#8B7355]">Price</p>
                {priceRanges.map(range => (
                  <button
                    key={range}
                    onClick={() => setFilters({ ...filters, price: range })}
                    className={`block py-1 ${filters.price === range ? 'text-[#8B7355]' : 'text-[#6B665F] hover:text-[#2C2825]'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setFilters({ category: 'All', material: 'All', price: 'All' })}
                className="text-xs tracking-wider text-[#8B7355] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
              <select 
                value={sort} 
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-[#E5DFD3] px-4 py-2 text-sm focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#E5DFD3]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      src={product.hoverImage} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </Link>
                  <div className="pt-5">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                    </Link>
                    <p className="text-[#6B665F] text-sm mb-4">${product.price}</p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="text-xs tracking-[0.1em] uppercase border-b border-[#2C2825] hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "VIVID AURA JEWELS", price: 42, category: "earrings", material: "gold" },
  { id: 2, name: "MAJESTIC FLORA NECTAR", price: 68, category: "necklaces", material: "gold" },
  { id: 3, name: "GOLDEN SPHERE HUGGIES", price: 38, category: "huggies", material: "gold" },
  { id: 4, name: "AMBER LACE EARRINGS", price: 54, category: "earrings", material: "gold" },
  { id: 5, name: "ROYAL HEIRLOOM SET", price: 95, category: "sets", material: "gold" }
];

function ShopPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('featured');

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="font-['Cormorant_Garamond'] text-2xl tracking-[0.2em] uppercase text-[#2C2C2C]">
              Velmora
            </h1>
            <div className="flex items-center space-x-8">
              <a href="/shop" className="text-sm tracking-wider uppercase">Shop</a>
              <a href="/collections" className="text-sm tracking-wider uppercase">Collections</a>
              <a href="/about" className="text-sm tracking-wider uppercase">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20 mt-20">
        <h2 className="font-['Cormorant_Garamond'] text-4xl text-center mb-12">Shop All</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm tracking-wider uppercase px-4 py-2 border ${
                selectedCategory === cat
                  ? 'border-[#C9A96E] bg-[#C9A96E] text-white'
                  : 'border-gray-300 hover:border-[#C9A96E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex justify-end mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer group"
            >
              <div className="aspect-square bg-[#F5F0EB] mb-4 flex items-center justify-center">
                <p className="text-[#2C2C2C] text-center p-4">{product.name}</p>
              </div>
              <h4 className="text-sm tracking-wider uppercase mb-2">{product.name}</h4>
              <p className="font-['Cormorant_Garamond'] text-lg">${product.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;

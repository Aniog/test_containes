import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'VIVID AURA JEWELS', price: 42, desc: 'Gold ear cuff with crystal accent', category: 'Earrings', material: 'Gold', rating: 4.8 },
  { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, desc: 'Multicolor floral crystal necklace', category: 'Necklaces', material: 'Gold', rating: 4.9 },
  { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, desc: 'Chunky gold dome huggie earrings', category: 'Huggies', material: 'Gold', rating: 4.7 },
  { id: 4, name: 'AMBER LACE EARRINGS', price: 54, desc: 'Textured gold filigree drop earrings', category: 'Earrings', material: 'Gold', rating: 4.6 },
  { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, desc: 'Gift-boxed earring + necklace set', category: 'Sets', material: 'Gold', rating: 5.0 },
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-center mb-12">Shop All</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-serif text-xl uppercase tracking-wide mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'bg-velmora-gold text-white'
                          : 'hover:bg-velmora-beige'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4">Material</h4>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedMaterial === mat
                          ? 'bg-velmora-gold text-white'
                          : 'hover:bg-velmora-beige'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4">Price Range</h4>
                <div className="flex gap-4 items-center">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 px-2 py-1 border border-gray-300 text-sm"
                    min="0"
                    max="100"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100])}
                    className="w-20 px-2 py-1 border border-gray-300 text-sm"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-velmora-gray">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-64 bg-velmora-beige rounded-md mb-4 flex items-center justify-center group-hover:bg-velmora-gold/10 transition-colors duration-300">
                    <span className="text-velmora-gray">✦ Jewelry Image</span>
                  </div>
                  <h3 className="font-serif text-lg uppercase tracking-wide mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-velmora-gold font-semibold text-lg">${product.price}</p>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-velmora-gray">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

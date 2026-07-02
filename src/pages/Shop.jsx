import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
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

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)]">Discover</p>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[var(--color-gold)]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[var(--color-gold)]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="filter-label">Price Range</p>
                <div className="flex items-center gap-3 text-sm">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-16 border border-[var(--color-border)] px-2 py-1"
                  />
                  <span>—</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-16 border border-[var(--color-border)] px-2 py-1"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <p className="text-sm text-[var(--color-taupe)]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[var(--color-border)] px-4 py-2 bg-transparent"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-[var(--color-light-gray)]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                      src={product.hoverImage} 
                      alt={product.name} 
                      className="product-hover-image absolute inset-0 w-full h-full object-cover opacity-0"
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[var(--color-taupe)] mb-4">${product.price}</p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="text-xs tracking-[0.1em] uppercase border-b border-[var(--color-base)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all"
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
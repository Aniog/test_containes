import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && matMatch && priceMatch;
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

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
        <h1 className="serif text-5xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category Filter */}
            <div>
              <div className="text-xs tracking-[0.15em] mb-4">CATEGORY</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
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
            </div>

            {/* Material Filter */}
            <div>
              <div className="text-xs tracking-[0.15em] mb-4">MATERIAL</div>
              <div className="space-y-2 text-sm">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#8B7355]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="text-xs tracking-[0.15em] mb-4">PRICE</div>
              <div className="text-sm text-[#6B665F]">
                ${priceRange[0]} — ${priceRange[1]}
              </div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#8B7355] mt-2"
              />
            </div>

            <button 
              onClick={() => {
                setSelectedCategories([]);
                setSelectedMaterials([]);
                setPriceRange([0, 120]);
              }}
              className="text-xs tracking-[0.1em] underline"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
            <div className="text-sm text-[#6B665F]">{filteredProducts.length} products</div>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border border-[#E5E0D8] px-4 py-2 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                <div className="aspect-[4/3.5] bg-[#E5E0D8] relative overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={product.name}
                      className="secondary absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <button 
                    onClick={(e) => handleQuickAdd(product, e)}
                    className="quick-add btn btn-primary text-xs px-8"
                  >
                    QUICK ADD
                  </button>
                </div>
                <div>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B665F]">{product.category}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
              </Link>
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
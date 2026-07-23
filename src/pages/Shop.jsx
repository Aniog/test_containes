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

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && priceMatch;
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

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product, product.variants[0]);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-12 pb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
          <h1 className="font-serif text-5xl tracking-[0.05em] mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <div className="filter-label mb-4">Category</div>
                <div className="space-y-2.5">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer text-sm">
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

              {/* Price Filter */}
              <div>
                <div className="filter-label mb-4">Price Range</div>
                <div className="space-y-2 text-sm text-[#6B635C]">
                  <div>${priceRange[0]} — ${priceRange[1]}</div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <div className="filter-label mb-4">Tone</div>
                <div className="space-y-2.5 text-sm">
                  {materials.map(m => (
                    <label key={m} className="flex items-center gap-2.5 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(m)}
                        onChange={() => setSelectedMaterials(prev => 
                          prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]
                        )}
                        className="accent-[#8B7355]"
                      />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD6]">
              <span className="text-sm text-[#6B635C]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD6] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-image-container aspect-[4/3.5] bg-[#F8F5F1] mb-5 overflow-hidden">
                      <img 
                        src={product.images.primary} 
                        alt={product.name}
                        className="product-image primary absolute inset-0 w-full h-full object-cover"
                      />
                      <img 
                        src={product.images.secondary} 
                        alt={product.name}
                        className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0"
                      />
                    </div>
                  </Link>
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#8B7355] transition-colors">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6B635C] mb-4">${product.price}</p>
                    <button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className="text-xs tracking-[0.1em] border-b border-[#8B7355] pb-0.5 hover:text-[#8B7355] transition-colors"
                    >
                      ADD TO CART
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
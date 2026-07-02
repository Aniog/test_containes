import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

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
      if (sortBy === 'rating') return b.rating - a.rating;
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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  const activeFilterCount = selectedCategories.length + selectedMaterials.length;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-2">Discover</div>
            <h1 className="serif text-4xl tracking-[0.05em]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm tracking-[0.1em] border border-[#E5DFD3] px-4 py-2"
            >
              <Filter size={16} /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between md:hidden">
                <div className="uppercase text-xs tracking-[0.15em]">Filters</div>
                <button onClick={() => setShowFilters(false)}><X size={18} /></button>
              </div>

              {/* Categories */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4">Category</div>
                <div className="space-y-2.5 text-sm">
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

              {/* Materials */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4">Material</div>
                <div className="space-y-2.5 text-sm">
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

              {/* Price Range */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4">Price Range</div>
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

              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-xs tracking-[0.1em] text-[#8B7355] hover:underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="text-sm text-[#6B665F] mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
                    <div className="product-image-container bg-[#F8F5F1]">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <img src={product.hoverImage} alt={product.name} className="product-image-hover" />
                      <button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="quick-add btn btn-gold text-xs py-2.5 px-6"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="product-name text-sm tracking-wider mb-1 pr-2">{product.name}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6B665F]">${product.price}</span>
                        <div className="flex items-center gap-1 text-xs text-[#C5A46E]">
                          <Star size={12} fill="currentColor" /> {product.rating}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

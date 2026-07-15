import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between py-10 border-b border-[#E5E1DB]">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355]">DISCOVER</p>
            <h1 className="serif text-5xl">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5E1DB] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden text-sm tracking-widest"
            >
              FILTERS
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-10">
          {/* Filters Sidebar */}
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-10">
              {/* Categories */}
              <div>
                <p className="filter-label mb-4">Category</p>
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

              {/* Material */}
              <div>
                <p className="filter-label mb-4">Material</p>
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

              {/* Price */}
              <div>
                <p className="filter-label mb-4">Price Range</p>
                <div className="text-sm text-[#6B6763]">
                  ${priceRange[0]} — ${priceRange[1]}
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355] mt-3"
                />
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([0, 120]);
                }}
                className="text-xs tracking-widest underline"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B6763] mb-6">{filteredProducts.length} products</p>
            
            <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F8F6F3] overflow-hidden">
                    <img 
                      src={product.images.primary} 
                      alt={product.name}
                      className="primary absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                      src={product.images.secondary} 
                      alt={product.name}
                      className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                    />
                  </Link>
                  <div className="pt-4 pb-2 px-1">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6B6763]">${product.price}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product, product.variants[0])}
                    className="quick-add btn btn-primary text-xs py-2.5 px-8"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-[#6B6763]">
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
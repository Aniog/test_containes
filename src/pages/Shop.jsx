import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

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

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Browse</span>
            <h1 className="serif text-4xl mt-1">All Jewelry</h1>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#D4C9B8] bg-transparent px-4 py-2 outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-sm tracking-[0.08em] uppercase border border-[#D4C9B8] px-4 py-2"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
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
                <p className="filter-label">Material</p>
                <div className="space-y-2 text-sm">
                  {['Gold', 'Silver'].map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
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
                <p className="filter-label">Price Range</p>
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
                className="text-xs tracking-[0.08em] uppercase text-[#8B7355] hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <p className="text-[#6B665F]">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[#E5DFD6]">
                      <img 
                        src={product.image1} 
                        alt={product.name}
                        className="product-image primary absolute inset-0 w-full h-full object-cover"
                      />
                      <img 
                        src={product.image2} 
                        alt={product.name}
                        className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0"
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                      </Link>
                      <p className="text-sm text-[#6B665F] mb-3">${product.price}</p>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-outline w-full text-xs py-2.5"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
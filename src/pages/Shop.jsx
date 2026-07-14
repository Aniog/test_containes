import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return categoryMatch && materialMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</p>
        <h1 className="serif text-4xl tracking-[0.05em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filter Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category Filter */}
            <div>
              <p className="filter-label">Category</p>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976F]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <p className="filter-label">Material</p>
              <div className="space-y-2">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#B8976F]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <p className="filter-label mb-4">Price Range</p>
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#B8976F]"
                />
                <div className="flex justify-between text-sm text-[#6B665F]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setSelectedCategories([]);
                setSelectedMaterials([]);
                setPriceRange([0, 120]);
              }}
              className="text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2823]"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
            <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5E0D8] px-4 py-2 bg-white focus:outline-none focus:border-[#B8976F]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img 
                    src={product.imageSecondary} 
                    alt={product.name}
                    className="secondary absolute inset-0 w-full h-full object-cover"
                  />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="quick-add btn btn-gold text-xs px-6 py-2.5"
                  >
                    Add to Cart
                  </button>
                </Link>
                <div className="pt-4 pb-2">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                  </Link>
                  <p className="text-sm text-[#6B665F]">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B665F]">No products match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
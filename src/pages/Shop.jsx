import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery] = useState(searchParams.get('search') || '');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Sort
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
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, priceRange, selectedMaterials, sortBy, searchQuery]);

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

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h1 className="serif text-5xl">Shop</h1>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="input text-sm py-2"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
              {/* Categories */}
              <div>
                <div className="filter-label">Category</div>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B89778]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="flex items-center gap-3 text-sm">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="input w-20 py-1.5 text-sm"
                  />
                  <span className="text-[#6B665F]">to</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                    className="input w-20 py-1.5 text-sm"
                  />
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#B89778]"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([0, 120]);
                  setSearchParams({});
                }}
                className="text-xs tracking-widest text-[#6B665F] hover:text-[#B89778]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <p className="text-[#6B665F]">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE5]">
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                      <img src={product.hoverImage} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover" />
                      <button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="quick-add btn btn-gold text-xs py-2.5 px-6"
                      >
                        Quick Add
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                      <p className="text-[#6B665F] text-sm">${product.price}</p>
                    </div>
                  </Link>
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
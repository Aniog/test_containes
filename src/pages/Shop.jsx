import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const activeFilterCount = selectedCategories.length + selectedMaterials.length + 
    (priceRange[0] !== 0 || priceRange[1] !== 120 ? 1 : 0);

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Discover</p>
            <h1 className="font-serif text-4xl">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#E5E0D8] bg-white px-4 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm border border-[#E5E0D8] px-4 py-2"
            >
              <Filter size={16} /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex justify-between items-center md:hidden">
                <span className="font-medium">Filters</span>
                <button onClick={() => setShowFilters(false)}><X size={18} /></button>
              </div>

              {/* Categories */}
              <div>
                <p className="filter-label mb-3">Category</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
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
                <p className="filter-label mb-3">Material</p>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
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
                <p className="filter-label mb-3">Price Range</p>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-sm text-[#6B665F] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-sm text-[#8B7355] hover:underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B665F] mb-6">{filteredProducts.length} products</p>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="product-image-container bg-[#F8F5F1]">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="product-image product-image-primary"
                        />
                        <img 
                          src={product.images[1] || product.images[0]} 
                          alt={product.name}
                          className="product-image product-image-secondary"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <p className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</p>
                      </Link>
                      <div className="flex justify-between items-center">
                        <p className="text-[#8B7355] font-medium">${product.price}</p>
                        <button 
                          onClick={(e) => handleAddToCart(product, e)}
                          className="quick-add btn btn-primary text-xs py-2 px-6"
                        >
                          Add to Cart
                        </button>
                      </div>
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
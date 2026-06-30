import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial);
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
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-[#6B6560]">DISCOVER THE COLLECTION</p>
          <h1 className="font-serif text-5xl tracking-[-0.02em] mt-2">Shop All</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        if (cat !== 'All') {
                          setSearchParams({ category: cat });
                        } else {
                          setSearchParams({});
                        }
                      }}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#B8976E] font-medium' : 'text-[#2C2825] hover:text-[#6B6560]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#B8976E] font-medium' : 'text-[#2C2825] hover:text-[#6B6560]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="filter-label mb-4">Price Range</p>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8976E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B6560] mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
              <p className="text-sm text-[#6B6560]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-[#E5E0D8] bg-transparent pr-8"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A–Z</option>
              </select>
            </div>

            <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                  <div className="relative aspect-[4/3.5] bg-[#F0EBE3] overflow-hidden">
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
                      className="quick-add btn btn-gold text-xs py-2.5 px-6"
                    >
                      Quick Add
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                    <p className="text-sm text-[#6B6560]">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#6B6560]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
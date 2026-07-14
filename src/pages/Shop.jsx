import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <div className="bg-[#F8F5F1] min-h-screen pt-20">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-1">DISCOVER</p>
            <h1 className="font-serif text-4xl tracking-[1px]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#D4C5B5] px-4 py-2 text-sm tracking-[1px] focus:outline-none"
            >
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="name">A — Z</option>
            </select>
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="md:hidden text-sm tracking-[1px] border border-[#D4C5B5] px-4 py-2"
            >
              FILTERS
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <p className="text-xs tracking-[2px] mb-4">CATEGORY</p>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
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
                <p className="text-xs tracking-[2px] mb-4">MATERIAL</p>
                <div className="space-y-2.5">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
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
                <p className="text-xs tracking-[2px] mb-4">PRICE RANGE</p>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-sm text-[#6B6058]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="text-xs tracking-[2px] underline hover:text-[#8B7355]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B6058] mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B6058] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm tracking-[2px] underline">CLEAR FILTERS</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[4/3] bg-[#EDE8E0] overflow-hidden mb-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={product.images[1] || product.images[0]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/95 text-xs tracking-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8B7355] hover:text-white"
                      >
                        QUICK ADD
                      </button>
                    </div>
                    <div className="px-1">
                      <p className="font-serif text-sm tracking-[1.5px] mb-1">{product.name}</p>
                      <p className="text-sm text-[#6B6058]">${product.price}</p>
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
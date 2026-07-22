import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, materials } from '@/data/products';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

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

  let filteredProducts = products.filter((p) => {
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
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#C5A26F]">DISCOVER</p>
            <h1 className="font-serif text-4xl tracking-[-0.5px]">All Jewelry</h1>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-[#EDE8DF] px-4 py-2 text-sm tracking-wide focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A - Z</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8 text-sm">
              {/* Category */}
              <div>
                <p className="tracking-[2px] mb-4 text-[#C5A26F]">CATEGORY</p>
                <div className="space-y-2 text-[#6B655C]">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#C5A26F]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="tracking-[2px] mb-4 text-[#C5A26F]">MATERIAL</p>
                <div className="space-y-2 text-[#6B655C]">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#C5A26F]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="tracking-[2px] mb-4 text-[#C5A26F]">PRICE</p>
                <div className="text-[#6B655C]">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[#C5A26F]"
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span>$0</span>
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
                className="text-xs tracking-[1.5px] text-[#C5A26F] hover:underline"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B655C] mb-6">{filteredProducts.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="relative aspect-[4/3.5] bg-[#EDE8DF] overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-sm tracking-[1.5px] mb-1">{product.name}</p>
                    <p className="text-sm text-[#6B655C]">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="text-[#6B655C]">No products match your filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
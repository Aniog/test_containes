import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter((p) => {
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
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCats);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-10">
        <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">Discover</span>
        <h1 className="serif text-5xl mt-1">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <p className="uppercase tracking-[0.1em] text-xs mb-4">Category</p>
              <div className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B89B6E]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="uppercase tracking-[0.1em] text-xs mb-4">Price Range</p>
              <div className="text-sm text-[#6B655F]">
                ${priceRange[0]} — ${priceRange[1]}
              </div>
              <input
                type="range"
                min="0"
                max="120"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#B89B6E] mt-2"
              />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD6]">
            <p className="text-sm text-[#6B655F]">{filteredProducts.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD6] px-4 py-2 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#F2EFEA]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.imageAlt}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                  </Link>
                  <p className="text-sm text-[#6B655F] mb-3">${product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="text-xs uppercase tracking-[0.1em] text-[#B89B6E] hover:text-[#8C7250]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#6B655F]">
              No products match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
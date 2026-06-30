import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products
    .filter((p) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-10 border-b border-[#E8E4DC]">
          <p className="text-xs tracking-[0.15em] text-[#C5A26F]">DISCOVER</p>
          <h1 className="serif text-5xl tracking-[0.02em] mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="text-xs tracking-[0.1em] mb-4 text-[#C5A26F]">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#2C2C2C]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[0.1em] mb-4 text-[#C5A26F]">PRICE RANGE</div>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#2C2C2C]"
                  />
                  <div className="flex justify-between text-sm text-[#9A8F7D]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E8E4DC]">
              <p className="text-sm text-[#9A8F7D]">{filteredProducts.length} pieces</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[#E8E4DC] px-4 py-2 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A — Z</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[#E8E4DC]">
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

                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-[0.1em] mb-1 pr-2">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#9A8F7D]">${product.price}</p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="quick-add btn-primary text-xs px-6 py-2.5"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-[#9A8F7D]">
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

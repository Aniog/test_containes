import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products, categories } from '../../data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 aspect-[3/4]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addItem(product, product.variants[0])}
          className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/90 text-white py-3 text-xs tracking-wider uppercase flex items-center justify-center gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1 group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  );
}

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over100') {
      result = result.filter((p) => p.price > 100);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-padding py-8 border-b border-[#e5e0db]">
        <h1 className="serif-heading text-3xl md:text-4xl mb-2">Shop All</h1>
        <p className="text-sm text-gray-500">{filteredProducts.length} pieces</p>
      </div>

      <div className="container-padding py-8">
        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 text-sm tracking-wider uppercase mb-6"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed md:static inset-0 md:inset-auto z-40 md:z-auto w-72 md:w-56 flex-shrink-0 bg-[#faf8f5] md:bg-transparent p-6 md:p-0 transition-transform ${
              filterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
          >
            {filterOpen && (
              <button
                className="absolute top-4 right-4 md:hidden"
                onClick={() => setFilterOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="md:sticky md:top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 font-medium">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm ${selectedCategory === 'all' ? 'text-[#c9a96e] font-medium' : 'text-gray-600 hover:text-[#c9a96e]'} transition-colors`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm capitalize ${selectedCategory === cat.id ? 'text-[#c9a96e] font-medium' : 'text-gray-600 hover:text-[#c9a96e]'} transition-colors`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 font-medium">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block text-sm ${priceRange === option.value ? 'text-[#c9a96e] font-medium' : 'text-gray-600 hover:text-[#c9a96e]'} transition-colors`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 font-medium">Material</h3>
                <div className="space-y-2">
                  <button className="block text-sm text-gray-600 hover:text-[#c9a96e] transition-colors">
                    18K Gold Plated
                  </button>
                  <button className="block text-sm text-gray-600 hover:text-[#c9a96e] transition-colors">
                    Silver Tone
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#e5e0db] px-3 py-2 bg-transparent focus:outline-none focus:border-[#c9a96e]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-sm tracking-wider uppercase text-[#c9a96e] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

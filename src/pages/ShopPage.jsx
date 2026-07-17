import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Shop All</h1>
        <div className="divider-hairline w-16" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden btn-premium-outline w-full"
        >
          {isMobileFilterOpen ? 'Close Filters' : 'Filter & Sort'}
        </button>

        {/* Sidebar Filters */}
        <aside className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-[#C9A96E] font-medium'
                        : 'text-[#8A8580] hover:text-[#1A1A1A]'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-medium mb-4">Price</h3>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 - $80', range: [50, 80] },
                  { label: '$80+', range: [80, 200] },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setPriceRange(option.range)}
                    className={`block text-sm ${
                      priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                        ? 'text-[#C9A96E] font-medium'
                        : 'text-[#8A8580] hover:text-[#1A1A1A]'
                    } transition-colors`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-[#8A8580]">
              {filteredAndSortedProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-[#E8E4DF] text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative img-hover-zoom bg-[#F5F0EB] aspect-square mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                    />
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#1A1A1A] px-4 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C9A96E] hover:text-white"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div>
                    <h3 className="product-name text-[#1A1A1A] mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">${product.price}</span>
                      <div className="flex items-center text-sm text-[#8A8580]">
                        <svg className="w-4 h-4 text-[#C9A96E] mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#8A8580]">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

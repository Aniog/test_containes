import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const selectedCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const sortedAndFilteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (sort) => {
    const newParams = new URLSearchParams(searchParams);
    if (sort === 'featured') {
      newParams.delete('sort');
    } else {
      newParams.set('sort', sort);
    }
    setSearchParams(newParams);
  };

  const handleQuickAdd = (product) => {
    addToCart(product, 1);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-light mb-4 tracking-wide">Shop All</h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-medium tracking-widest uppercase text-sm mb-6">Category</h3>
              <div className="space-y-3 mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-gold font-medium'
                        : 'text-gray-600 hover:text-charcoal'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium tracking-widest uppercase text-sm mb-6">Material</h3>
                <div className="space-y-3">
                  {['Gold', 'Silver'].map(material => (
                    <label key={material} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded accent-gold"
                      />
                      <span className="text-sm text-gray-600">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-gray-600">
                {sortedAndFilteredProducts.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium"
                >
                  <SlidersHorizontal size={16} />
                  Filter
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="text-sm border-gray-300 focus:border-gold focus:outline-none py-2 px-3"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bestsellers">Best Sellers</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedAndFilteredProducts.map(product => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden bg-white mb-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full aspect-square object-cover"
                      />

                      {/* Quick Add Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuickAdd(product);
                        }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-cream px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-charcoal"
                      >
                        Add to Cart
                      </button>

                      {product.isNew && (
                        <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 text-xs tracking-widest uppercase font-medium">
                          New
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif text-lg mb-2 tracking-widest">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={14} className="fill-gold text-gold" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                      <p className="text-charcoal font-medium">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {sortedAndFilteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-medium tracking-widest uppercase">Filter</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="font-medium mb-4">Category</h4>
              <div className="space-y-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      handleCategoryChange(category);
                      setIsFilterOpen(false);
                    }}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-gold font-medium'
                        : 'text-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

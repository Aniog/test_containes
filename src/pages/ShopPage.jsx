import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const selectedCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredAndSortedProducts = useMemo(() => {
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
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => b.featured - a.featured);
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <p className="text-velmora-charcoal">
          {filteredAndSortedProducts.length} products
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 text-sm tracking-wide"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <div className="hidden md:flex items-center gap-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateFilter('category', category)}
              className={`text-sm tracking-wide pb-2 border-b-2 transition-colors ${
                selectedCategory === category
                  ? 'border-velmora-gold text-velmora-deep'
                  : 'border-transparent text-velmora-charcoal hover:text-velmora-deep'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="ml-auto">
          <select
            value={sortBy}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="px-4 py-2 border border-velmora-gold-light bg-transparent text-sm tracking-wide focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="font-serif text-lg mb-4">Category</h4>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      updateFilter('category', category);
                      setIsFilterOpen(false);
                    }}
                    className={`block text-sm ${
                      selectedCategory === category ? 'text-velmora-gold' : 'text-velmora-charcoal'
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-velmora-soft-gray aspect-square mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-deep px-6 py-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="font-serif text-sm uppercase tracking-wide mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-velmora-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-velmora-charcoal">({product.reviews})</span>
              </div>
              <p className="font-serif text-lg">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-2xl mb-4">No products found</p>
          <p className="text-velmora-charcoal mb-8">Try adjusting your filters</p>
          <button
            onClick={() => {
              setSearchParams({});
            }}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

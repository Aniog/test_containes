import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Filter, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f0eb] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#2c2825] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-[#2c2825] py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-[#2c2825] hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-[#d4a853] fill-[#d4a853]' : 'text-[#e8e4df]'
              }`}
            />
          ))}
          <span className="text-xs text-[#9a9490] ml-1">({product.reviews})</span>
        </div>
        <h3 className="velmora-product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#b8860b] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b6560]">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="velmora-heading text-sm tracking-[0.15em] mb-4">Category</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Jewelry' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={option.value}
                checked={selectedCategory === option.value}
                onChange={() => setSelectedCategory(option.value)}
                className="accent-[#b8860b]"
              />
              <span className="text-sm text-[#6b6560]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="velmora-divider" />

      <div>
        <h3 className="velmora-heading text-sm tracking-[0.15em] mb-4">Material</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: 'Gold Tone' },
            { value: 'silver', label: 'Silver Tone' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                value={option.value}
                checked={selectedMaterial === option.value}
                onChange={() => setSelectedMaterial(option.value)}
                className="accent-[#b8860b]"
              />
              <span className="text-sm text-[#6b6560]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="velmora-divider" />

      <div>
        <h3 className="velmora-heading text-sm tracking-[0.15em] mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-', label: 'Over $100' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={priceRange === option.value}
                onChange={() => setPriceRange(option.value)}
                className="accent-[#b8860b]"
              />
              <span className="text-sm text-[#6b6560]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 sm:pt-24">
      {/* Header */}
      <div className="bg-[#f3f0eb] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Collection</p>
          <h1 className="velmora-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em]">
            All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[#6b6560]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[#6b6560]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;

import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);

  // Get unique categories and materials
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const materials = ['All', ...new Set(products.map(p => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 200]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container-luxury py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-4xl mb-2">Shop All</h1>
            <p className="text-sm text-gray-600">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A96E]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm"
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0 bg-white md:bg-transparent p-6 md:p-0 fixed md:relative inset-0 z-40 md:z-auto overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-serif text-sm uppercase tracking-wider mb-4">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      if (category === 'All') {
                        searchParams.delete('category');
                        setSearchParams(searchParams);
                      } else {
                        searchParams.set('category', category);
                        setSearchParams(searchParams);
                      }
                    }}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-[#C9A96E] font-medium'
                        : 'text-gray-700 hover:text-[#C9A96E]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h4 className="font-serif text-sm uppercase tracking-wider mb-4">
                Material
              </h4>
              <div className="space-y-2">
                {materials.map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block text-sm ${
                      selectedMaterial === material
                        ? 'text-[#C9A96E] font-medium'
                        : 'text-gray-700 hover:text-[#C9A96E]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="font-serif text-sm uppercase tracking-wider mb-4">
                Price
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 - $80', range: [50, 80] },
                  { label: '$80+', range: [80, 200] }
                ].map(option => (
                  <button
                    key={option.label}
                    onClick={() => setPriceRange(option.range)}
                    className={`block text-sm ${
                      priceRange[0] === option.range[0] &&
                      priceRange[1] === option.range[1]
                        ? 'text-[#C9A96E] font-medium'
                        : 'text-gray-700 hover:text-[#C9A96E]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-[#C9A96E] underline"
            >
              Clear All Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden bg-[#FAF7F2] aspect-square mb-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] px-6 py-2 text-sm uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C9A96E] hover:text-white"
                      >
                        <ShoppingBag size={16} className="inline mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </Link>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif uppercase tracking-[0.2em] text-sm">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <p className="font-serif text-lg mt-2">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-[#C9A96E] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

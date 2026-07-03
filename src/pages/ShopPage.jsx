import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    if (priceRange !== 'All') {
      if (priceRange === 'Under $50') {
        filtered = filtered.filter((p) => p.price < 50);
      } else if (priceRange === '$50-$80') {
        filtered = filtered.filter((p) => p.price >= 50 && p.price <= 80);
      } else if (priceRange === 'Over $80') {
        filtered = filtered.filter((p) => p.price > 80);
      }
    }

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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedMaterial !== 'All' ||
    priceRange !== 'All';

  return (
    <div className="min-h-screen py-32 md:py-40">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">
            Shop All
          </h1>
          <p className="text-center text-[#8a8a8a] font-light">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 mb-8 text-sm uppercase tracking-wider"
        >
          <SlidersHorizontal size={18} />
          Filter & Sort
        </button>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Filters Sidebar */}
          <div
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0`}
          >
            <div className="md:sticky md:top-32">
              {/* Sort (Mobile) */}
              <div className="mb-8 md:hidden">
                <label className="block text-sm uppercase tracking-wider mb-4">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-[#e8e3dd] bg-white focus:outline-none focus:border-[#c9a96e]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-[#c9a96e] font-medium'
                          : 'text-[#2d2d2d] hover:text-[#c9a96e]'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-[#c9a96e] font-medium'
                          : 'text-[#2d2d2d] hover:text-[#c9a96e]'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {['All', 'Under $50', '$50-$80', 'Over $80'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`block text-sm ${
                        priceRange === range
                          ? 'text-[#c9a96e] font-medium'
                          : 'text-[#2d2d2d] hover:text-[#c9a96e]'
                      } transition-colors`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-[#8a8a8a] hover:text-[#c9a96e] transition-colors"
                >
                  <X size={14} />
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort (Desktop) */}
            <div className="hidden md:flex justify-between items-center mb-8">
              <p className="text-sm text-[#8a8a8a]">
                {filteredAndSortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-3 border border-[#e8e3dd] bg-white focus:outline-none focus:border-[#c9a96e] text-sm"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-[#faf9f6] overflow-hidden"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-2 hover:text-[#c9a96e] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#8a8a8a] mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg">${product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c9a96e] text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-[#b8945a]"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="text-[#8a8a8a] mb-8">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#c9a96e] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b8945a] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

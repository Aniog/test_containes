import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  return (
    <main className="pt-32 lg:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl lg:text-4xl mb-4">Shop All</h1>
          <div className="w-16 h-px bg-[#8B7355] mx-auto" />
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#E8E0D8]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 text-sm tracking-wider uppercase"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F0EB] text-sm"
              >
                {selectedCategory}
                <X size={14} />
              </button>
            )}
            {selectedMaterial !== 'All' && (
              <button
                onClick={() => setSelectedMaterial('All')}
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F0EB] text-sm"
              >
                {selectedMaterial}
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-[#E8E0D8] text-sm bg-transparent focus:outline-none focus:border-[#8B7355] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="bestsellers">Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-12">
          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0 bg-[#FAF8F5] lg:bg-transparent fixed lg:relative inset-0 z-40 lg:z-auto p-6 lg:p-0 overflow-y-auto`}
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Close Button (Mobile) */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden absolute top-4 right-4"
              >
                <X size={24} />
              </button>

              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-sm tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-[#8B7355] font-medium'
                          : 'text-[#6B5E54] hover:text-[#2A2520]'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-serif text-sm tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-[#8B7355] font-medium'
                          : 'text-[#6B5E54] hover:text-[#2A2520]'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B5E54] mb-8">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-[#6B5E54] mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedMaterial('All');
                  }}
                  className="text-[#8B7355] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-[#F5F0EB] aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FAF8F5] text-[#2A2520] px-6 py-3 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#2A2520] hover:text-[#FAF8F5]"
          >
            Add to Cart
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-sm tracking-[0.15em] uppercase">
            {product.name}
          </h3>
          <p className="text-sm text-[#6B5E54]">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

import products from '../../data/products';

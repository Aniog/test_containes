import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, priceRanges, materials } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(product => 
          product.price >= range.min && product.price <= range.max
        );
      }
    }

    // Material filter
    if (selectedMaterial) {
      result = result.filter(product => 
        product.material.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    // Sort
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
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category });
  };

  const handlePriceRangeChange = (rangeId) => {
    setSelectedPriceRange(prev => prev === rangeId ? null : rangeId);
  };

  const handleMaterialChange = (materialId) => {
    setSelectedMaterial(prev => prev === materialId ? null : materialId);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-2">
            Shop All Jewelry
          </h1>
          <p className="text-neutral-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-between bg-white border border-neutral-200 rounded-lg px-4 py-3"
            >
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-5 h-5 text-neutral-600" />
                <span className="font-medium text-neutral-800">Filters</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-neutral-600 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Sidebar */}
          <div className={`lg:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar
              categories={categories}
              priceRanges={priceRanges}
              materials={materials}
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedMaterial={selectedMaterial}
              onCategoryChange={handleCategoryChange}
              onPriceRangeChange={handlePriceRangeChange}
              onMaterialChange={handleMaterialChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-neutral-600 text-sm">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <label className="text-neutral-600 text-sm">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-600 text-lg mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-brand-600 hover:text-brand-700 font-medium"
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
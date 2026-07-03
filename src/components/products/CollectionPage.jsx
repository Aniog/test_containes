// Velmora Fine Jewelry - Collection/Shop Page Component
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories, getProductsByCategory } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import ProductCard from './ProductCard';

const CollectionPage = () => {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(
    category && category !== 'all' ? [category] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [filtersOpen, setFiltersOpen] = useState({
    category: true,
    material: true,
    price: true,
  });

  // Get unique materials from products
  const materials = [...new Set(products.map((p) => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by material
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Filter by price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        // Keep original order for featured
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 150]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 150;

  // Get page title
  const getPageTitle = () => {
    if (category && category !== 'all') {
      const cat = categories.find((c) => c.id === category);
      return cat ? cat.name : 'Collection';
    }
    return 'All Products';
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-custom py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {category && category !== 'all' ? 'Collection' : 'Shop'}
          </p>
          <h1
            className="text-3xl md:text-4xl text-[#1A1A1A] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {getPageTitle()}
          </h1>
          <div className="divider-gold mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E2D9]">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#1A1A1A] md:hidden"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <Filter size={16} />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-[#B8860B] text-white text-xs rounded-full flex items-center justify-center">
                {selectedCategories.length + selectedMaterials.length + (priceRange[0] > 0 || priceRange[1] < 150 ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Results Count */}
          <p
            className="hidden md:block text-sm text-[#6B6560]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-[#1A1A1A] pr-6 cursor-pointer focus:outline-none"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#6B6560] pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setShowFilters(false)} />
        )}

        {/* Filters Sidebar */}
        <div className={`fixed md:relative inset-y-0 left-0 z-50 w-80 md:w-auto md:block transform transition-transform duration-300 bg-[#FAF8F5] md:bg-transparent overflow-y-auto ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="p-6 md:p-0 h-full md:h-auto">
            {/* Mobile Filter Header */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <h2
                className="text-lg font-serif tracking-[0.1em] text-[#1A1A1A]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Filters
              </h2>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <X size={20} />
              </button>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs uppercase tracking-wider text-[#B8860B] hover:text-[#8B6914] transition-colors mb-6 md:mb-4"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Clear All Filters
              </button>
            )}

            {/* Category Filter */}
            <div className="mb-6 md:mb-8">
              <button
                onClick={() => setFiltersOpen({ ...filtersOpen, category: !filtersOpen.category })}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A] font-medium"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Category
                </span>
                <ChevronDown
                  size={14}
                  className={`text-[#6B6560] transition-transform ${filtersOpen.category ? 'rotate-180' : ''}`}
                />
              </button>
              {filtersOpen.category && (
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 border-[#E8E2D9] text-[#B8860B] focus:ring-[#B8860B] cursor-pointer"
                      />
                      <span
                        className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors capitalize"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {cat.name}
                      </span>
                    </label>
                  ))}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes('sets')}
                      onChange={() => toggleCategory('sets')}
                      className="w-4 h-4 border-[#E8E2D9] text-[#B8860B] focus:ring-[#B8860B] cursor-pointer"
                    />
                    <span
                      className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      Gift Sets
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="divider" />

            {/* Material Filter */}
            <div className="mb-6 md:mb-8 mt-6">
              <button
                onClick={() => setFiltersOpen({ ...filtersOpen, material: !filtersOpen.material })}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A] font-medium"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Material
                </span>
                <ChevronDown
                  size={14}
                  className={`text-[#6B6560] transition-transform ${filtersOpen.material ? 'rotate-180' : ''}`}
                />
              </button>
              {filtersOpen.material && (
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <label
                      key={mat}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="w-4 h-4 border-[#E8E2D9] text-[#B8860B] focus:ring-[#B8860B] cursor-pointer"
                      />
                      <span
                        className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="divider" />

            {/* Price Filter */}
            <div className="mb-6 md:mb-8 mt-6">
              <button
                onClick={() => setFiltersOpen({ ...filtersOpen, price: !filtersOpen.price })}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A] font-medium"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Price
                </span>
                <ChevronDown
                  size={14}
                  className={`text-[#6B6560] transition-transform ${filtersOpen.price ? 'rotate-180' : ''}`}
                />
              </button>
              {filtersOpen.price && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-[#6B6560]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8860B]"
                  />
                </div>
              )}
            </div>

            {/* Mobile Apply Button */}
            <button
              onClick={() => setShowFilters(false)}
              className="w-full btn-primary mt-6 md:hidden"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8 md:mt-0">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p
                className="text-lg text-[#6B6560] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                No products found
              </p>
              <p
                className="text-sm text-[#6B6560] mb-6"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Try adjusting your filters to find what you're looking for.
              </p>
              <button onClick={clearAllFilters} className="btn-secondary">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} showRating />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

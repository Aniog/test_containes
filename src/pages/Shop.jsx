import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/common/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Get unique categories and materials
  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter
    if (selectedMaterial) {
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
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 200]);
    setSelectedMaterial('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 200;

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="heading-lg text-velmora-charcoal mb-4">Shop All</h1>
          <div className="divider mb-6" />
          <p className="font-sans text-base text-velmora-charcoal-light">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 font-sans text-sm uppercase tracking-wider 
                       text-velmora-charcoal border-b-2 border-velmora-charcoal pb-1"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Sort Dropdown (Mobile) */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-sm border-b-2 border-velmora-charcoal pb-1 
                       text-velmora-charcoal bg-transparent outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            } fixed inset-y-0 left-0 z-50 w-72 bg-white p-8 overflow-y-auto
            transition-transform duration-300 lg:translate-x-0 lg:static lg:w-64 lg:flex-shrink-0
            lg:block lg:h-fit lg:sticky lg:top-32`}
          >
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-velmora-charcoal"
                aria-label="Close filters"
              >
                <X size={24} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchParams({});
                  }}
                  className={`block text-sm ${
                    !selectedCategory
                      ? 'text-velmora-gold font-semibold'
                      : 'text-velmora-charcoal-light hover:text-velmora-gold'
                  } transition-colors`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchParams({ category });
                    }}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-velmora-gold font-semibold'
                        : 'text-velmora-charcoal-light hover:text-velmora-gold'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {[
                  [0, 50],
                  [50, 75],
                  [75, 100],
                  [100, 200],
                ].map(([min, max]) => (
                  <button
                    key={`${min}-${max}`}
                    onClick={() => setPriceRange([min, max])}
                    className={`block text-sm ${
                      priceRange[0] === min && priceRange[1] === max
                        ? 'text-velmora-gold font-semibold'
                        : 'text-velmora-charcoal-light hover:text-velmora-gold'
                    } transition-colors`}
                  >
                    ${min} - ${max}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-4">
                Material
              </h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material === selectedMaterial ? '' : material)}
                    className={`block text-sm ${
                      selectedMaterial === material
                        ? 'text-velmora-gold font-semibold'
                        : 'text-velmora-charcoal-light hover:text-velmora-gold'
                    } transition-colors`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold uppercase tracking-wider hover:underline"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Overlay for mobile filter */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-velmora-charcoal-light">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border-b-2 border-velmora-charcoal pb-1 
                           text-velmora-charcoal bg-transparent outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-charcoal-light mb-4">
                  No products found
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
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
};

export default Shop;

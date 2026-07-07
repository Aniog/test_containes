import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', min: 0, max: 1000 },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $80', min: 50, max: 80 },
    { label: '$80+', min: 80, max: 1000 },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    // Filter by price
    if (priceRange !== 'All') {
      const range = priceRanges.find((r) => r.label === priceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
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
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange !== 'All';

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="container-padding py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl mb-4">Shop All</h1>
          <div className="hairline w-24 my-4" />
          <p className="font-sans text-velmora-stone">
            Discover our collection of demi-fine jewelry, crafted with care and designed for everyday luxury.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 font-sans text-sm tracking-wide uppercase border border-velmora-sand px-4 py-2 hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-2">
                !
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0 space-y-8 bg-white md:bg-transparent p-6 md:p-0 absolute md:relative top-0 left-0 h-screen md:h-auto z-40 md:z-auto overflow-y-auto`}
          >
            <div className="flex items-center justify-between md:hidden mb-6">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-4">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchParams(category === 'All' ? {} : { category });
                    }}
                    className={`block font-sans text-sm hover:text-velmora-gold transition-colors ${
                      selectedCategory === category ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal-light'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="space-y-4">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block font-sans text-sm hover:text-velmora-gold transition-colors ${
                      selectedMaterial === material ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal-light'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-4">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range.label)}
                    className={`block font-sans text-sm hover:text-velmora-gold transition-colors ${
                      priceRange === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal-light'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-sm text-velmora-gold hover:underline"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-velmora-stone">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center space-x-2">
                <label className="font-sans text-sm text-velmora-stone">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm border border-velmora-sand px-4 py-2 focus:outline-none focus:border-velmora-gold bg-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bestsellers">Bestsellers</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="font-serif text-2xl">No products found</p>
                <p className="font-sans text-velmora-stone">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearFilters} className="btn-primary inline-block mt-4">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
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

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange !== 'All';

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Shop All</h1>
          <div className="w-16 h-px bg-velmora-gold" />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal size={18} />
            Filter & Sort
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-none`}>
            <div className="lg:sticky lg:top-24">
              {/* Close button for mobile */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="font-serif text-lg uppercase tracking-wider">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="mb-6">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-velmora-gold uppercase tracking-wider hover:underline"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-black'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-black'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-sm uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {['All', '0-50', '50-75', '75-100', '100-150'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`block text-sm ${
                        priceRange === range
                          ? 'text-velmora-gold font-medium'
                          : 'text-gray-600 hover:text-velmora-black'
                      } transition-colors`}
                    >
                      {range === 'All' ? 'All' : `$${range.replace('-', ' - $')}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-300 px-4 py-2 focus:border-velmora-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter values from URL params
  const selectedCategory = searchParams.get('category') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
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
  }, [selectedCategory, selectedMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">
              Shop All
            </h1>
            <p className="font-sans text-sm text-velmora-charcoal-light">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {/* Sort Dropdown */}
            <select 
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="font-sans text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="bestsellers">Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Filter Toggle (Mobile) */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm border border-velmora-border px-4 py-2 hover:border-velmora-gold transition-colors duration-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'fixed inset-0 z-40 bg-white p-8 overflow-y-auto' : 'hidden'} lg:block lg:relative lg:z-0 lg:w-64 lg:flex-shrink-0`}>
            <div className="lg:sticky lg:top-24">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h3 className="font-serif text-xl font-medium">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium tracking-wider uppercase mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-gold transition-colors duration-300">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === ''}
                      onChange={() => updateFilter('category', '')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="font-sans text-sm">All</span>
                  </label>
                  {categories.map(category => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer hover:text-velmora-gold transition-colors duration-300">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === category}
                        onChange={() => updateFilter('category', category)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="font-sans text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium tracking-wider uppercase mb-4">
                  Material
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-gold transition-colors duration-300">
                    <input 
                      type="radio" 
                      name="material" 
                      checked={selectedMaterial === ''}
                      onChange={() => updateFilter('material', '')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="font-sans text-sm">All</span>
                  </label>
                  {materials.map(material => (
                    <label key={material} className="flex items-center gap-3 cursor-pointer hover:text-velmora-gold transition-colors duration-300">
                      <input 
                        type="radio" 
                        name="material" 
                        checked={selectedMaterial === material}
                        onChange={() => updateFilter('material', material)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="font-sans text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedMaterial) && (
                <button 
                  onClick={clearFilters}
                  className="font-sans text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              )}

              {/* Close Button (Mobile) */}
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden w-full mt-8 btn-outline"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="font-sans text-velmora-charcoal-light mb-8">
                  Try adjusting your filters
                </p>
                <button 
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map(product => (
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

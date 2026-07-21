import React, { useState, useMemo } from 'react';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-velmora">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <div className="hairline w-24 mx-auto mb-4" />
          <p className="font-sans text-[rgb(var(--color-muted))] text-lg">
            Discover our collection of demi-fine gold jewelry
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 font-sans text-sm uppercase tracking-wider hover:text-[rgb(var(--color-accent))] transition-colors"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="font-sans text-sm text-[rgb(var(--color-muted))]">
              {filteredProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm border border-[rgb(var(--color-border))] px-4 py-2 focus:outline-none focus:border-[rgb(var(--color-accent))]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[rgb(var(--color-background))] p-6 border border-[rgb(var(--color-border))]">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        selectedCategory === category
                          ? 'text-[rgb(var(--color-accent))] font-medium'
                          : 'text-[rgb(var(--color-foreground))]/80 hover:text-[rgb(var(--color-accent))]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial('All')}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                      selectedMaterial === 'All'
                        ? 'text-[rgb(var(--color-accent))] font-medium'
                        : 'text-[rgb(var(--color-foreground))]/80 hover:text-[rgb(var(--color-accent))]'
                    }`}
                  >
                    All
                  </button>
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        selectedMaterial === material
                          ? 'text-[rgb(var(--color-accent))] font-medium'
                          : 'text-[rgb(var(--color-foreground))]/80 hover:text-[rgb(var(--color-accent))]'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-lg text-[rgb(var(--color-muted))]">
                  No products match your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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

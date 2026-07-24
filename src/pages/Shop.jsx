import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import ProductCard from '../components/ui/ProductCard';
import CartDrawer from '../components/ui/CartDrawer';
import { products, categories, priceRanges, sortOptions } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Update category from URL
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find((r) => r.value === selectedPrice);
    if (priceRange && priceRange.value !== 'all') {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter (simplified - checks if product has variant)
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.variants.includes(selectedMaterial));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Discover</span>
            <h1 className="font-serif text-3xl mt-1">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.08em] uppercase font-semibold">Filters</span>
                {(selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#B89778] hover:text-[#8C6F52] tracking-[0.04em]"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="filter-section">
                <div className="filter-title">Category</div>
                {categories.map((cat) => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.value}
                      onChange={() => handleCategoryChange(cat.value)}
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div className="filter-section">
                <div className="filter-title">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === range.value}
                      onChange={() => setSelectedPrice(range.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="filter-section">
                <div className="filter-title">Tone</div>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'all'}
                    onChange={() => setSelectedMaterial('all')}
                  />
                  <span>All Tones</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'gold'}
                    onChange={() => setSelectedMaterial('gold')}
                  />
                  <span>Gold Tone</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'silver'}
                    onChange={() => setSelectedMaterial('silver')}
                  />
                  <span>Silver Tone</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-xs text-[#6B645C] mb-4 tracking-[0.04em]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-16 text-center">
                <p className="text-[#6B645C] mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm tracking-[0.06em] uppercase text-[#B89778] hover:text-[#8C6F52]"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
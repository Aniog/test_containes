import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Get category from URL
  const urlCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1) : 'All'
  );

  // Update category when URL changes
  React.useEffect(() => {
    if (urlCategory) {
      const formatted = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1);
      setSelectedCategory(formatted);
    }
  }, [urlCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter (simulated - all our products are gold plated)
    if (selectedMaterials.length > 0) {
      // For demo, we keep all since all are gold/silver plated
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, selectedMaterials]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSortBy('featured');
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#C5A46E] text-xs tracking-[3px] mb-1">COLLECTION</p>
          <h1 className="font-serif text-4xl text-[#1A1A1A]">All Jewelry</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* FILTER SIDEBAR */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[2px] text-[#8B8178]">FILTERS</span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#C5A46E] hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-sm font-medium text-[#1A1A1A] mb-3">Category</p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        selectedCategory === cat ? 'text-[#C5A46E]' : 'text-[#4A4640] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <p className="text-sm font-medium text-[#1A1A1A] mb-3">Price</p>
                <div className="space-y-2 text-sm text-[#4A4640]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 120}
                      onChange={() => setPriceRange([0, 120])}
                    />
                    All Prices
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 50}
                      onChange={() => setPriceRange([0, 50])}
                    />
                    Under $50
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 50 && priceRange[1] === 80}
                      onChange={() => setPriceRange([50, 80])}
                    />
                    $50 – $80
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 80 && priceRange[1] === 120}
                      onChange={() => setPriceRange([80, 120])}
                    />
                    $80 and above
                  </label>
                </div>
              </div>

              {/* Material (simplified for demo) */}
              <div>
                <p className="text-sm font-medium text-[#1A1A1A] mb-3">Material</p>
                <p className="text-sm text-[#8B8178]">18K Gold Plated</p>
                <p className="text-sm text-[#8B8178]">Sterling Silver Plated</p>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E0D8]">
              <p className="text-sm text-[#8B8178]">
                {filteredAndSortedProducts.length} products
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm text-[#8B8178]">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-[#E5E0D8] px-4 py-2 text-sm focus:outline-none focus:border-[#C5A46E]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#4A4640] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

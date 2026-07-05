import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, sortBy, priceRange]);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-[#f5f0eb] py-12 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-2">All Jewelry</h1>
        <p className="text-[#6b6560] text-sm">{filteredProducts.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-[#b8860b] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors capitalize ${
                        selectedCategory === cat.id ? 'text-[#b8860b] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === opt.value ? 'text-[#b8860b] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial('all')}
                    className={`block text-sm transition-colors capitalize ${
                      selectedMaterial === 'all' ? 'text-[#b8860b] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                    }`}
                  >
                    All
                  </button>
                  {['gold', 'silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm transition-colors capitalize ${
                        selectedMaterial === mat ? 'text-[#b8860b] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {filterOpen && (
            <div className="lg:hidden bg-white p-6 mb-6 border border-[#e8e2db] animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                        selectedCategory === 'all'
                          ? 'border-[#b8860b] text-[#b8860b]'
                          : 'border-[#e8e2db] text-[#6b6560]'
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors capitalize ${
                          selectedCategory === cat.id
                            ? 'border-[#b8860b] text-[#b8860b]'
                            : 'border-[#e8e2db] text-[#6b6560]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: '0-50', label: 'Under $50' },
                      { value: '50-100', label: '$50-$100' },
                      { value: '100-', label: 'Over $100' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setPriceRange(opt.value)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                          priceRange === opt.value
                            ? 'border-[#b8860b] text-[#b8860b]'
                            : 'border-[#e8e2db] text-[#6b6560]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-[#6b6560] mb-2">No pieces found</p>
                <p className="text-sm text-[#6b6560]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
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

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Filter products
  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  // Sort
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange([0, 150]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange[0] > 0 || priceRange[1] < 150;

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />
      <CartDrawer />

      {/* Header */}
      <div className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] mb-2">
            {selectedCategory !== 'all'
              ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
              : 'All Jewelry'}
          </h1>
          <p className="text-[#6b6560]">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#1a1a1a] mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-[#c9a96e] font-medium' : 'text-[#6b6560] hover:text-[#c9a96e]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-[#c9a96e] font-medium' : 'text-[#6b6560] hover:text-[#c9a96e]'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#1a1a1a] mb-4">Material</h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left text-sm py-1 capitalize transition-colors ${
                        selectedMaterial === mat ? 'text-[#c9a96e] font-medium' : 'text-[#6b6560] hover:text-[#c9a96e]'
                      }`}
                    >
                      {mat === 'all' ? 'All' : `${mat} tone`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#1a1a1a] mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full border border-[#e8e4df] px-3 py-2 text-sm focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Min"
                      min="0"
                    />
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full border border-[#e8e4df] px-3 py-2 text-sm focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Max"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#c9a96e] hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter + sort bar */}
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden flex items-center gap-2 text-sm text-[#1a1a1a]"
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && <span className="w-2 h-2 bg-[#c9a96e] rounded-full" />}
              </button>

              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-[#6b6560] hidden sm:inline">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-[#e8e4df] text-sm text-[#1a1a1a] pl-3 pr-8 py-2 focus:outline-none focus:border-[#c9a96e] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#6b6560] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden bg-white border border-[#e8e4df] p-4 mb-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm uppercase tracking-wider text-[#1a1a1a]">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="p-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#6b6560] mb-2">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                        selectedCategory === 'all' ? 'bg-[#1a1a1a] text-white' : 'border border-[#e8e4df] text-[#6b6560]'
                      }`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                          selectedCategory === cat.id ? 'bg-[#1a1a1a] text-white' : 'border border-[#e8e4df] text-[#6b6560]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#6b6560] mb-2">Material</h4>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'gold', 'silver'].map(mat => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`px-3 py-1 text-xs uppercase tracking-wider capitalize transition-colors ${
                          selectedMaterial === mat ? 'bg-[#1a1a1a] text-white' : 'border border-[#e8e4df] text-[#6b6560]'
                        }`}
                      >
                        {mat === 'all' ? 'All' : mat}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#c9a96e] hover:underline flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear all filters
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="velmora-heading text-xl text-[#6b6560] mb-2">No pieces found</p>
                <p className="text-sm text-[#8a8178] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="velmora-btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

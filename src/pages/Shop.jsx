import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, sortBy, priceRange]);

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => {
      if (priceRange === 'under50') return p.price < 50;
      if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
      if (priceRange === 'over80') return p.price > 80;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 lg:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal">The Collection</h1>
          <p className="mt-3 font-sans text-sm text-muted-fg">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-charcoal bg-transparent border-none p-0 hover:text-accent transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden lg:block font-sans text-xs text-muted-fg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wider text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none p-0 transition-colors ${
                        selectedCategory === cat ? 'text-accent' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none p-0 transition-colors ${
                        priceRange === option.value ? 'text-accent' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {filterOpen && (
            <>
              <div className="fixed inset-0 bg-charcoal/40 z-50 lg:hidden" onClick={() => setFilterOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 lg:hidden overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-sans text-sm uppercase tracking-wider text-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="text-charcoal bg-transparent border-none p-0">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Category</h4>
                  <div className="space-y-2">
                    {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none p-0 transition-colors ${
                          selectedCategory === cat ? 'text-accent' : 'text-muted-fg hover:text-charcoal'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Price</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50 – $80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => { setPriceRange(option.value); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none p-0 transition-colors ${
                          priceRange === option.value ? 'text-accent' : 'text-muted-fg hover:text-charcoal'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-sans text-sm text-muted-fg">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="mt-4 font-sans text-sm text-accent bg-transparent border-none p-0 underline hover:text-accent-light transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
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
};

export default Shop;

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    const priceRange = priceRanges[selectedPrice];
    result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm font-sans transition-colors ${selectedCategory === 'all' ? 'text-brand-gold font-medium' : 'text-brand-slate hover:text-brand-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm font-sans transition-colors ${selectedCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-slate hover:text-brand-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(i)}
              className={`block text-sm font-sans transition-colors ${selectedPrice === i ? 'text-brand-gold font-medium' : 'text-brand-slate hover:text-brand-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal mb-3">Material</h3>
        <div className="space-y-2">
          <span className="block text-sm font-sans text-brand-gold font-medium">18K Gold Plated</span>
          <span className="block text-sm font-sans text-brand-slate">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-brand-ivory border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-brand-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-brand-charcoal font-sans font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="16" y2="12" />
              <line x1="4" y1="18" x2="12" y2="18" />
            </svg>
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans text-brand-slate bg-transparent border border-brand-sand px-3 py-1.5 focus:outline-none focus:border-brand-charcoal"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Mobile filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand animate-fade-in">
            <FilterSidebar />
          </div>
        )}

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-sans text-brand-slate bg-transparent border border-brand-sand px-3 py-1.5 focus:outline-none focus:border-brand-charcoal"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-brand-muted text-sm font-sans">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice(0); }}
                  className="mt-4 text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

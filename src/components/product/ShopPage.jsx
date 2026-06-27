import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from './ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Get filters from URL
  const selectedCategory = searchParams.get('category') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (maxPrice && product.price > parseInt(maxPrice)) return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleCategoryChange = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const handlePriceChange = (price) => {
    const params = new URLSearchParams(searchParams);
    if (price) {
      params.set('maxPrice', price);
    } else {
      params.delete('maxPrice');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || maxPrice;

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-ivory)] py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-1 text-[var(--color-charcoal)] mb-4">Shop All</h1>
            <p className="text-[var(--color-warm-gray)] body-md max-w-lg mx-auto">
              Discover our curated collection of demi-fine gold jewelry, 
              designed for everyday elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm font-medium cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-warm-gray)]" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] mb-4 font-medium">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('')}
                      className={`text-sm w-full text-left py-1 transition-colors ${
                        !selectedCategory
                          ? 'text-[var(--color-gold)] font-medium'
                          : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm w-full text-left py-1 transition-colors ${
                          selectedCategory === category.id
                            ? 'text-[var(--color-gold)] font-medium'
                            : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] mb-4 font-medium">
                  Price
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: 'All Prices', value: '' },
                    { label: 'Under $40', value: '40' },
                    { label: '$40 - $60', value: '60' },
                    { label: '$60 - $100', value: '100' },
                    { label: 'Over $100', value: '200' },
                  ].map((option) => (
                    <li key={option.value}>
                      <button
                        onClick={() => handlePriceChange(option.value)}
                        className={`text-sm w-full text-left py-1 transition-colors ${
                          maxPrice === option.value
                            ? 'text-[var(--color-gold)] font-medium'
                            : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                        }`}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] mb-4 font-medium">
                  Material
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`text-sm w-full text-left py-1 transition-colors text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]`}
                    >
                      18K Gold Plated
                    </button>
                  </li>
                  <li>
                    <button
                      className={`text-sm w-full text-left py-1 transition-colors text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]`}
                    >
                      Sterling Silver
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--color-warm-gray)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm cursor-pointer focus:outline-none border-b border-[var(--color-sand)] pb-1"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-warm-gray)]" />
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-[var(--color-warm-gray)]">Active filters:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-ivory)] rounded-full text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                    <button onClick={() => handleCategoryChange('')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {maxPrice && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-ivory)] rounded-full text-sm">
                    Under ${maxPrice}
                    <button onClick={() => handlePriceChange('')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-gold)] hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showQuickAdd={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-warm-gray)] mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-cream)] z-50 rounded-t-2xl max-h-[80vh] overflow-y-auto md:hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] mb-4 font-medium">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      !selectedCategory
                        ? 'bg-[var(--color-charcoal)] text-white'
                        : 'bg-[var(--color-ivory)] text-[var(--color-charcoal)]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[var(--color-charcoal)] text-white'
                          : 'bg-[var(--color-ivory)] text-[var(--color-charcoal)]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] mb-4 font-medium">
                  Price
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['', '40', '60', '100', '200'].map((value, index) => (
                    <button
                      key={value}
                      onClick={() => handlePriceChange(value)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        maxPrice === value
                          ? 'bg-[var(--color-charcoal)] text-white'
                          : 'bg-[var(--color-ivory)] text-[var(--color-charcoal)]'
                      }`}
                    >
                      {value === '' ? 'All' : index === 4 ? '$100+' : `Under $${value}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn btn-primary w-full"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activeCollection = searchParams.get('collection') || 'all';

  const filteredProducts = products.filter((product) => {
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return product.badge === 'New' ? -1 : 1;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="mb-3">Shop All</h1>
          <p className="text-slate">
            Discover jewelry that speaks to you
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 pb-6 border-b border-sand">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm text-slate hover:text-charcoal transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'text-gold font-medium'
                  : 'text-slate hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'text-gold font-medium'
                    : 'text-slate hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-slate hover:text-charcoal transition-colors"
            >
              <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-sand rounded shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors first:rounded-t last:rounded-b ${
                      sortBy === option.value
                        ? 'bg-cream text-gold font-medium'
                        : 'text-slate hover:bg-cream'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <aside className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div className="lg:sticky lg:top-28">
              <div className="bg-cream p-6 rounded mb-6 lg:mb-0">
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="font-medium">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-1 text-slate hover:text-charcoal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wide text-stone mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={activeCategory === 'all'}
                        onChange={() => handleCategoryChange('all')}
                        className="w-4 h-4 text-gold border-sand focus:ring-gold"
                      />
                      <span className="text-sm text-slate">All Jewelry</span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={activeCategory === cat.id}
                          onChange={() => handleCategoryChange(cat.id)}
                          className="w-4 h-4 text-gold border-sand focus:ring-gold"
                        />
                        <span className="text-sm text-slate">{cat.name}</span>
                        <span className="text-xs text-stone ml-auto">({cat.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wide text-stone mb-3">Price</h4>
                  <div className="space-y-2">
                    {['Under $40', '$40 - $60', '$60 - $80', 'Over $80'].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-gold border-sand focus:ring-gold rounded"
                        />
                        <span className="text-sm text-slate">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wide text-stone mb-3">Material</h4>
                  <div className="space-y-2">
                    {['Gold', 'Rose Gold', 'Silver'].map((material) => (
                      <label key={material} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-gold border-sand focus:ring-gold rounded"
                        />
                        <span className="text-sm text-slate">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate mb-4">No products found</p>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="btn-secondary"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

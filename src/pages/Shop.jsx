import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';

  const setCategory = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory);
    }

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
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCategory('all')}
                  className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left p-0 ${
                    activeCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => setCategory(cat.slug)}
                    className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left p-0 ${
                      activeCategory === cat.slug ? 'text-gold font-medium' : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-4">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('price-low')}
                    className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left p-0 ${
                      sortBy === 'price-low' ? 'text-gold font-medium' : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left p-0 ${
                      sortBy === 'price-high' ? 'text-gold font-medium' : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    High to Low
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Bar */}
            <div className="md:hidden flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-sm text-charcoal/70 bg-transparent border border-taupe/30 px-3 py-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-charcoal/70 bg-transparent border border-taupe/30 px-3 py-2 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-linen border border-taupe/15">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Filters</span>
                  <button onClick={() => setShowFilters(false)} className="bg-transparent border-none cursor-pointer p-0">
                    <X className="w-4 h-4 text-charcoal/60" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider border cursor-pointer ${
                      activeCategory === 'all'
                        ? 'border-gold bg-gold/5 text-gold'
                        : 'border-taupe/30 bg-transparent text-charcoal/70'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => setCategory(cat.slug)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wider border cursor-pointer ${
                        activeCategory === cat.slug
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-taupe/30 bg-transparent text-charcoal/70'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sort - Desktop */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-charcoal/70 bg-transparent border border-taupe/30 px-3 py-2 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-taupe">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

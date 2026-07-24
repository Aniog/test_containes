import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-stone font-sans text-sm">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans font-medium mb-4">Category</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm font-sans transition-colors bg-transparent border-none cursor-pointer p-0 ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm font-sans transition-colors bg-transparent border-none cursor-pointer p-0 ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-sand">
                <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans font-medium mb-4">Price</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="text-sm text-stone font-sans">Under $40</li>
                  <li className="text-sm text-stone font-sans">$40 – $70</li>
                  <li className="text-sm text-stone font-sans">$70 – $100</li>
                  <li className="text-sm text-stone font-sans">Over $100</li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-sand">
                <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans font-medium mb-4">Material</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="text-sm text-stone font-sans">18K Gold Plated</li>
                  <li className="text-sm text-stone font-sans">Sterling Silver</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal font-sans bg-transparent border-none cursor-pointer p-0"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-charcoal bg-transparent border border-sand px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden mb-6 p-4 bg-cream border border-sand">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans font-medium">Filters</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-stone bg-transparent border-none cursor-pointer p-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-3 py-1.5 text-xs tracking-wide font-sans border cursor-pointer transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-charcoal border-sand hover:border-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-3 py-1.5 text-xs tracking-wide font-sans border cursor-pointer transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-transparent text-charcoal border-sand hover:border-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone font-sans">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

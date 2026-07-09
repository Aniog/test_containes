import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, priceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-taupe font-sans">
            Discover our full range of demi-fine gold jewelry
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-gold-muted/20">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal bg-transparent border-none hover:text-brand-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-taupe font-sans hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans font-medium text-brand-charcoal bg-transparent border border-brand-charcoal/20 rounded-sm px-3 py-2 focus:outline-none focus:border-brand-gold-muted"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-28 space-y-8">
              {/* Close on mobile */}
              <div className="flex items-center justify-between md:hidden">
                <span className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal">Filters</span>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none transition-colors ${
                        selectedCategory === cat
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-stone hover:text-brand-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal mb-3">
                  Price
                </h3>
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
                      className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none transition-colors ${
                        priceRange === option.value
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-stone hover:text-brand-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  <span className="block text-sm font-sans text-brand-gold font-medium py-1.5">18K Gold Plated</span>
                  <span className="block text-sm font-sans text-brand-stone py-1.5">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-charcoal">No products found</p>
                <p className="text-sm text-brand-taupe mt-2 font-sans">Try adjusting your filters</p>
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

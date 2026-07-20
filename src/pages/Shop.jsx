import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, [selectedCategory, sortBy, priceRange, selectedMaterial]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // featured
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange([0, 200]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedMaterial !== 'all' ||
    priceRange[0] > 0 ||
    priceRange[1] < 200;

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] bg-charcoal-800 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="shop-hero-bg-d7e8f9"
          data-strk-bg="gold jewelry collection editorial display warm lighting luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-charcoal-800/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-400 mb-3">
              Collection
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              {selectedCategory === 'all'
                ? 'All Jewelry'
                : categories.find((c) => c.id === selectedCategory)?.name ||
                  'Shop'}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-ivory-300 text-charcoal-700 hover:border-charcoal-400 transition-colors"
            >
              <SlidersHorizontal size={16} />
              <span className="text-sm">Filters</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-charcoal-500 hover:text-gold-500 transition-colors"
              >
                <X size={14} />
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Grid toggle */}
            <div className="hidden md:flex items-center gap-1 border border-ivory-300 p-1">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 ${
                  gridCols === 3
                    ? 'bg-charcoal-800 text-white'
                    : 'text-charcoal-400 hover:text-charcoal-600'
                }`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 ${
                  gridCols === 2
                    ? 'bg-charcoal-800 text-white'
                    : 'text-charcoal-400 hover:text-charcoal-600'
                }`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-ivory-300 bg-white text-sm text-charcoal-700 focus:outline-none focus:border-gold-500 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0`}
          >
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal-800 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-gold-600 font-medium'
                        : 'text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-500 hover:text-charcoal-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal-800 mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $75', range: [50, 75] },
                    { label: '$75 - $100', range: [75, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange[0] === option.range[0] &&
                        priceRange[1] === option.range[1]
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-500 hover:text-charcoal-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal-800 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                        selectedMaterial === material
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-500 hover:text-charcoal-700'
                      }`}
                    >
                      {material === 'all' ? 'All Materials' : `${material} Plated`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-charcoal-400 mb-6">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600 mb-2">
                  No products found
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-charcoal-800 text-white font-sans text-sm tracking-wider uppercase hover:bg-charcoal-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 md:gap-8 ${
                  gridCols === 3
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-2 md:grid-cols-2'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

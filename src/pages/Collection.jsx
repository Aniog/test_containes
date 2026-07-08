import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories, priceRanges } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative bg-bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-bg-elevated">
        <img
          data-strk-img-id={`col-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-bg-dark/90 backdrop-blur-sm text-text-inverse text-xs uppercase tracking-wider font-medium py-2.5 hover:bg-bg-accent transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm text-text hover:text-text-accent transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-text-accent font-medium mt-1">${product.price}</p>
      </div>
    </article>
  );
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || '');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedPriceRange) {
      result = result.filter(p => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max);
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
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPriceRange || sortBy !== 'featured';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 text-center border-b border-border">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-3">
          {selectedCategory
            ? categories.find(c => c.id === selectedCategory)?.name || 'Collection'
            : 'Our Collection'
          }
        </h1>
        <p className="text-text-secondary text-sm max-w-lg mx-auto">
          Every piece is crafted from 18K gold-plated brass, designed to be hypoallergenic, and made to last.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-text transition-colors duration-200 md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-text-muted text-xs hover:text-text transition-colors"
              >
                <X size={12} />
                Clear all
              </button>
            )}
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-text-secondary text-sm border border-border px-4 py-2 pr-8 focus:outline-none focus:border-text-accent cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-text mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                    className={`block text-sm w-full text-left transition-colors duration-200 ${
                      !selectedCategory ? 'text-text-accent font-medium' : 'text-text-secondary hover:text-text'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setSearchParams({ cat: cat.id }); }}
                      className={`block text-sm w-full text-left transition-colors duration-200 ${
                        selectedCategory === cat.id ? 'text-text-accent font-medium' : 'text-text-secondary hover:text-text'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-text mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className={`block text-sm w-full text-left transition-colors duration-200 ${
                      !selectedPriceRange ? 'text-text-accent font-medium' : 'text-text-secondary hover:text-text'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(range)}
                      className={`block text-sm w-full text-left transition-colors duration-200 ${
                        selectedPriceRange?.label === range.label ? 'text-text-accent font-medium' : 'text-text-secondary hover:text-text'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-text mb-3">
                  Material
                </h3>
                <p className="text-text-secondary text-sm">18K Gold Plated</p>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-bg-card p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg uppercase tracking-wider text-text">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} className="text-text-secondary hover:text-text">
                    <X size={18} />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-text mb-3">Category</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                      className={`block text-sm w-full text-left ${!selectedCategory ? 'text-text-accent font-medium' : 'text-text-secondary'}`}
                    >
                      All Jewelry
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setSearchParams({ cat: cat.id }); setFiltersOpen(false); }}
                        className={`block text-sm w-full text-left ${selectedCategory === cat.id ? 'text-text-accent font-medium' : 'text-text-secondary'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-text mb-3">Price</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className={`block text-sm w-full text-left ${!selectedPriceRange ? 'text-text-accent font-medium' : 'text-text-secondary'}`}
                    >
                      All Prices
                    </button>
                    {priceRanges.map(range => (
                      <button
                        key={range.label}
                        onClick={() => { setSelectedPriceRange(range); setFiltersOpen(false); }}
                        className={`block text-sm w-full text-left ${selectedPriceRange?.label === range.label ? 'text-text-accent font-medium' : 'text-text-secondary'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-secondary mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline">
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
}

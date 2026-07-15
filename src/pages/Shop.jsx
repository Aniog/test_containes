import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { formatPrice } from '@/lib/utils';

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [materialFilter, setMaterialFilter] = useState('');
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy, priceRange, materialFilter]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (materialFilter) {
      result = result.filter((p) => p.material === materialFilter);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange, materialFilter]);

  const handleCategoryChange = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat) {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-20">
      <div className="container-site">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="heading-lg mb-3">Shop All</h1>
          <p className="body-text max-w-md mx-auto">
            Explore our full collection of demi-fine gold jewelry, designed to be treasured.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-base/50 mb-5">Filters</h3>

              {/* Category */}
              <div className="mb-6">
                <h4 className="caption mb-3">Category</h4>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === cat.value
                          ? 'text-velmora-accent font-medium'
                          : 'text-velmora-base/70 hover:text-velmora-base'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="caption mb-3">Price</h4>
                <div className="space-y-1.5">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 – $100', range: [50, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() =>
                        setPriceRange(
                          priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                            ? [0, 120]
                            : opt.range
                        )
                      }
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                          ? 'text-velmora-accent font-medium'
                          : 'text-velmora-base/70 hover:text-velmora-base'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="caption mb-3">Material</h4>
                <div className="space-y-1.5">
                  {['gold', 'silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() =>
                        setMaterialFilter(materialFilter === mat ? '' : mat)
                      }
                      className={`block w-full text-left text-sm py-1.5 capitalize transition-colors ${
                        materialFilter === mat
                          ? 'text-velmora-accent font-medium'
                          : 'text-velmora-base/70 hover:text-velmora-base'
                      }`}
                    >
                      {mat === 'gold' ? '18K Gold Plated' : 'Silver Tone'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-1.5 text-sm text-velmora-base/70 hover:text-velmora-base transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <p className="caption hidden lg:block">{filtered.length} products</p>

              {/* Desktop sort */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="caption">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-velmora-muted-2 bg-white px-3 py-1.5 font-sans focus:outline-none focus:border-velmora-accent cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Mobile sort */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setMobileSortOpen(!mobileSortOpen)}
                  className="flex items-center gap-1 text-sm text-velmora-base/70 hover:text-velmora-base transition-colors"
                >
                  Sort
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {mobileSortOpen && (
                  <div className="absolute right-0 top-8 z-20 bg-white shadow-lg border border-velmora-muted py-2 w-48">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setMobileSortOpen(false); }}
                        className={`block w-full text-left px-4 py-1.5 text-sm hover:bg-velmora-muted transition-colors ${
                          sortBy === opt.value ? 'text-velmora-accent font-medium' : 'text-velmora-base/70'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="body-text mb-4">No products match your filters.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('');
                    setPriceRange([0, 120]);
                    setMaterialFilter('');
                  }}
                  className="btn-outline text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="aspect-square bg-velmora-muted mb-4 overflow-hidden">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-grid-${product.id}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span id={product.titleId} className="hidden">{product.name}</span>
                      <span id={product.descId} className="hidden">{product.summary}</span>
                    </div>
                    <p className="product-name group-hover:text-velmora-accent transition-colors">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-muted-2'}`}
                        />
                      ))}
                      <span className="caption ml-1">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl animate-slide-in-right p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-sm hover:text-velmora-accent">Done</button>
            </div>

            <div className="mb-6">
              <h4 className="caption mb-3">Category</h4>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`block w-full text-left text-sm py-1.5 ${
                      activeCategory === cat.value ? 'text-velmora-accent font-medium' : 'text-velmora-base/70'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="caption mb-3">Price</h4>
              {[
                { label: 'Under $50', range: [0, 50] },
                { label: '$50 – $100', range: [50, 100] },
                { label: 'Over $100', range: [100, 200] },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() =>
                    setPriceRange(
                      priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                        ? [0, 120]
                        : opt.range
                    )
                  }
                  className={`block w-full text-left text-sm py-1.5 ${
                    priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                      ? 'text-velmora-accent font-medium'
                      : 'text-velmora-base/70'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div>
              <h4 className="caption mb-3">Material</h4>
              {['gold', 'silver'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setMaterialFilter(materialFilter === mat ? '' : mat)}
                  className={`block w-full text-left text-sm py-1.5 capitalize ${
                    materialFilter === mat ? 'text-velmora-accent font-medium' : 'text-velmora-base/70'
                  }`}
                >
                  {mat === 'gold' ? '18K Gold Plated' : 'Silver Tone'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [material, setMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, priceRange, material, sortBy]);

  const materials = ['All', '18K Gold Plated', 'Crystal Accent'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    filtered = filtered.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

    if (material !== 'All') {
      if (material === '18K Gold Plated') {
        filtered = filtered.filter((p) => p.materials.includes('18K gold-plated'));
      } else if (material === 'Crystal Accent') {
        filtered = filtered.filter((p) => p.materials.includes('crystal'));
      }
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, material, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-velmora-deep font-medium'
                  : 'text-velmora-muted hover:text-velmora-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium mb-4">Price Range</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
            className="w-20 px-3 py-2 border border-velmora-line text-sm bg-transparent focus:outline-none focus:border-velmora-deep"
            placeholder="Min"
          />
          <span className="text-velmora-line">&mdash;</span>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className="w-20 px-3 py-2 border border-velmora-line text-sm bg-transparent focus:outline-none focus:border-velmora-deep"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm transition-colors ${
                material === mat
                  ? 'text-velmora-deep font-medium'
                  : 'text-velmora-muted hover:text-velmora-deep'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Shop All</h1>
          <p className="section-subtitle mt-3">
            {selectedCategory !== 'All' ? selectedCategory : 'Explore our full collection'}
          </p>
        </div>

        <div className="flex gap-10 lg:gap-16">
          {/* Desktop filter sidebar */}
          <aside className="hidden md:block w-52 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-line">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-medium"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <span className="text-xs text-velmora-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs tracking-wider uppercase font-medium bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Mobile filter overlay */}
            {filterOpen && (
              <div className="md:hidden mb-8 p-6 border border-velmora-line animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest uppercase font-medium">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange({ min: 0, max: 200 });
                    setMaterial('All');
                  }}
                  className="btn-subtle mt-4"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.imageId}`}
                        data-strk-img={`[shop-product-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'fill-velmora-gold text-velmora-gold'
                                : 'fill-velmora-line text-velmora-line'
                            }`}
                          />
                        ))}
                        <span className="text-[10px] text-velmora-muted ml-1">({product.reviewCount})</span>
                      </div>
                      <h3 id={`shop-product-name-${product.id}`} className="product-name text-velmora-deep">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-velmora-muted">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

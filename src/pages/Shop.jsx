import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const materials = ['Gold', 'Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    price: null,
    material: null,
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (filters.price) {
      result = result.filter(
        (p) => p.price >= filters.price.min && p.price <= filters.price.max
      );
    }

    // Material filter
    if (filters.material) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase() === filters.material.toLowerCase())
      );
    }

    // Sort
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
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, filters, sortBy]);

  const clearFilters = () => {
    setFilters({ price: null, material: null });
    setSortBy('featured');
  };

  const hasActiveFilters = filters.price || filters.material;

  return (
    <div className="container-wide section-padding pt-28 md:pt-36 pb-20" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
          {activeCategory === 'All' ? 'Shop All' : activeCategory}
        </h1>
        <hr className="hairline-divider w-12 mx-auto mt-6" />
      </div>

      <div className="flex gap-10">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          {/* Categories */}
          <div className="mb-8">
            <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-4">
              Category
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      if (cat === 'All') {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat });
                      }
                    }}
                    className={`text-sm transition-colors ${
                      activeCategory === cat
                        ? 'text-velmora-golddark font-medium'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-4">
              Price
            </h4>
            <ul className="space-y-2.5">
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <button
                    onClick={() =>
                      setFilters((f) => ({
                        ...f,
                        price: f.price?.label === range.label ? null : range,
                      }))
                    }
                    className={`text-sm transition-colors ${
                      filters.price?.label === range.label
                        ? 'text-velmora-golddark font-medium'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Material */}
          <div className="mb-8">
            <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-4">
              Finish
            </h4>
            <ul className="space-y-2.5">
              {materials.map((mat) => (
                <li key={mat}>
                  <button
                    onClick={() =>
                      setFilters((f) => ({
                        ...f,
                        material: f.material === mat ? null : mat,
                      }))
                    }
                    className={`text-sm transition-colors ${
                      filters.material === mat
                        ? 'text-velmora-golddark font-medium'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
            <div className="flex items-center gap-3">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-taupe hover:text-velmora-charcoal transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <span className="text-xs text-velmora-taupe hidden md:inline">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velmora-charcoal pr-6 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe" />
            </div>
          </div>

          {/* Active filter chips */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {filters.price && (
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-velmora-sand px-3 py-1.5">
                  {filters.price.label}
                  <button onClick={() => setFilters((f) => ({ ...f, price: null }))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filters.material && (
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-velmora-sand px-3 py-1.5">
                  {filters.material}
                  <button onClick={() => setFilters((f) => ({ ...f, material: null }))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-[11px] tracking-wider uppercase text-velmora-taupe underline underline-offset-2 hover:text-velmora-charcoal transition-colors"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Mobile filters panel */}
          {showFilters && (
            <div className="lg:hidden bg-velmora-sand/20 p-6 mb-6 animate-fade-in space-y-6">
              <div>
                <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        if (cat === 'All') {
                          setSearchParams({});
                        } else {
                          setSearchParams({ category: cat });
                        }
                      }}
                      className={`text-xs px-3 py-1.5 border transition-colors ${
                        activeCategory === cat
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-sand text-velmora-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          price: f.price?.label === range.label ? null : range,
                        }))
                      }
                      className={`text-xs px-3 py-1.5 border transition-colors ${
                        filters.price?.label === range.label
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-sand text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[11px] tracking-superwide uppercase font-medium text-velmora-charcoal mb-3">Finish</h4>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          material: f.material === mat ? null : mat,
                        }))
                      }
                      className={`text-xs px-3 py-1.5 border transition-colors ${
                        filters.material === mat
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-sand text-velmora-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velmora-taupe text-sm mb-4">No products found matching your criteria.</p>
              <button onClick={clearFilters} className="btn-outline text-xs">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

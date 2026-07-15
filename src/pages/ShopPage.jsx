import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [filters, setFilters] = useState(() => {
    const initial = {};
    if (categoryParam) initial.category = [categoryParam];
    return initial;
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Reset filters when URL category changes
  useEffect(() => {
    if (categoryParam) {
      setFilters({ category: [categoryParam] });
    }
  }, [categoryParam]);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const activeCount = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category?.length) {
      result = result.filter((p) => filters.category.includes(p.category));
    }
    if (filters.material?.length) {
      result = result.filter((p) => filters.material.includes(p.material));
    }
    if (filters.price?.length) {
      result = result.filter((p) => {
        return filters.price.some((range) => {
          if (range === 'under-50') return p.price < 50;
          if (range === '50-100') return p.price >= 50 && p.price <= 100;
          if (range === 'over-100') return p.price > 100;
          return true;
        });
      });
    }

    switch (sort) {
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
  }, [filters, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso font-medium">
          {categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'Shop All'}
        </h1>
        <p className="section-subhead">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex gap-10">
        {/* Sidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          mobileOpen={mobileFilterOpen}
          setMobileOpen={setMobileFilterOpen}
        />

        {/* Main */}
        <div ref={containerRef} className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 text-xs tracking-wide uppercase text-velmora-charcoal"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters{activeCount > 0 ? ` (${activeCount})` : ''}
            </button>

            <div className="hidden lg:block text-xs text-velmora-stone">
              {activeCount > 0 && (
                <span>{activeCount} filter{activeCount > 1 ? 's' : ''} active</span>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase text-velmora-charcoal"
              >
                Sort: {sortOptions.find((o) => o.value === sort)?.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>

              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-velmora-sand z-20 py-1">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSort(opt.value); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-xs hover:bg-velmora-sand/50 transition-colors ${
                          sort === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velmora-stone">No products match your selected filters.</p>
              <button
                onClick={() => setFilters({})}
                className="mt-3 text-xs text-velmora-gold underline hover:text-velmora-gold-dark"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-name-${product.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                        className="w-full bg-velmora-espresso/90 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <span id={`shop-name-${product.id}`} className="hidden">{product.name}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="text-sm text-velmora-stone mt-0.5">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

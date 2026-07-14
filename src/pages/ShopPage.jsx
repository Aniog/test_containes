import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80 - $100', min: 80, max: 100 },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activePriceRange = searchParams.get('priceRange') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'All' || value === '' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (activeSort) {
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
  }, [activeCategory, activePriceRange, activeSort]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: 'Gold',
      quantity: 1,
    });
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                activeCategory === cat
                  ? 'text-gold font-medium'
                  : 'text-taupe hover:text-charcoal'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-beige" />

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setFilter(
                  'priceRange',
                  activePriceRange === range.label ? '' : range.label
                )
              }
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                activePriceRange === range.label
                  ? 'text-gold font-medium'
                  : 'text-taupe hover:text-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page header */}
      <div className="bg-white border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-wider text-center">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-taupe text-sm text-center mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter & sort bar */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <select
                value={activeSort}
                onChange={(e) => setFilter('sort', e.target.value)}
                className="text-xs uppercase tracking-widest bg-transparent border-none focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <select
                value={activeSort}
                onChange={(e) => setFilter('sort', e.target.value)}
                className="text-xs uppercase tracking-widest bg-transparent border border-beige px-3 py-2 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group product-card"
                  >
                    <div className="relative aspect-[3/4] bg-beige overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="product-image-overlay" />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-3 left-3 right-3 bg-charcoal text-cream text-[10px] uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Quick Add
                      </button>
                    </div>
                    <h3 className="text-[11px] uppercase tracking-widest font-medium text-charcoal truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span className="text-[10px] text-taupe">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-cream z-50 lg:hidden shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
              <h3 className="text-xs uppercase tracking-widest font-medium">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
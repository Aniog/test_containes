import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const { addItem } = useCart();

  const filters = {
    categories: [
      { id: 'all', name: 'All' },
      { id: 'earrings', name: 'Earrings' },
      { id: 'necklaces', name: 'Necklaces' },
      { id: 'huggies', name: 'Huggies' },
    ],
    materials: ['Gold', 'Silver'],
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sort) {
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
  }, [activeCategory, sort]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-bronze-900 mb-4">Category</h4>
        <div className="space-y-2">
          {filters.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-bronze-700 font-medium'
                  : 'text-taupe-500 hover:text-bronze-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-bronze-900 mb-4">Material</h4>
        <div className="space-y-2">
          {filters.materials.map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-3.5 h-3.5 border-bronze-300 text-bronze-600 focus:ring-bronze-500 rounded-none"
              />
              <span className="text-sm text-taupe-500 group-hover:text-bronze-700 transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="section-padding pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide mb-3">
          {activeCategory === 'all' ? 'Shop All' : filters.categories.find((c) => c.id === activeCategory)?.name}
        </h1>
        <p className="text-sm text-taupe-500 tracking-wider uppercase">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar - desktop */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <FilterSidebar />
        </aside>

        {/* Mobile filter toggle */}
        <div className="md:hidden w-full mb-6">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="w-full flex items-center justify-between py-3 border-b border-bronze-200 text-xs tracking-[0.15em] uppercase text-bronze-700"
          >
            Filters
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileFilters ? 'rotate-180' : ''}`} />
          </button>
          {mobileFilters && (
            <div className="py-4">
              <FilterSidebar />
            </div>
          )}
        </div>

        {/* Main grid */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-taupe-400 hidden md:block">
              Showing {filtered.length} results
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-[10px] tracking-[0.15em] uppercase text-bronze-500 hidden sm:inline">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs py-2 px-3 bg-transparent border border-bronze-300 text-bronze-700 focus:outline-none focus:border-bronze-500 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group no-underline"
              >
                <div className="aspect-[3/4] bg-bronze-100 overflow-hidden mb-3 relative">
                  <div className="w-full h-full bg-bronze-200 flex items-center justify-center group-hover:opacity-80 transition-opacity">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-bronze-500 text-center px-2">
                      {product.name}
                    </span>
                  </div>
                  {/* Quick add */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, 'Gold', 1);
                    }}
                    className="absolute bottom-2 right-2 p-2 bg-cream/90 backdrop-blur-sm text-bronze-700 hover:bg-bronze-600 hover:text-cream transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100"
                    aria-label="Add to cart"
                  >
                    <span className="text-[9px] tracking-wider uppercase">+ Add</span>
                  </button>
                </div>
                <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-bronze-900 group-hover:text-bronze-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-bronze-500 text-bronze-500' : 'text-bronze-300'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-bronze-700 mt-1">${product.price}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-taupe-400 text-sm tracking-wider uppercase">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

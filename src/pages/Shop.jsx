import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useProducts } from '@/hooks/useProducts';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under40', label: 'Under $40' },
  { value: '40to60', label: '$40 – $60' },
  { value: '60to100', label: '$60 – $100' },
  { value: 'over100', label: 'Over $100' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants?.[0] || 'Gold';
    addItem(product, variant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered && product.image_hover_url ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.image_hover_url && (
          <img
            src={product.image_hover_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 text-center text-xs uppercase tracking-extra-wide font-medium transition-all duration-300 ${
            added
              ? 'bg-charcoal-800 text-cream-50'
              : 'bg-cream-50/95 text-charcoal-950 translate-y-full group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added to Bag' : 'Add to Cart'}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-sm uppercase tracking-wide text-charcoal-950">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-charcoal-600">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const { products, loading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const priceParam = searchParams.get('price') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let list = [...products];

    if (categoryParam !== 'all') {
      list = list.filter((p) => p.category === categoryParam);
    }

    if (priceParam !== 'all') {
      list = list.filter((p) => {
        if (priceParam === 'under40') return p.price < 40;
        if (priceParam === '40to60') return p.price >= 40 && p.price <= 60;
        if (priceParam === '60to100') return p.price > 60 && p.price <= 100;
        if (priceParam === 'over100') return p.price > 100;
        return true;
      });
    }

    if (sortParam === 'price_asc') list.sort((a, b) => a.price - b.price);
    if (sortParam === 'price_desc') list.sort((a, b) => b.price - a.price);
    if (sortParam === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, categoryParam, priceParam, sortParam]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const activeFiltersCount =
    (categoryParam !== 'all' ? 1 : 0) + (priceParam !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-cream-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-light">
            Shop All
          </h1>
          <p className="mt-2 text-sm text-charcoal-500">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal-700 border border-charcoal-200 px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-charcoal-950 text-cream-50 text-[10px] rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => updateFilter('category', cat.value)}
                className={`text-sm tracking-wide transition-colors ${
                  categoryParam === cat.value
                    ? 'text-charcoal-950 font-medium'
                    : 'text-charcoal-400 hover:text-charcoal-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700 border border-charcoal-200 px-4 py-2"
            >
              {sortOptions.find((s) => s.value === sortParam)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-cream-50 border border-charcoal-200 shadow-lg z-20 min-w-[180px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateFilter('sort', opt.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-charcoal-100 transition-colors ${
                        sortParam === opt.value
                          ? 'text-charcoal-950 font-medium'
                          : 'text-charcoal-600'
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

        <div className="flex gap-8">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => updateFilter('category', cat.value)}
                    className={`block text-sm transition-colors ${
                      categoryParam === cat.value
                        ? 'text-charcoal-950 font-medium'
                        : 'text-charcoal-500 hover:text-charcoal-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={`block text-sm transition-colors ${
                      priceParam === range.value
                        ? 'text-charcoal-950 font-medium'
                        : 'text-charcoal-500 hover:text-charcoal-800'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {loading ? (
              <div className="py-24 text-center">
                <div className="w-8 h-8 border-2 border-charcoal-200 border-t-gold-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-lg text-charcoal-500">
                  No pieces match your filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-sm text-gold-700 hover:text-gold-800 underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-cream-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-3">
                Category
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => updateFilter('category', cat.value)}
                    className={`px-4 py-2 text-xs uppercase tracking-wide border transition-colors ${
                      categoryParam === cat.value
                        ? 'bg-charcoal-950 text-cream-50 border-charcoal-950'
                        : 'border-charcoal-200 text-charcoal-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-3">
                Price
              </h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={`px-4 py-2 text-xs uppercase tracking-wide border transition-colors ${
                      priceParam === range.value
                        ? 'bg-charcoal-950 text-cream-50 border-charcoal-950'
                        : 'border-charcoal-200 text-charcoal-600'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-charcoal-950 text-cream-50 py-3 text-sm uppercase tracking-extra-wide font-medium"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

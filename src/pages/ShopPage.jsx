import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
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
  }, [activeCategory, sort]);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-page">
        {/* Header */}
        <div className="mb-12">
          <p className="text-stone text-xs tracking-widest uppercase mb-3">Shop</p>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">
            {activeCategory ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : 'All Pieces'}
          </h1>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filter — desktop */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-5">Category</h3>
              <ul className="space-y-3.5">
                {[
                  { value: '', label: 'All' },
                  { value: 'earrings', label: 'Earrings' },
                  { value: 'necklaces', label: 'Necklaces' },
                  { value: 'huggies', label: 'Huggies' },
                ].map((cat) => (
                  <li key={cat.value}>
                    <button
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`text-sm transition-colors ${
                        activeCategory === cat.value
                          ? 'text-charcoal font-medium'
                          : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-widest uppercase text-charcoal font-medium mt-10 mb-5">Price</h3>
              <ul className="space-y-3.5">
                {['Under $50', '$50 – $100', 'Over $100'].map((range) => (
                  <li key={range}>
                    <button className="text-sm text-stone hover:text-charcoal transition-colors">
                      {range}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-widest uppercase text-charcoal font-medium mt-10 mb-5">Material</h3>
              <ul className="space-y-3.5">
                {['18K Gold Plated', 'Silver Tone'].map((mat) => (
                  <li key={mat}>
                    <button className="text-sm text-stone hover:text-charcoal transition-colors">
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden w-full flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filter
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase text-charcoal pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>

          {/* Mobile filter panel */}
          {mobileFilterOpen && (
            <div className="md:hidden fixed inset-0 z-20 bg-cream pt-20 px-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: '', label: 'All' },
                      { value: 'earrings', label: 'Earrings' },
                      { value: 'necklaces', label: 'Necklaces' },
                      { value: 'huggies', label: 'Huggies' },
                    ].map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          handleCategoryChange(cat.value);
                          setMobileFilterOpen(false);
                        }}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                          activeCategory === cat.value
                            ? 'border-charcoal bg-charcoal text-white'
                            : 'border-warm-200 text-stone'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="btn-primary w-full"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort — desktop */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase text-stone pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-stone">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Filter, X } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets & Gifts' },
];

const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-70', label: '$50 - $70' },
  { value: '70-100', label: '$70 - $100' },
  { value: '100-500', label: '$100+' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [addedId, setAddedId] = useState(null);

  // Sync category from URL
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [category, priceRange, sort]);

  const handleAddToCart = (product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-near-black font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => {
                handleCategoryChange(c.value);
                setMobileFiltersOpen(false);
              }}
              className={cn(
                'block text-sm transition-colors',
                category === c.value ? 'text-gold font-medium' : 'text-taupe hover:text-near-black'
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-near-black font-medium mb-3">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((p) => (
            <button
              key={p.value}
              onClick={() => setPriceRange(p.value === priceRange ? '' : p.value)}
              className={cn(
                'block text-sm transition-colors',
                priceRange === p.value ? 'text-gold font-medium' : 'text-taupe hover:text-near-black'
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-ivory pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black text-center">
            All Jewelry
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        {/* Mobile filter toggle */}
        <div className="flex md:hidden items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-near-black"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs uppercase tracking-wider text-near-black bg-transparent border border-beige px-3 py-2"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FiltersContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort — desktop */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs uppercase tracking-wider text-near-black bg-transparent border border-beige px-3 py-2"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe">No pieces match your filters.</p>
                <button
                  onClick={() => { setCategory(''); setPriceRange(''); }}
                  className="text-gold text-sm mt-2 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-beige/30 aspect-[3/4] mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className={cn(
                          'absolute bottom-3 left-3 right-3 bg-near-black/80 text-white text-xs uppercase tracking-wider py-2.5 font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-near-black',
                          addedId === product.id && '!bg-gold !opacity-100'
                        )}
                      >
                        {addedId === product.id ? 'Added!' : 'Quick Add'}
                      </button>
                    </Link>
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="font-serif text-xs uppercase tracking-wide-lg text-near-black truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-[11px] text-taupe">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium text-near-black mt-1">
                        ${product.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 shadow-xl transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs uppercase tracking-wider font-medium text-near-black">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X className="w-4 h-4 text-near-black" />
            </button>
          </div>
          <FiltersContent />
        </div>
      </div>
    </main>
  );
}
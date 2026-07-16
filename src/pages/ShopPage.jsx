import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, Plus, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
];

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 – $75', value: '50-75' },
  { label: '$75 – $100', value: '75-100' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const [priceFilter, setPriceFilter] = useState('');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
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
  }, [activeCategory, priceFilter, sort]);

  const setCategory = (val) => {
    if (val) {
      setSearchParams({ category: val });
    } else {
      setSearchParams({});
    }
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-sans text-[11px] tracking-widest uppercase text-velmora-dark mb-3">Category</h4>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => { setCategory(cat.value); if (filtersOpen) setFiltersOpen(false); }}
              className={`text-left text-sm py-1 transition-colors ${
                activeCategory === cat.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-[11px] tracking-widest uppercase text-velmora-dark mb-3">Price</h4>
        <div className="flex flex-col gap-1.5">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => { setPriceFilter(range.value); if (filtersOpen) setFiltersOpen(false); }}
              className={`text-left text-sm py-1 transition-colors ${
                priceFilter === range.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-dark'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="velmora-container">
        {/* Header */}
        <div className="py-8 md:py-12">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">
            The Collection
          </p>
          <h1 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light">
            {activeCategory ? categories.find((c) => c.value === activeCategory)?.label : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-velmora-gold/40 mt-4" />
        </div>

        <div className="flex gap-8 pb-16">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-gold/10">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="lg:hidden flex items-center gap-1.5 text-xs tracking-widest uppercase text-velmora-dark font-sans"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {(activeCategory || priceFilter) && (
                  <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
                )}
              </button>

              <p className="text-xs text-velmora-taupe">{filtered.length} products</p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velmora-dark font-sans pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-taupe pointer-events-none" />
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {filtersOpen && (
              <div className="lg:hidden bg-velmora-sand/50 p-5 mb-6 relative">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="absolute top-3 right-3 text-velmora-taupe hover:text-velmora-dark"
                >
                  <X className="w-4 h-4" />
                </button>
                <FiltersContent />
              </div>
            )}

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-taupe">No products found</p>
                <button
                  onClick={() => { setCategory(''); setPriceFilter(''); }}
                  className="mt-3 text-xs underline text-velmora-dark hover:text-velmora-gold transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal/80 to-velmora-dark flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                            <span className="font-serif text-velmora-gold text-lg italic">V</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-velmora-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, product.variants[0]);
                          }}
                          className="bg-white text-velmora-dark px-5 py-2.5 text-xs font-sans tracking-wider uppercase hover:bg-velmora-gold hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                        >
                          <Plus className="w-3 h-3" /> Add to Cart
                        </button>
                      </div>
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-white text-velmora-dark text-[10px] font-sans tracking-wider uppercase px-2.5 py-1">
                          New
                        </span>
                      )}
                    </Link>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="velmora-product-name text-sm md:text-base mb-1.5">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
                        ))}
                        <span className="text-[11px] text-velmora-taupe ml-1">({product.reviewCount})</span>
                      </div>
                      <p className="font-sans text-sm text-velmora-dark font-medium">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useImageLoader();

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    if (selectedMaterial) {
      list = list.filter((p) => p.material === selectedMaterial);
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const updateCategory = (cat) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-serif text-lg text-velmora-espresso mb-4">Category</h4>
        <div className="space-y-2">
          <button
            type="button"
            aria-pressed={selectedCategory === ''}
            onClick={() => updateCategory('')}
            className={cn(
              'block text-sm w-full text-left py-1 transition-colors',
              selectedCategory === ''
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-stone hover:text-velmora-espresso'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selectedCategory === cat.id}
              onClick={() => updateCategory(cat.id)}
              className={cn(
                'block text-sm w-full text-left py-1 transition-colors',
                selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-espresso'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-serif text-lg text-velmora-espresso mb-4">Price</h4>
        <div className="space-y-2">
          <button
            type="button"
            aria-pressed={selectedPrice === ''}
            onClick={() => setSelectedPrice('')}
            className={cn(
              'block text-sm w-full text-left py-1 transition-colors',
              selectedPrice === ''
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-stone hover:text-velmora-espresso'
            )}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              type="button"
              aria-pressed={selectedPrice === range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={cn(
                'block text-sm w-full text-left py-1 transition-colors',
                selectedPrice === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-espresso'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-serif text-lg text-velmora-espresso mb-4">Material</h4>
        <div className="space-y-2">
          <button
            type="button"
            aria-pressed={selectedMaterial === ''}
            onClick={() => setSelectedMaterial('')}
            className={cn(
              'block text-sm w-full text-left py-1 transition-colors',
              selectedMaterial === ''
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-stone hover:text-velmora-espresso'
            )}
          >
            All Materials
          </button>
          {['18K Gold Plated', 'Gold Vermeil', 'Stainless Steel'].map((mat) => (
            <button
              key={mat}
              type="button"
              aria-pressed={selectedMaterial === mat}
              onClick={() => setSelectedMaterial(mat)}
              className={cn(
                'block text-sm w-full text-left py-1 transition-colors',
                selectedMaterial === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-espresso'
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-10 md:mb-14">
          <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-espresso">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-velmora-espresso/10">
              <p className="text-sm text-velmora-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-espresso/20 text-velmora-espresso text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <label htmlFor="sort" className="sr-only">Sort by</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-2 border border-velmora-espresso/20 bg-transparent text-sm text-velmora-espresso focus:outline-none focus:border-velmora-gold focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-cream"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-espresso mb-2">
                  No pieces match your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedPrice('');
                    setSearchParams({});
                  }}
                  className="text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id}>
                    <span id={`product-title-${product.id}`} className="sr-only">
                      {product.name}
                    </span>
                    <span id={`product-search-${product.id}`} className="sr-only">
                      {product.searchTerms}
                    </span>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-velmora-espresso/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            className="absolute top-0 left-0 h-full w-80 max-w-[80vw] bg-velmora-cream p-6 shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-velmora-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-6 h-6 text-velmora-espresso" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}

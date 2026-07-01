import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/home/ProductCard';
import FilterSidebar from '../components/collection/FilterSidebar';

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'name-asc', name: 'Name: A-Z' },
  { id: 'rating', name: 'Top Rated' },
];

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({ category: 'all', price: 'all', material: 'all' });
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters(prev => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.material !== 'all') {
      result = result.filter(p => p.material === filters.material);
    }

    if (filters.price === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.price === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (filters.price === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  const categoryLabel = filters.category !== 'all'
    ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
    : 'All Jewelry';

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="heading-serif text-3xl md:text-4xl mb-2">{categoryLabel}</h1>
          <p className="text-sm text-[var(--color-velmora-500)]">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm border border-[var(--color-velmora-300)] px-4 py-2 hover:border-[var(--color-charcoal)] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="relative ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 py-2 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-velmora-400)]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="heading-serif text-2xl text-[var(--color-velmora-500)] mb-2">No pieces found</p>
                <p className="text-sm text-[var(--color-velmora-400)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

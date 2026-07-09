import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';
import SortDropdown from '@/components/shop/SortDropdown';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [filters, setFilters] = useState({
    category: initialCategory || null,
    priceRange: null,
    material: null,
  });
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFilters((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.priceRange) {
      result = result.filter(
        (p) => p.price >= filters.priceRange.min && p.price < filters.priceRange.max
      );
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
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
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-text-primary">
            {filters.category
              ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}`
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-text-primary"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="font-sans text-xs text-text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Content */}
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            isOpen={filterOpen}
            onClose={() => setFilterOpen(false)}
          />
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

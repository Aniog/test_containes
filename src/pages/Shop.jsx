import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';

const priceRanges = {
  all: { min: 0, max: Infinity },
  'under-50': { min: 0, max: 50 },
  '50-80': { min: 50, max: 80 },
  'over-80': { min: 80, max: Infinity },
};

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [filters, setFilters] = useState({
    category: categoryParam,
    price: 'all',
    material: 'all',
  });
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryParam }));
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Price filter
    const range = priceRanges[filters.price];
    if (range) {
      result = result.filter(p => p.price >= range.min && p.price < range.max);
    }

    // Sort
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
  }, [filters, sort]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            {filters.category === 'all' ? 'All Jewelry' : filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
          </h1>
          <p className="text-sm text-taupe">
            Discover our curated collection of demi-fine gold jewelry.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-warm pb-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-xs text-taupe hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-warm px-3 py-1.5 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={filterOpen}
            setIsOpen={setFilterOpen}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

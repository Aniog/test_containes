import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/collection/FilterSidebar';
import ProductCard from '@/components/collection/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    maxPrice: 150,
    materials: [],
    sort: 'featured',
  });

  const priceRange = { min: 30, max: 150 };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    result = result.filter(p => p.price <= filters.maxPrice);

    switch (filters.sort) {
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
  }, [filters]);

  const categoryLabel = filters.category === 'all' ? 'All Jewelry' : filters.category;

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-[#F3F0EB] py-12 md:py-16">
        <div className="container-custom">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-2">Collection</p>
          <h1 className="serif-heading text-3xl md:text-5xl font-light capitalize">{categoryLabel}</h1>
          <p className="text-[#6B6560] mt-3 text-sm">{filteredProducts.length} pieces</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-8 md:py-12">
        <div className="flex gap-8 md:gap-10">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            products={products}
            priceRange={priceRange}
          />

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort & count bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#6B6560]">
                Showing {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                  className="appearance-none bg-transparent border border-[#E8E4DF] px-4 py-2 pr-8 text-sm focus:outline-none focus:border-[#B8956A] cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B6560]" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-[#6B6560] mb-2">No pieces found</p>
                <p className="text-sm text-[#9B9590]">Try adjusting your filters to discover more.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

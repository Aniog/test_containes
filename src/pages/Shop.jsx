import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductCard from '@/components/shop/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
    sort: 'featured',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.price !== 'all') {
      const priceRange = {
        'under-50': [0, 50],
        '50-75': [50, 75],
        '75-plus': [75, Infinity],
      }[filters.price];
      if (priceRange) {
        result = result.filter((p) => p.price >= priceRange[0] && p.price < priceRange[1]);
      }
    }

    // Material filter
    if (filters.material !== 'all') {
      if (filters.material === 'gold') {
        result = result.filter((p) => p.variants.includes('gold'));
      } else if (filters.material === 'silver') {
        result = result.filter((p) => p.variants.includes('silver'));
      } else if (filters.material === 'crystal') {
        result = result.filter((p) => p.description.toLowerCase().includes('crystal'));
      }
    }

    // Sort
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
      case 'newest':
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-wide mb-2">
            {filters.category === 'all' ? 'All Jewelry' : 
             filters.category === 'earrings' ? 'Earrings' :
             filters.category === 'necklaces' ? 'Necklaces' : 'Huggies'}
          </h1>
          <p className="text-[#78716C] text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DF]">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-[#1A1A1A] font-medium tracking-wide"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden lg:block" />

              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={handleSortChange}
                  className="appearance-none bg-transparent border border-[#E8E4DF] px-4 py-2 pr-10 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B8860B] transition-colors duration-300 cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C] pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#78716C] text-lg mb-4">No pieces found</p>
                <p className="text-[#A8A29E] text-sm">
                  Try adjusting your filters to discover more jewelry.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

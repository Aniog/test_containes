import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import { SortSelect } from '@/components/shop/SortSelect';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(() =>
    categoryParam ? [categoryParam] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
    if (categoryParam) {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  };

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => p.material.some((m) => selectedMaterials.includes(m)));
    }

    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

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
  }, [selectedCategories, selectedMaterials, priceRange, sort]);

  const containerRef = useImageLoader([filteredProducts.map((p) => p.id).join(','), sort]);
  const sectionTitleId = 'shop-title';

  return (
    <div ref={containerRef} className="bg-cream pb-20 pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-warmGray">The Collection</p>
          <h1 id={sectionTitleId} className="heading-lg">Shop All Jewelry</h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-taupe px-4 py-2 text-sm uppercase tracking-wide"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedMaterials={selectedMaterials}
              toggleMaterial={toggleMaterial}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Mobile sidebar drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream p-6 shadow-2xl">
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  selectedMaterials={selectedMaterials}
                  toggleMaterial={toggleMaterial}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  onClose={() => setMobileFiltersOpen(false)}
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-warmGray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <SortSelect value={sort} onChange={setSort} />
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setPriceRange({ min: 0, max: 200 });
                    setSort('featured');
                  }}
                  className="btn-outline mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} sectionTitleId={sectionTitleId} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

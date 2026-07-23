import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, formatPrice } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const materials = ['18K Gold Plated', 'Sterling Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategories, selectedMaterials, priceRange, sort]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && matMatch && priceMatch;
    });

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, priceRange, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat],
    );
  };

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + (priceRange[1] < 150 ? 1 : 0);

  const Filters = ({ mobile = false }) => (
    <div className="space-y-8">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="font-serif text-xl">Filters</h3>
        <button onClick={() => setMobileFiltersOpen(false)}>
          <X className="w-5 h-5" strokeWidth={1.6} />
        </button>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 text-sm text-clay cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-gold-600 border-warmgray"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4">Material</h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-3 text-sm text-clay cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-gold-600 border-warmgray"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4">Price</h4>
        <input
          type="range"
          min={0}
          max={150}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full accent-gold-600"
        />
        <div className="flex items-center justify-between text-sm text-clay mt-2">
          <span>{formatPrice(0)}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedMaterials([]);
            setPriceRange([0, 150]);
          }}
          className="text-xs uppercase tracking-[0.2em] font-medium text-gold-600 hover:text-gold-700"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">Shop All Jewelry</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <Filters />
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium border border-warmgray px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.6} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 bg-gold-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-warmgray pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-gold-600"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" strokeWidth={1.6} />
              </div>
            </div>

            <p className="text-sm text-clay mb-6">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} queryContext="[shop-title]" />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-parchment border border-warmgray">
                <p className="font-serif text-2xl mb-3">No pieces match</p>
                <p className="text-sm text-clay mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setPriceRange([0, 150]);
                  }}
                  className="bg-gold-600 text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
            <div id="shop-title" className="sr-only">
              Velmora Fine Jewelry Shop
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl p-6 overflow-y-auto transition-transform duration-400',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <Filters mobile />
        </div>
      </div>
    </div>
  );
}

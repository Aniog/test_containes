import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductCard } from '@/components/ui/ProductCard';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { cn } from '@/lib/utils';

const PRICE_OPTIONS = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const MATERIALS = ['18K Gold Plated'];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (containerRef.current) {
        ImageHelper.disconnect(containerRef.current);
      }
    };
  }, [searchParams.toString()]);

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const opt = PRICE_OPTIONS.find((o) => o.label === label);
          return opt && p.price >= opt.min && p.price < opt.max;
        })
      );
    }

    if (selectedMaterials.length) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const Filters = ({ isMobile = false }) => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-cormorant text-xl font-semibold uppercase tracking-[0.15em] text-espresso">
          Filters
        </h3>
        {(selectedCategories.length || selectedPrices.length || selectedMaterials.length) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 font-sans text-xs uppercase tracking-wider text-taupe hover:text-espresso"
          >
            <X className="h-3 w-3" /> Clear
          </button>
        )}
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso">
          Category
        </h4>
        <div className="space-y-3">
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-taupe"
            >
              <Checkbox
                checked={selectedCategories.includes(cat.id)}
                onCheckedChange={() => toggleCategory(cat.id)}
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso">
          Price
        </h4>
        <div className="space-y-3">
          {PRICE_OPTIONS.map((opt) => (
            <label
              key={opt.label}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-taupe"
            >
              <Checkbox
                checked={selectedPrices.includes(opt.label)}
                onCheckedChange={() => togglePrice(opt.label)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso">
          Material
        </h4>
        <div className="space-y-3">
          {MATERIALS.map((mat) => (
            <label
              key={mat}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-taupe"
            >
              <Checkbox
                checked={selectedMaterials.includes(mat)}
                onCheckedChange={() => toggleMaterial(mat)}
              />
              {mat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-paper pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            The Collection
          </p>
          <h1 className="font-playfair text-4xl font-medium text-espresso md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop filters */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <Filters />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-taupe">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-3">
                {/* Mobile filter sheet */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-none border-hairline bg-white text-espresso hover:bg-sand lg:hidden"
                    >
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-paper p-6">
                    <Filters isMobile />
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                  <label className="hidden text-xs uppercase tracking-wider text-taupe sm:block">
                    Sort
                  </label>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="h-10 border border-hairline bg-white px-3 font-sans text-sm text-espresso focus:border-gold focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {filtered.length ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-playfair text-xl text-espresso">
                  No pieces match your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4 rounded-none border-espresso text-espresso hover:bg-espresso hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

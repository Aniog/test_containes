import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { label: 'All Materials', value: 'all' },
  { label: 'Gold Plated', value: 'gold-plated' },
  { label: 'Silver Plated', value: 'silver-plated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const priceRange = priceRanges[selectedPrice];
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price < priceRange.max
    );

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [filtered]);

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice !== 0 ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(0);
    setSelectedMaterial('all');
    setSearchParams({});
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
            Collection
          </p>
          <h1 className="font-serif text-3xl text-base md:text-4xl">
            Shop All Jewelry
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 border border-border bg-surface px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-base md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px] text-xs uppercase tracking-widest">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Sidebar Filters */}
        <aside
          className={`${
            mobileFiltersOpen ? 'block' : 'hidden'
          } w-full flex-shrink-0 md:block md:w-56`}
        >
          <div className="flex items-center justify-between md:hidden">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
              Filters
            </h3>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="mb-6 text-xs text-accent underline-offset-4 hover:underline"
            >
              Clear all filters
            </button>
          )}

          {/* Category */}
          <div className="mb-8">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
              Category
            </h3>
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-base">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => {
                    setSelectedCategory('all');
                    setSearchParams({});
                  }}
                  className="accent-accent"
                />
                All
              </label>
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex cursor-pointer items-center gap-2 text-sm text-base"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.id}
                    onChange={() => {
                      setSelectedCategory(cat.id);
                      setSearchParams({ category: cat.id });
                    }}
                    className="accent-accent"
                  />
                  {cat.label}
                </label>
              ))}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-base">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'sets'}
                  onChange={() => {
                    setSelectedCategory('sets');
                    setSearchParams({ category: 'sets' });
                  }}
                  className="accent-accent"
                />
                Gift Sets
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
              Price
            </h3>
            <div className="flex flex-col gap-2">
              {priceRanges.map((range, idx) => (
                <label
                  key={range.label}
                  className="flex cursor-pointer items-center gap-2 text-sm text-base"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === idx}
                    onChange={() => setSelectedPrice(idx)}
                    className="accent-accent"
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          {/* Material */}
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
              Material
            </h3>
            <div className="flex flex-col gap-2">
              {materials.map((mat) => (
                <label
                  key={mat.value}
                  className="flex cursor-pointer items-center gap-2 text-sm text-base"
                >
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === mat.value}
                    onChange={() => setSelectedMaterial(mat.value)}
                    className="accent-accent"
                  />
                  {mat.label}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div ref={gridRef} className="flex-1">
          <p className="mb-4 text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-serif text-xl text-muted">
                No products match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-xs font-medium uppercase tracking-widest text-accent underline-offset-4 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
  { value: 'newest', label: 'Newest' },
];

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: 1000 },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 1000 },
];
const materialOptions = ['All', 'Gold', 'Silver Tone'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [material, setMaterial] = useState('All');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (material !== 'All') {
      filtered = filtered.filter((p) => p.colors.includes(material));
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, sort, priceRange, material]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const resetFilters = () => {
    setSearchParams({});
    setSort('featured');
    setPriceRange(priceRanges[0]);
    setMaterial('All');
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Close on mobile */}
      <div className="flex items-center justify-between md:hidden">
        <h3 className="font-serif text-lg tracking-wide text-velmora-dark">Filters</h3>
        <button onClick={() => setMobileFiltersOpen(false)}>
          <X className="w-5 h-5 text-velmora-subtle" />
        </button>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">Category</h4>
        <ul className="space-y-3">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm font-sans transition-colors ${
                  activeCategory === cat
                    ? 'text-velmora-dark font-medium'
                    : 'text-velmora-subtle hover:text-velmora-dark'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">Price</h4>
        <ul className="space-y-3">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => setPriceRange(range)}
                className={`text-sm font-sans transition-colors ${
                  priceRange.label === range.label
                    ? 'text-velmora-dark font-medium'
                    : 'text-velmora-subtle hover:text-velmora-dark'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">Material</h4>
        <ul className="space-y-3">
          {materialOptions.map((mat) => (
            <li key={mat}>
              <button
                onClick={() => setMaterial(mat)}
                className={`text-sm font-sans transition-colors ${
                  material === mat
                    ? 'text-velmora-dark font-medium'
                    : 'text-velmora-subtle hover:text-velmora-dark'
                }`}
              >
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset */}
      <button
        onClick={resetFilters}
        className="text-[10px] tracking-widest uppercase font-sans text-velmora-subtle hover:text-velmora-dark transition-colors underline underline-offset-4"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto section-padding py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-5" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-border">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-sans text-velmora-subtle hover:text-velmora-dark transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <p className="text-xs text-velmora-subtle font-sans hidden md:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase font-sans text-velmora-dark pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-subtle pointer-events-none" />
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-dark mb-4">No pieces match your filters</p>
                <button
                  onClick={resetFilters}
                  className="btn-outline text-xs tracking-widest uppercase"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-velmora-base z-50 p-6 overflow-y-auto md:hidden animate-slide-down">
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice !== 'all') {
      if (activePrice === 'under40') result = result.filter((p) => p.price < 40);
      if (activePrice === '40to60') result = result.filter((p) => p.price >= 40 && p.price <= 60);
      if (activePrice === '60to100') result = result.filter((p) => p.price > 60 && p.price <= 100);
      if (activePrice === 'over100') result = result.filter((p) => p.price > 100);
    }

    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activeMaterial, activePrice, sort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams(new URLSearchParams());

  const hasFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const FilterGroup = ({ title, options, active, paramKey }) => (
    <div className="mb-8">
      <h4 className="mb-3 font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
        {title}
      </h4>
      <div className="flex flex-col gap-2">
        {options.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => updateFilter(paramKey, value)}
            className={`text-left font-sans text-sm transition-colors ${
              active === value
                ? 'font-medium text-velmora-charcoal'
                : 'text-velmora-taupe hover:text-velmora-brown'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
            Shop All
          </h1>
          <p className="mt-2 font-sans text-sm text-velmora-taupe">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-velmora-sand pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-charcoal md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs uppercase tracking-widest text-velmora-taupe transition-colors hover:text-velmora-charcoal"
              >
                Clear All
              </button>
            )}
          </div>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent pr-6 font-sans text-xs uppercase tracking-widest text-velmora-charcoal focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-velmora-taupe" />
          </div>
        </div>

        <div className="mt-8 flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-52 flex-shrink-0 md:block">
            <FilterGroup
              title="Category"
              paramKey="category"
              active={activeCategory}
              options={[
                { value: 'all', label: 'All' },
                { value: 'earrings', label: 'Earrings' },
                { value: 'necklaces', label: 'Necklaces' },
                { value: 'huggies', label: 'Huggies' },
                { value: 'sets', label: 'Gift Sets' },
              ]}
            />
            <FilterGroup
              title="Price"
              paramKey="price"
              active={activePrice}
              options={[
                { value: 'all', label: 'All' },
                { value: 'under40', label: 'Under $40' },
                { value: '40to60', label: '$40 – $60' },
                { value: '60to100', label: '$60 – $100' },
                { value: 'over100', label: 'Over $100' },
              ]}
            />
            <FilterGroup
              title="Material"
              paramKey="material"
              active={activeMaterial}
              options={[
                { value: 'all', label: 'All' },
                { value: 'gold', label: 'Gold Plated' },
                { value: 'silver', label: 'Silver Tone' },
              ]}
            />
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-taupe">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-velmora-charcoal underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity md:hidden ${
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-[70] max-h-[80vh] overflow-y-auto rounded-t-2xl bg-velmora-cream p-6 transition-transform duration-500 ease-velmora md:hidden ${
          mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-xl text-velmora-charcoal">Filters</h3>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
            <X size={22} className="text-velmora-taupe" />
          </button>
        </div>
        <FilterGroup
          title="Category"
          paramKey="category"
          active={activeCategory}
          options={[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ]}
        />
        <FilterGroup
          title="Price"
          paramKey="price"
          active={activePrice}
          options={[
            { value: 'all', label: 'All' },
            { value: 'under40', label: 'Under $40' },
            { value: '40to60', label: '$40 – $60' },
            { value: '60to100', label: '$60 – $100' },
            { value: 'over100', label: 'Over $100' },
          ]}
        />
        <button
          onClick={() => {
            clearFilters();
            setMobileFiltersOpen(false);
          }}
          className="mt-4 w-full bg-velmora-espresso py-3 font-sans text-xs uppercase tracking-widest text-velmora-cream"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
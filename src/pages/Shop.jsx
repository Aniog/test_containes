import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Sets' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: '$100+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const { category: catParam } = useParams();
  const [activeCat, setActiveCat] = useState(catParam || 'all');
  const [material, setMaterial] = useState('all');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCat !== 'all') {
      if (activeCat === 'huggies') {
        result = result.filter((p) => p.tags.includes('huggies'));
      } else {
        result = result.filter((p) => p.category === activeCat);
      }
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }

    if (price !== 'all') {
      const [min, max] = price.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
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
      default:
        break;
    }

    return result;
  }, [activeCat, material, price, sort]);

  const pageTitle = catParam
    ? catParam.charAt(0).toUpperCase() + catParam.slice(1)
    : 'Shop All';

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold">
            {pageTitle}
          </h1>
          <p className="font-sans text-sm text-velmora-muted mt-4">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-deep mb-5">
                Category
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setActiveCat(c.value)}
                    className={`text-left font-sans text-sm transition-colors ${
                      activeCat === c.value
                        ? 'text-velmora-gold'
                        : 'text-velmora-muted hover:text-velmora-deep'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-deep mb-5">
                Material
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                {materials.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMaterial(m.value)}
                    className={`text-left font-sans text-sm transition-colors ${
                      material === m.value
                        ? 'text-velmora-gold'
                        : 'text-velmora-muted hover:text-velmora-deep'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-deep mb-5">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPrice(p.value)}
                    className={`text-left font-sans text-sm transition-colors ${
                      price === p.value
                        ? 'text-velmora-gold'
                        : 'text-velmora-muted hover:text-velmora-deep'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFilters(!mobileFilters)}
                className="lg:hidden flex items-center gap-2 font-sans text-sm text-velmora-deep"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="relative ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none font-sans text-sm text-velmora-deep bg-transparent pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {/* Mobile filters */}
            {mobileFilters && (
              <div className="lg:hidden flex flex-wrap gap-6 mb-8 p-5 bg-velmora-sand animate-fade-in">
                <div>
                  <span className="font-sans text-xs tracking-wider uppercase text-velmora-deep block mb-2">
                    Category
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setActiveCat(c.value)}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          activeCat === c.value
                            ? 'border-velmora-deep text-velmora-deep'
                            : 'border-velmora-divider text-velmora-muted'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-sans text-xs tracking-wider uppercase text-velmora-deep block mb-2">
                    Material
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {materials.map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setMaterial(m.value)}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          material === m.value
                            ? 'border-velmora-deep text-velmora-deep'
                            : 'border-velmora-divider text-velmora-muted'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velmora-muted">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setActiveCat('all');
                    setMaterial('all');
                    setPrice('all');
                  }}
                  className="btn-ghost mt-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

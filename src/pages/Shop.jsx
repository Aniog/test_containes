import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'bestselling', label: 'Bestselling' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [sort, setSort] = useState('featured');
  const selectedCategory = searchParams.get('category') || '';
  const [selectedPrice, setSelectedPrice] = useState(null);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) list = list.filter(p => p.category === selectedCategory);
    if (selectedPrice) list = list.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [selectedCategory, selectedPrice, sort]);

  const setCategory = (cat) => {
    if (cat) setSearchParams({ category: cat });
    else setSearchParams({});
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-4 font-medium">Category</h3>
        <div className="space-y-2">
          {['', 'earrings', 'necklaces', 'huggies'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm w-full text-left py-1.5 transition-colors ${selectedCategory === cat ? 'text-[#C5A572] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'}`}
            >
              {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All Jewelry'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-4 font-medium">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === range ? null : range)}
              className={`block text-sm w-full text-left py-1.5 transition-colors ${selectedPrice === range ? 'text-[#C5A572] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
            {selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
        </div>

        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setMobileFilters(true)} className="lg:hidden flex items-center gap-2 text-sm text-[#6B6560]">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-[#6B6560] hidden sm:block">Sort by:</span>
            <select value={sort} onChange={e => setSort(e.target.value)} className="text-sm text-[#1A1A1A] bg-transparent border border-[#E5DED5] px-3 py-2 focus:outline-none focus:border-[#C5A572] cursor-pointer">
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {filtered.length === 0 ? (
            <div className="flex-1 text-center py-20">
              <p className="font-serif text-xl text-[#1A1A1A] mb-2">No products found</p>
              <p className="text-sm text-[#6B6560]">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </div>
      </div>

      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm" onClick={() => setMobileFilters(false)} />
          <div className="absolute top-0 left-0 h-full w-80 bg-[#FAF8F5] shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-[0.2em] text-[#1A1A1A]">Filters</h2>
              <button onClick={() => setMobileFilters(false)}><X className="w-5 h-5 text-[#1A1A1A]" /></button>
            </div>
            <FilterPanel />
          </div>
        </div>
      )}
    </main>
  );
}

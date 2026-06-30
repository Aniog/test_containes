import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { products, categories, priceRanges, materials } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-3">
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product.imageQuery)}?width=600&height=800&nologo=true&seed=1`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, 1, product.tone[0]);
          }}
          className="absolute bottom-3 left-3 right-3 bg-white/95 py-2.5 text-xs uppercase tracking-widest font-medium text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </span>
        </button>
      </div>
      <h3 className="font-sans text-xs uppercase tracking-widest text-base mb-1">
        {product.name}
      </h3>
      <p className="text-sm text-muted">${product.price}</p>
    </Link>
  );
}

function FilterGroup({ title, options, selected, onToggle, isPrice = false }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-hairline pb-5 mb-5">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between mb-3"
      >
        <span className="text-xs uppercase tracking-widest font-medium">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? '' : '-rotate-90'}`} />
      </button>
      {open && (
        <div className="space-y-2.5">
          {options.map((opt) => {
            const val = isPrice ? opt.label : opt;
            const isSelected = selected.includes(val);
            return (
              <label
                key={val}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-base border-base' : 'border-hairline group-hover:border-muted'
                  }`}
                >
                  {isSelected && <X className="w-3 h-3 text-white" strokeWidth={2.5} />}
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isSelected}
                  onChange={() => onToggle(val)}
                />
                <span className="text-sm text-muted group-hover:text-base transition-colors">
                  {val}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length) {
      list = list.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return range && p.price >= range.min && p.price <= range.max;
        })
      );
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const toggle = (setter) => (val) =>
    setter((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]));

  const hasFilters =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length > 0;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const Filters = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs uppercase tracking-widest font-medium">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-muted hover:text-gold transition-colors underline"
          >
            Clear All
          </button>
        )}
      </div>
      <FilterGroup
        title="Category"
        options={categories}
        selected={selectedCategories}
        onToggle={toggle(setSelectedCategories)}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        selected={selectedPrices}
        onToggle={toggle(setSelectedPrices)}
        isPrice
      />
      <FilterGroup
        title="Material"
        options={materials}
        selected={selectedMaterials}
        onToggle={toggle(setSelectedMaterials)}
      />
    </>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Shop All</h1>
          <p className="text-sm text-muted">{filtered.length} products</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="hidden md:block" />
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-hairline px-4 py-2 pr-10 text-xs uppercase tracking-widest font-medium focus:outline-none focus:border-base cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">{Filters}</aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[55] bg-base/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] z-[60] bg-white shadow-2xl overflow-y-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            {Filters}
          </div>
        </>
      )}
    </main>
  );
}

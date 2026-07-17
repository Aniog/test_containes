import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import products, { categories, materials } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, selectedMaterial, sort]);

  const setCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  let filtered = [...products];

  if (activeCategory !== 'All') {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  if (selectedMaterial) {
    filtered = filtered.filter((p) => p.materials.includes(selectedMaterial));
  }

  if (priceRange.min) {
    filtered = filtered.filter((p) => p.price >= Number(priceRange.min));
  }
  if (priceRange.max) {
    filtered = filtered.filter((p) => p.price <= Number(priceRange.max));
  }

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
    case 'newest':
    default:
      break;
  }

  const clearFilters = () => {
    setSearchParams({});
    setSelectedMaterial(null);
    setPriceRange({ min: '', max: '' });
  };

  const hasActiveFilters = activeCategory !== 'All' || selectedMaterial || priceRange.min || priceRange.max;

  const FilterContent = () => (
    <div className="space-y-7">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso font-semibold mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm transition-colors hover:text-gold ${
                activeCategory === cat ? 'text-gold font-medium' : 'text-taupe'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso font-semibold mb-4">
          Price
        </h4>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))}
            className="w-full px-3 py-2 border border-sand/50 text-sm text-espresso bg-cream placeholder:text-taupe-light focus:outline-none focus:border-gold"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))}
            className="w-full px-3 py-2 border border-sand/50 text-sm text-espresso bg-cream placeholder:text-taupe-light focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso font-semibold mb-4">
          Material
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial(null)}
            className={`block w-full text-left text-sm transition-colors hover:text-gold ${
              !selectedMaterial ? 'text-gold font-medium' : 'text-taupe'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left text-sm transition-colors hover:text-gold ${
                selectedMaterial === mat ? 'text-gold font-medium' : 'text-taupe'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-wider uppercase text-taupe hover:text-espresso transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop All Jewelry
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-espresso text-cream rounded-full shadow-xl text-sm tracking-wider uppercase font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters {hasActiveFilters && `(${filtered.length})`}
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort + count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-taupe">{filtered.length} products</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 border border-sand/50 text-sm text-espresso bg-cream focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    Sort: {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso mb-3">No products found</p>
                <p className="text-sm text-taupe mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream shadow-2xl animate-slide-in-right p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wide text-espresso">Filters</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-2 text-espresso hover:text-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setFilterOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show {filtered.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

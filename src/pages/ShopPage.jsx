import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: 999 },
];

const materials = ['Gold', 'Silver'];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name: A – Z' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) result = result.filter((p) => p.price >= range.min && p.price <= range.max);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const handleCategoryChange = (catId) => {
    const newCat = selectedCategory === catId ? '' : catId;
    setSelectedCategory(newCat);
    if (newCat) {
      setSearchParams({ category: newCat });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSelectedMaterial('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPrice || selectedMaterial;

  const filterContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] text-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center justify-between w-full font-sans text-body py-1 transition-colors ${
                selectedCategory === cat.id
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[11px] text-light-gray">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] text-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === range.label ? null : range.label)}
              className={`font-sans text-body py-1 transition-colors ${
                selectedPrice === range.label
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] text-charcoal font-medium mb-4">
          Material
        </h3>
        <div className="flex gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? '' : mat)}
              className={`py-2 px-4 font-sans text-[12px] uppercase tracking-wider border transition-all duration-300 ${
                selectedMaterial === mat
                  ? 'border-charcoal bg-charcoal text-white'
                  : 'border-border text-warm-gray hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <>
          <div className="hairline" />
          <button
            onClick={clearFilters}
            className="font-sans text-[11px] uppercase tracking-wider text-warm-gray hover:text-charcoal transition-colors"
          >
            Clear All Filters
          </button>
        </>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto container-px section-padding">
        {/* Page header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline mb-3">Our Collection</p>
          <h1 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="font-sans text-body text-warm-gray mt-3 max-w-md mx-auto">
            Each piece is crafted with intention, designed to become a treasured part of your story.
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {filterContent}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-[12px] uppercase tracking-wider text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                )}
              </button>

              <p className="font-sans text-caption text-warm-gray hidden lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-[12px] uppercase tracking-wider text-charcoal bg-transparent pr-7 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i + 20} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-heading text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-body text-warm-gray mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-charcoal/50"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute top-0 left-0 bottom-0 w-80 max-w-full bg-cream shadow-large overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="font-sans text-[12px] uppercase tracking-[0.15em] text-charcoal font-medium">
                  Filters
                </h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-charcoal"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-6">{filterContent}</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Gift Sets' },
];

const materials = [
  { value: '', label: 'All' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const priceRanges = [
  { value: '', label: 'All' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-999', label: 'Over $100' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activeSubcategory = searchParams.get('subcategory') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (activeSort) {
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
  }, [activeCategory, activeSubcategory, activeMaterial, activePrice, activeSort]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-950 mb-4 font-medium">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.value ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-950 mb-4 font-medium">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateFilter('material', mat.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.value ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-950'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-950 mb-4 font-medium">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block text-sm transition-colors ${
                activePrice === range.value ? 'text-gold font-medium' : 'text-velvet-600 hover:text-velvet-950'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(activeCategory || activeMaterial || activePrice) && (
        <button
          onClick={() => setSearchParams({})}
          className="text-xs tracking-wider uppercase text-velvet-500 hover:text-velvet-950 underline transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Curated Collection</p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
            SHOP ALL
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter button */}
          <div className="md:hidden w-full mb-6">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-700 border border-velvet-950/20 px-4 py-2.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {(activeCategory || activeMaterial || activePrice) && (
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              )}
            </button>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-velvet-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value === 'featured' ? '' : e.target.value)}
                className="text-xs tracking-wider uppercase bg-transparent border-b border-velvet-950/20 pb-1.5 focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500 mb-4">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs tracking-wider uppercase text-gold hover:text-gold-dark underline transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p id={`shop-${product.id}-name`} className="text-xs tracking-widest uppercase font-medium text-velvet-950 mb-1">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-gold text-gold'
                              : 'text-velvet-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-velvet-500 ml-1">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-velvet-700">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-velvet-950/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-velvet-50 p-8 animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs tracking-widest uppercase font-medium">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </main>
  );
}
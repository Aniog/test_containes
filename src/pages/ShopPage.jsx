import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
];

const materials = [
  { label: 'All', value: 'all' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $75', value: '50-75' },
  { label: '$75 - $100', value: '75-100' },
  { label: 'Over $100', value: '100-999' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [activePrice, setActivePrice] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
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
  }, [activeCategory, activeMaterial, activePrice, sort]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-sm tracking-wide text-velvet-800 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`block text-xs tracking-wide uppercase transition-colors ${
                activeCategory === cat.value
                  ? 'text-velvet-700 font-medium'
                  : 'text-sand-500 hover:text-velvet-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-sm tracking-wide text-velvet-800 mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((pr) => (
            <button
              key={pr.value}
              onClick={() => setActivePrice(pr.value)}
              className={`block text-xs tracking-wide uppercase transition-colors ${
                activePrice === pr.value
                  ? 'text-velvet-700 font-medium'
                  : 'text-sand-500 hover:text-velvet-700'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-sm tracking-wide text-velvet-800 mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setActiveMaterial(mat.value)}
              className={`block text-xs tracking-wide uppercase transition-colors ${
                activeMaterial === mat.value
                  ? 'text-velvet-700 font-medium'
                  : 'text-sand-500 hover:text-velvet-700'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || activePrice !== 'all';

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-velvet-800 font-light tracking-wide">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden w-full mb-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 text-xs font-sans tracking-wide uppercase text-velvet-700 border border-sand-200 px-4 py-2.5 rounded-sm w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters {hasActiveFilters && `(${filteredProducts.length})`}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileFilterOpen && (
              <div className="mt-4 p-5 bg-white border border-sand-200 rounded-sm animate-fade-in">
                <FilterContent />
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort & count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-sand-500">{filteredProducts.length} products</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand-200 rounded-sm text-xs font-sans tracking-wide uppercase text-velvet-700 pl-3 pr-8 py-2 cursor-pointer focus:outline-none focus:border-velvet-500"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-sand-400 pointer-events-none" />
              </div>
            </div>

            {/* Active filters pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wide uppercase bg-velvet-50 text-velvet-700 px-3 py-1.5 rounded-sm">
                    {activeCategory}
                    <button onClick={() => setCategory('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {activeMaterial !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wide uppercase bg-velvet-50 text-velvet-700 px-3 py-1.5 rounded-sm">
                    {activeMaterial}
                    <button onClick={() => setActiveMaterial('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {activePrice !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wide uppercase bg-velvet-50 text-velvet-700 px-3 py-1.5 rounded-sm">
                    {priceRanges.find((p) => p.value === activePrice)?.label}
                    <button onClick={() => setActivePrice('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velvet-700 mb-4">No products found</p>
                <button
                  onClick={() => { setCategory('all'); setActiveMaterial('all'); setActivePrice('all'); }}
                  className="btn-ghost text-xs"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="aspect-[3/4] bg-sand-100 rounded-sm overflow-hidden mb-3 relative">
                      <div
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #d4b98e 0%, #8a5c3c 100%)',
                        }}
                      />
                    </div>
                    <h3 className="font-serif text-xs md:text-sm tracking-wider uppercase text-velvet-800 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-velvet-500 text-velvet-500'
                                : 'fill-sand-200 text-sand-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-sand-500">({product.reviewCount})</span>
                    </div>
                    <p className="font-sans text-sm font-medium text-velvet-700">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

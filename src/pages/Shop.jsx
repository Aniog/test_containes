import { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const categoryFilters = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

const materialFilters = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: '18K Gold Plated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: '$100 – $200' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const { category: urlCategory } = useParams();

  const initialCategory = urlCategory || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeMaterial, activePrice, sort]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activeMaterial !== 'all' && p.material !== activeMaterial) return false;
      if (activePrice !== 'all') {
        const [min, max] = activePrice.split('-').map(Number);
        if (p.price < min) return false;
        if (max && p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-[#1A1514] mb-4">Category</h4>
        <div className="space-y-2">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveCategory(f.value)}
              className={`block text-sm transition-colors ${
                activeCategory === f.value ? 'text-[#C8A96E] font-medium' : 'text-[#7A7268] hover:text-[#3D3833]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-[#1A1514] mb-4">Material</h4>
        <div className="space-y-2">
          {materialFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveMaterial(f.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === f.value ? 'text-[#C8A96E] font-medium' : 'text-[#7A7268] hover:text-[#3D3833]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-[#1A1514] mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((f) => (
            <button
              key={f.value}
              onClick={() => setActivePrice(f.value)}
              className={`block text-sm transition-colors ${
                activePrice === f.value ? 'text-[#C8A96E] font-medium' : 'text-[#7A7268] hover:text-[#3D3833]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl italic text-[#1A1514] tracking-wide">
            {initialCategory !== 'all'
              ? categoryFilters.find((c) => c.value === initialCategory)?.label
              : 'Shop All'}
          </h1>
          <p className="text-sm text-[#7A7268] mt-2">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile toggle */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E5DDD3]">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-[#7A7268]"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-sm bg-transparent border border-[#E5DDD3] px-3 py-2 text-[#3D3833] focus:outline-none focus:border-[#C8A96E]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-square bg-[#F5F0EB] overflow-hidden mb-4">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-name-${product.id}] gold jewelry demi-fine`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    id={`shop-name-${product.id}`}
                    className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-[#1A1514] leading-snug"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? 'fill-[#C8A96E] text-[#C8A96E]' : 'text-[#E5DDD3]'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#7A7268]">({product.reviewCount})</span>
                  </div>
                  <p className="text-sm text-[#C8A96E] mt-1 font-medium">${product.price}</p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#7A7268]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-[#FAF8F5] animate-slide-in-right p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-[#7A7268]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import products from '@/data/products';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [category, priceRange, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== 'All') {
      filtered = filtered.filter((p) => {
        if (category === 'Huggies') return p.subcategory === 'Huggies';
        return p.category === category;
      });
    }

    const range = priceRanges.find((r) => r.label === priceRange);
    if (range && range.label !== 'All') {
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max);
    }

    switch (sortBy) {
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
  }, [category, priceRange, sortBy]);

  const updateCategory = (cat) => {
    setCategory(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        {/* Header */}
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-2 tracking-wide text-[#1A1A1A]">
          Shop All
        </h1>
        <p className="text-sm text-[#6B6560] text-center mb-10 font-light">
          {category === 'All' ? 'Explore the complete collection' : `Browsing ${category}`}
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-medium text-[#6B6560]"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {filterOpen && <X className="w-3.5 h-3.5" />}
          </button>

          {/* Sidebar */}
          <div
            className={`lg:w-56 flex-shrink-0 space-y-8 ${
              filterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            {/* Category */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-4">
                Category
              </h4>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateCategory(cat)}
                    className={`block text-sm transition-colors ${
                      category === cat
                        ? 'text-gold font-medium'
                        : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-4">
                Price
              </h4>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range.label)}
                    className={`block text-sm transition-colors ${
                      priceRange === range.label
                        ? 'text-gold font-medium'
                        : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-4">
                Material
              </h4>
              <div className="space-y-2.5">
                <button className="block text-sm text-gold font-medium">18K Gold Plated</button>
                <button className="block text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
                  Sterling Silver Base
                </button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-[#6B6560]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none text-xs text-[#6B6560] bg-transparent border border-ivory-alt px-3 py-2 pr-8 cursor-pointer focus:outline-none focus:border-gold transition-colors uppercase tracking-[0.08em]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B6560]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm text-[#6B6560]">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange('All'); }}
                  className="text-xs text-gold underline mt-2"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

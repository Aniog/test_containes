import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const categories = ['All', 'earrings', 'necklaces', 'sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const materials = ['All', '18K Gold Plated'];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'All';
  const activePrice = searchParams.get('price') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';

  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activePrice !== 'All') {
      const range = priceRanges.find(r => r.label === activePrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }
    if (activeMaterial !== 'All') {
      result = result.filter(p => p.material === activeMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const hasActiveFilters = activeCategory !== 'All' || activePrice !== 'All' || activeMaterial !== 'All';

  const clearFilters = () => {
    setSearchParams({});
  };

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase text-[#A0988E] mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-[#C9A96E]'
                  : 'text-[#6B6560] hover:text-[#F5F0EB]'
              }`}
            >
              {cat === 'All' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase text-[#A0988E] mb-4">Price</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setFilter('price', 'All')}
            className={`block text-sm transition-colors ${
              activePrice === 'All'
                ? 'text-[#C9A96E]'
                : 'text-[#6B6560] hover:text-[#F5F0EB]'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`block text-sm transition-colors ${
                activePrice === range.label
                  ? 'text-[#C9A96E]'
                  : 'text-[#6B6560] hover:text-[#F5F0EB]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase text-[#A0988E] mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat
                  ? 'text-[#C9A96E]'
                  : 'text-[#6B6560] hover:text-[#F5F0EB]'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif">Shop</h1>
            <p className="text-sm text-[#A0988E] mt-2">{filteredProducts.length} products</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-widest uppercase text-[#A0988E] border border-[#2A2A2A] py-2.5 pl-4 pr-8 focus:outline-none focus:border-[#C9A96E] transition-colors cursor-pointer"
              >
                <option value="featured" className="bg-[#1A1A1A]">Featured</option>
                <option value="price-low" className="bg-[#1A1A1A]">Price: Low to High</option>
                <option value="price-high" className="bg-[#1A1A1A]">Price: High to Low</option>
                <option value="name" className="bg-[#1A1A1A]">Name: A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#A0988E] pointer-events-none" />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />}
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs tracking-widest uppercase text-[#C9A96E] hover:text-[#D4B87A] transition-colors"
              >
                Clear All
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#A0988E]">No products match your filters.</p>
                <button onClick={clearFilters} className="text-xs tracking-widest uppercase text-[#C9A96E] mt-4 hover:text-[#D4B87A] transition-colors">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden rounded-sm">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, 'Gold', 1);
                          }}
                          className="w-full bg-[#C9A96E] text-[#0F0F0F] py-2 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-[#D4B87A] transition-all duration-300"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-[10px] md:text-xs tracking-widest uppercase text-[#F5F0EB] font-sans group-hover:text-[#C9A96E] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#C9A96E] mt-1">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFiltersOpen(false)} />
        <div className={`absolute top-0 left-0 h-full w-72 bg-[#1A1A1A] border-r border-[#2A2A2A] transform transition-transform duration-300 ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
            <h2 className="text-xs tracking-[0.15em] uppercase text-[#F5F0EB]">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-[#A0988E] hover:text-[#F5F0EB]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto h-[calc(100%-60px)]">
            <FilterContent />
            {hasActiveFilters && (
              <button
                onClick={() => { clearFilters(); setMobileFiltersOpen(false); }}
                className="text-xs tracking-widest uppercase text-[#C9A96E] hover:text-[#D4B87A] transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
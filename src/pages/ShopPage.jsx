import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products as allProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Bracelets', 'Sets'];
const priceRanges = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $100', min: 80, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
];
const materials = ['All', '18K Gold Plated', 'Sterling Silver'];

export default function ShopPage() {
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = allProducts.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (p.price < selectedPrice.min || p.price > selectedPrice.max) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.featured ? 1 : -1;
  });

  return (
    <div ref={containerRef} className="pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wider">
            The Collection
          </h1>
          <p className="mt-4 text-sm text-muted-foreground tracking-wider max-w-md mx-auto">
            Explore our full range of demi-fine jewelry crafted for everyday elegance.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
            />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/30">
              <button
                className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setFilterOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <p className="text-xs text-muted-foreground hidden lg:block">
                {sorted.length} products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] tracking-widest uppercase text-muted-foreground">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-xs tracking-widest uppercase pr-6 py-1 cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {sorted.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sorted.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-sm">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-[#faf8f5] z-50 rounded-t-xl p-6 max-h-[70vh] overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent
              selectedCategory={selectedCategory}
              setSelectedCategory={(v) => { setSelectedCategory(v); }}
              selectedPrice={selectedPrice}
              setSelectedPrice={(v) => { setSelectedPrice(v); }}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={(v) => { setSelectedMaterial(v); }}
            />
            <button
              onClick={() => setFilterOpen(false)}
              className="mt-6 w-full bg-accent text-white py-3 text-xs tracking-[0.12em] uppercase font-medium"
            >
              Show {sorted.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function FilterContent({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedMaterial,
  setSelectedMaterial,
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-[0.12em] uppercase font-medium mb-3">Category</h4>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left text-xs tracking-widest uppercase transition-colors ${
                selectedCategory === cat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-[0.12em] uppercase font-medium mb-3">Price</h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`text-left text-xs tracking-widest uppercase transition-colors ${
                selectedPrice.label === range.label ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-[0.12em] uppercase font-medium mb-3">Material</h4>
        <div className="flex flex-col gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`text-left text-xs tracking-widest uppercase transition-colors ${
                selectedMaterial === mat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

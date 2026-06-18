import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated'];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-obsidian/90 text-ivory font-manrope text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="hidden">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="font-manrope text-xs text-mist">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('Featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const priceRange = priceRanges[activePriceRange];
  let filtered = products.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  if (sortBy === 'Price: Low to High') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'Price: High to Low') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'Best Rated') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-linen pt-24 pb-10 md:pt-32 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            All Jewelry
          </h1>
          <p className="font-manrope text-sm text-mist mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-stone mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-manrope text-xs transition-colors ${
                        activeCategory === cat
                          ? 'text-gold'
                          : 'text-stone hover:text-obsidian'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-stone mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-manrope text-xs transition-colors ${
                        activePriceRange === i
                          ? 'text-gold'
                          : 'text-stone hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter + sort bar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-stone border border-linen px-4 py-2 hover:border-gold hover:text-gold transition-colors"
              >
                <SlidersHorizontal className="w-3 h-3" />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-manrope text-xs text-mist hidden md:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-linen font-manrope text-xs text-stone px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.length > 0 ? (
                filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-cormorant text-2xl italic text-mist">No pieces found</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                    className="mt-4 font-manrope text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-obsidian/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-lg p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-manrope text-xs uppercase tracking-widest text-stone">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-stone" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-manrope text-xs px-4 py-2 border transition-colors ${
                        activeCategory === cat
                          ? 'border-gold bg-gold text-obsidian'
                          : 'border-linen text-stone hover:border-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`font-manrope text-xs px-4 py-2 border transition-colors ${
                        activePriceRange === i
                          ? 'border-gold bg-gold text-obsidian'
                          : 'border-linen text-stone hover:border-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full bg-gold text-obsidian font-manrope text-xs uppercase tracking-widest py-4 mt-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

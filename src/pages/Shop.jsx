import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const categories = ['earrings', 'necklaces', 'huggies'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const IC = 'w-full h-full object-cover';

// Each page context uses its own unique IDs — the plugin only replaces the first
// occurrence of each ID across the whole bundle, so IDs must never be reused.
function ShopProductCard({ product }) {
  if (product.slug === 'vivid-aura-jewels') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="shop-vivid-aura-img-s1a2b3" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Vivid Aura Jewels" className={IC} />}
      hoverImg={<img data-strk-img-id="shop-vivid-aura-img2-s1a2b4" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Vivid Aura Jewels alternate" className={IC} />}
    />
  );
  if (product.slug === 'majestic-flora-nectar') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="shop-majestic-flora-img-s2c3d4" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Majestic Flora Nectar" className={IC} />}
      hoverImg={<img data-strk-img-id="shop-majestic-flora-img2-s2c3d5" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Majestic Flora Nectar alternate" className={IC} />}
    />
  );
  if (product.slug === 'golden-sphere-huggies') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="shop-golden-sphere-img-s3e4f5" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Golden Sphere Huggies" className={IC} />}
      hoverImg={<img data-strk-img-id="shop-golden-sphere-img2-s3e4f6" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Golden Sphere Huggies alternate" className={IC} />}
    />
  );
  if (product.slug === 'amber-lace-earrings') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="shop-amber-lace-img-s4g5h6" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Amber Lace Earrings" className={IC} />}
      hoverImg={<img data-strk-img-id="shop-amber-lace-img2-s4g5h7" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Amber Lace Earrings alternate" className={IC} />}
    />
  );
  if (product.slug === 'royal-heirloom-set') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="shop-royal-heirloom-img-s5i6j7" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Royal Heirloom Set" className={IC} />}
      hoverImg={<img data-strk-img-id="shop-royal-heirloom-img2-s5i6j8" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={P} alt="Royal Heirloom Set alternate" className={IC} />}
    />
  );
  return <ProductCard product={product} />;
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);
    if (selectedPrice) list = list.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, selectedPrice, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
  };

  const hasFilters = selectedCategory || selectedPrice;

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Hidden text nodes for image queries */}
      <span id="prod-vivid-aura-title-a1b2c3" className="sr-only">Vivid Aura Jewels</span>
      <span id="prod-vivid-aura-desc-a1b2c3" className="sr-only">Gold ear cuff with crystal accent</span>
      <span id="prod-majestic-flora-title-d4e5f6" className="sr-only">Majestic Flora Nectar</span>
      <span id="prod-majestic-flora-desc-d4e5f6" className="sr-only">Multicolor floral crystal necklace</span>
      <span id="prod-golden-sphere-title-g7h8i9" className="sr-only">Golden Sphere Huggies</span>
      <span id="prod-golden-sphere-desc-g7h8i9" className="sr-only">Chunky gold dome huggie earrings</span>
      <span id="prod-amber-lace-title-j1k2l3" className="sr-only">Amber Lace Earrings</span>
      <span id="prod-amber-lace-desc-j1k2l3" className="sr-only">Textured gold filigree drop earrings</span>
      <span id="prod-royal-heirloom-title-m4n5o6" className="sr-only">Royal Heirloom Set</span>
      <span id="prod-royal-heirloom-desc-m4n5o6" className="sr-only">Gift-boxed earring + necklace set</span>

      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-3">All Jewelry</p>
          <h1 className="font-serif font-medium text-4xl md:text-5xl text-espresso">The Collection</h1>
          <p className="font-sans text-sm text-taupe mt-3">{filtered.length} piece{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button onClick={() => setFilterOpen((v) => !v)} className="md:hidden flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-espresso border border-linen px-4 py-2.5 hover:border-espresso transition-colors">
            <SlidersHorizontal size={14} />Filters
          </button>
          {hasFilters && (
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {selectedCategory && (
                <span className="flex items-center gap-1.5 font-sans text-xs text-espresso border border-linen px-3 py-1.5">
                  {selectedCategory}<button onClick={() => setSelectedCategory('')} className="text-taupe hover:text-espresso"><X size={12} /></button>
                </span>
              )}
              {selectedPrice && (
                <span className="flex items-center gap-1.5 font-sans text-xs text-espresso border border-linen px-3 py-1.5">
                  {selectedPrice.label}<button onClick={() => setSelectedPrice(null)} className="text-taupe hover:text-espresso"><X size={12} /></button>
                </span>
              )}
              <button onClick={clearFilters} className="font-sans text-xs text-taupe hover:text-gold transition-colors underline">Clear all</button>
            </div>
          )}
          <div className="flex-1" />
          <div className="relative">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-transparent border border-linen font-sans text-xs text-espresso uppercase tracking-widest px-4 py-2.5 pr-8 focus:outline-none focus:border-espresso cursor-pointer hover:border-espresso transition-colors">
              {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="mb-8">
              <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-4">Category</h3>
              <ul className="flex flex-col gap-2">
                <li><button onClick={() => setSelectedCategory('')} className={`font-sans text-sm transition-colors ${!selectedCategory ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'}`}>All</button></li>
                {categories.map((c) => (
                  <li key={c}><button onClick={() => setSelectedCategory(c)} className={`font-sans text-sm capitalize transition-colors ${selectedCategory === c ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'}`}>{c}</button></li>
                ))}
              </ul>
            </div>
            <div className="mb-8 pt-6 border-t border-linen">
              <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-4">Price</h3>
              <ul className="flex flex-col gap-2">
                {priceRanges.map((r) => (
                  <li key={r.label}><button onClick={() => setSelectedPrice(selectedPrice?.label === r.label ? null : r)} className={`font-sans text-sm transition-colors ${selectedPrice?.label === r.label ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'}`}>{r.label}</button></li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-linen">
              <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-4">Material</h3>
              <ul className="flex flex-col gap-2">
                {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map((m) => (
                  <li key={m}><button className="font-sans text-sm text-taupe hover:text-espresso transition-colors">{m}</button></li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-ivory overflow-y-auto">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso">Filters</h2>
                  <button onClick={() => setFilterOpen(false)} className="text-taupe hover:text-espresso"><X size={20} /></button>
                </div>
                <div className="mb-8">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {['', ...categories].map((c) => (
                      <button key={c || 'all'} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 font-sans text-xs border capitalize transition-colors ${selectedCategory === c ? 'bg-espresso text-ivory border-espresso' : 'border-linen text-taupe hover:border-espresso'}`}>{c || 'All'}</button>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-4">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((r) => (
                      <button key={r.label} onClick={() => setSelectedPrice(selectedPrice?.label === r.label ? null : r)} className={`px-4 py-2 font-sans text-xs border transition-colors ${selectedPrice?.label === r.label ? 'bg-espresso text-ivory border-espresso' : 'border-linen text-taupe hover:border-espresso'}`}>{r.label}</button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setFilterOpen(false)} className="w-full bg-espresso text-ivory font-sans text-xs font-medium uppercase tracking-widest py-4">View {filtered.length} Results</button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso mb-3">No pieces found</p>
                <p className="font-sans text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="font-sans text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

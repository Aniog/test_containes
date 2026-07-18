import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Heart, Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['Gold', 'Silver', 'Crystal'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice) {
      const range = priceRanges[selectedPrice];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.materials.toLowerCase().includes(selectedMaterial.toLowerCase()));
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSelectedMaterial(null);
    setSort('featured');
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPrice !== null || selectedMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Category</h4>
        <div className="space-y-2">
          {['', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${selectedCategory === cat ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'}`}
            >
              {cat || 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === i ? null : i)}
              className={`block text-sm transition-colors ${selectedPrice === i ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
              className={`block text-sm transition-colors ${selectedMaterial === mat ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'}`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-bronze hover:text-espresso transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-24 pb-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">The Collection</p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso tracking-wide">Shop All</h1>
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter bar */}
            <div className="flex items-center justify-between mb-8 lg:mb-6">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-espresso"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter & Sort
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-stone">{filtered.length} products</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs tracking-wide bg-transparent border-b border-sand text-espresso py-1 focus:outline-none focus:border-espresso transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Active filters */}
            {hasFilters && (
              <div className="hidden lg:flex items-center gap-2 mb-6 flex-wrap">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 text-xs bg-sand-light px-3 py-1 text-espresso">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedPrice !== null && (
                  <span className="inline-flex items-center gap-1 text-xs bg-sand-light px-3 py-1 text-espresso">
                    {priceRanges[selectedPrice].label}
                    <button onClick={() => setSelectedPrice(null)}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1 text-xs bg-sand-light px-3 py-1 text-espresso">
                    {selectedMaterial}
                    <button onClick={() => setSelectedMaterial(null)}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-espresso-light mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-sand-light overflow-hidden mb-4">
                      <div
                        className="w-full h-full"
                        data-strk-bg-id={`shop-${product.id}`}
                        data-strk-bg={`[shop-name-${product.id}] gold jewelry product`}
                        data-strk-bg-ratio="3x4"
                        data-strk-bg-width="500"
                      />
                      {product.tags.includes('new') && (
                        <span className="absolute top-3 left-3 bg-gold text-espresso text-[10px] tracking-widest uppercase px-2 py-0.5 font-medium">
                          New
                        </span>
                      )}
                      <button
                        className="absolute top-3 right-3 p-2 text-warmwhite/70 hover:text-warmwhite transition-colors opacity-0 group-hover:opacity-100"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <h3
                      id={`shop-name-${product.id}`}
                      className="font-serif text-sm tracking-wider uppercase text-espresso mb-1"
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-stone">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-espresso mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 bg-espresso/40 z-50 lg:hidden" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 p-6 rounded-t-2xl lg:hidden max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl tracking-wide text-espresso">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="text-espresso"><X className="w-5 h-5" /></button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary w-full text-center mt-8"
            >
              Show Results ({filtered.length})
            </button>
          </div>
        </>
      )}
    </main>
  );
}

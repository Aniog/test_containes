import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Plus, SlidersHorizontal, X } from 'lucide-react';
import products, { categories, priceRanges } from '../data/products';
import { useCartDispatch } from '../context/CartContext';

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem, toggleCart } = useCartDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ productId: product.id, name: product.name, price: product.price, variant: product.variants[0], quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    toggleCart();
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-brand-sand/30 overflow-hidden mb-4">
        <div className="w-full h-full bg-brand-sand/40 flex items-center justify-center">
          <span className="text-brand-smoke/40 text-xs uppercase tracking-widest">{product.category}</span>
        </div>
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-brand-cream shadow-lg flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300 ${added ? 'bg-brand-gold text-white' : 'text-brand-ink'}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`} />
        ))}
      </div>
      <h3 className="font-serif text-sm tracking-product uppercase text-brand-ink group-hover:text-brand-gold transition-colors">{product.name}</h3>
      <p className="font-sans text-sm font-medium text-brand-ink mt-1">${product.price}</p>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activePrice = searchParams.get('price') || null;
  const sort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [activeCategory, activePrice, sort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value && value !== 'All') {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-ink mb-4">Category</h4>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`text-left font-sans text-sm transition-colors ${activeCategory === cat ? 'text-brand-gold font-medium' : 'text-brand-smoke hover:text-brand-ink'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-ink mb-4">Price</h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((r) => (
            <button
              key={r.label}
              onClick={() => updateFilter('price', activePrice === r.label ? null : r.label)}
              className={`text-left font-sans text-sm transition-colors ${activePrice === r.label ? 'text-brand-gold font-medium' : 'text-brand-smoke hover:text-brand-ink'}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-ink mb-4">Material</h4>
        <div className="flex flex-col gap-2 font-sans text-sm text-brand-smoke">
          <span>18K Gold Plated</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-cream pt-20">
      <div className="section-padding py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">
              {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
            </h1>
            <p className="font-sans text-sm text-brand-smoke mt-2">{filteredProducts.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="font-sans text-xs tracking-wider uppercase bg-transparent border border-brand-sand px-3 py-2.5 text-brand-smoke focus:outline-none focus:border-brand-ink"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-brand-smoke"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-brand-smoke">No products match your filters.</p>
                <button onClick={() => setSearchParams({})} className="btn-outline mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-brand-cream p-8 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wider text-brand-ink">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="text-brand-smoke"><X className="w-5 h-5" /></button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
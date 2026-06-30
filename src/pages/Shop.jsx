import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [addedIds, setAddedIds] = useState(new Set());

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'popular';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [activeCategory, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1);
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-text-primary">All Jewelry</h1>
            <p className="text-sm text-warm-gray mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-1.5 text-xs uppercase tracking-wider text-text-primary hover:text-gold-accent transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="text-xs uppercase tracking-wider text-text-primary bg-transparent border border-warm-border px-3 py-2 focus:outline-none focus:border-gold-accent cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar filter */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Category */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-primary mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      activeCategory === 'all' ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-text-primary'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        activeCategory === cat.id ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-text-primary'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-primary mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $40', range: '0-40' },
                    { label: '$40 – $60', range: '40-60' },
                    { label: '$60 – $80', range: '60-80' },
                    { label: '$80+', range: '80-999' },
                  ].map((p) => (
                    <button
                      key={p.range}
                      className="block text-sm w-full text-left py-1 text-warm-gray hover:text-text-primary transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-primary mb-3">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Gold & Pearl'].map((m) => (
                    <label key={m} className="flex items-center gap-2.5 cursor-pointer group">
                      <span className="w-3.5 h-3.5 border border-warm-border rounded-sm group-hover:border-gold-accent transition-colors" />
                      <span className="text-sm text-warm-gray group-hover:text-text-primary transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray">No products match this category.</p>
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className="mt-4 text-sm uppercase tracking-wider text-gold-accent hover:underline"
                >
                  View All
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {filtered.map((product) => (
                  <div key={product.id} className="group product-card">
                    <div className="relative aspect-[3/4] bg-ivory overflow-hidden rounded-sm">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="product-card-image w-full h-full object-cover"
                        />
                        {product.images[1] && (
                          <img
                            src={product.images[1]}
                            alt={`${product.name} alternate`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        )}
                      </Link>

                      {product.isNew && (
                        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-white/90 text-text-primary px-2 py-1">
                          New
                        </span>
                      )}

                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`absolute bottom-3 left-3 right-3 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                          addedIds.has(product.id)
                            ? 'bg-text-primary text-white'
                            : 'bg-white/90 text-text-primary opacity-0 group-hover:opacity-100 hover:bg-gold-accent hover:text-white'
                        }`}
                      >
                        {addedIds.has(product.id) ? 'Added ✓' : 'Quick Add'}
                      </button>
                    </div>

                    <div className="mt-3 md:mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xs md:text-sm uppercase tracking-wider text-text-primary font-medium">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-star-gold text-star-gold" />
                        <span className="text-xs text-warm-gray">{product.rating}</span>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-medium text-text-primary">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-warm-border">
              <h3 className="text-sm uppercase tracking-wider">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-primary mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {[{ id: 'all', name: 'All' }, ...categories].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { updateFilter('category', cat.id); setMobileFilterOpen(false); }}
                      className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                        activeCategory === cat.id
                          ? 'border-text-primary bg-text-primary text-white'
                          : 'border-warm-border text-warm-gray hover:border-text-primary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
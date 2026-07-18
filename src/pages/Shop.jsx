import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-muted mb-4">
          Category
        </h3>
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`text-left font-sans text-sm transition-colors ${
              activeCategory === 'all'
                ? 'text-warm-black font-medium'
                : 'text-warm-gray hover:text-warm-black'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`text-left font-sans text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-warm-black font-medium'
                  : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-muted mb-4">
          Price
        </h3>
        <div className="flex flex-col gap-2.5">
          {[
            { label: 'Under $40', value: '0-40' },
            { label: '$40 - $60', value: '40-60' },
            { label: '$60 - $80', value: '60-80' },
            { label: '$80+', value: '80-999' },
          ].map((range) => (
            <button
              key={range.value}
              className="text-left font-sans text-sm text-warm-gray hover:text-warm-black transition-colors"
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-muted mb-4">
          Material
        </h3>
        <div className="flex flex-col gap-2.5">
          {['18K Gold Plated', 'Silver Tone'].map((mat) => (
            <button
              key={mat}
              className="text-left font-sans text-sm text-warm-gray hover:text-warm-black transition-colors"
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-warm-black">
              {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'Shop'}
            </h1>
            <p className="font-sans text-sm text-warm-muted mt-1">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-warm-black transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="font-sans text-xs uppercase tracking-wider text-warm-gray bg-transparent border border-warm-beige px-3 py-2 focus:outline-none focus:border-warm-gray cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-gray">No products found</p>
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className="mt-4 font-sans text-sm text-gold hover:text-gold-hover uppercase tracking-wider"
                >
                  Clear filters
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

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 transition-transform duration-300 overflow-y-auto ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-sans text-xs uppercase tracking-widest text-warm-black">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-gray hover:text-warm-black">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-warm-beige/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white/90 text-warm-black text-[10px] uppercase tracking-widest font-sans font-medium px-2.5 py-1">
              New
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="bg-white/90 backdrop-blur-sm text-warm-black text-[11px] uppercase tracking-wider font-sans font-medium px-5 py-2.5 flex items-center gap-2 shadow-sm hover:bg-white transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3 px-0.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs uppercase tracking-wide text-warm-black hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="font-sans text-[11px] text-warm-muted">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="font-sans text-sm font-medium text-warm-black mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
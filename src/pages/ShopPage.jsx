import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

const sortOptions = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('default');

  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return result;
  }, [activeCategory, sort]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat) {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSort('default');
  };

  const hasFilters = activeCategory !== '';

  return (
    <div className="pt-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-charcoal">Shop</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
              {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
            </h1>
            <p className="text-sm text-stone mt-1">{filtered.length} styles</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-stone/20 px-4 py-2.5 pr-8 text-xs uppercase tracking-widest font-medium text-charcoal outline-none cursor-pointer hover:border-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop always visible, mobile toggle */}
          <aside
            className={`
              ${showFilters ? 'block' : 'hidden'} md:block
              w-full md:w-56 flex-shrink-0
            `}
          >
            <div className="md:sticky md:top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => setCategory('')}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      !activeCategory ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-2.5">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                    <button
                      key={range}
                      className="block text-sm text-stone hover:text-charcoal transition-colors w-full text-left py-1"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-4">Material</h3>
                <div className="space-y-2.5">
                  {['Gold', 'Silver', 'Rose Gold'].map((mat) => (
                    <button
                      key={mat}
                      className="block text-sm text-stone hover:text-charcoal transition-colors w-full text-left py-1"
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-xs text-stone hover:text-error transition-colors"
                >
                  <X size={12} />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile overlay */}
          {showFilters && (
            <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setShowFilters(false)} />
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-stone text-sm">No products found matching your filters.</p>
                <button onClick={clearFilters} className="btn-outline mt-6 text-center text-xs inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-warm-white mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-charcoal text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium">
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.images[0],
                              });
                            }}
                            className="w-full bg-charcoal/90 text-white text-[10px] uppercase tracking-widest py-2.5 font-medium hover:bg-charcoal transition-colors"
                          >
                            Quick Add
                          </button>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-[11px] uppercase tracking-widest text-charcoal font-medium">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-stone mt-0.5 font-medium">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
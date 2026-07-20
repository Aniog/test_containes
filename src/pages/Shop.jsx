import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCartActions } from '@/lib/cart';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem, openCart } = useCartActions();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-velmora-sand/30 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23E8E0D5" width="300" height="400"/></svg>';
          }}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 bg-white text-velmora-espresso text-[10px] font-sans font-medium uppercase tracking-[0.1em] px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white shadow-md"
        >
          Add to Bag
        </button>
      </div>
      <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-espresso leading-snug">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
              stroke={i < Math.floor(product.rating) ? '#B8860B' : '#C0B8A8'}
              strokeWidth={1}
            />
          ))}
        </div>
        <span className="text-[10px] text-velmora-taupe font-sans">
          ({product.reviews})
        </span>
      </div>
      <p className="mt-1.5 font-sans text-sm font-medium text-velmora-espresso">
        ${product.price}
      </p>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams);
    if (sort === 'featured') {
      params.delete('sort');
    } else {
      params.set('sort', sort);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (activeSort) {
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
  }, [activeCategory, activeSort]);

  return (
    <main className="bg-velmora-cream pt-24 md:pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subhead mb-3">Explore</p>
          <h1 className="section-heading">
            {activeCategory === 'All' ? 'Shop All' : activeCategory}
          </h1>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filter - Desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso mb-5">
              Category
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setCategory(cat)}
                    className={`font-sans text-sm transition-colors ${
                      activeCategory === cat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-taupe hover:text-velmora-espresso'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso mb-5">
                Price Range
              </h3>
              <p className="text-xs text-velmora-taupe font-sans">
                $30 – $120
              </p>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-5 hairline-divider">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso"
              >
                <SlidersHorizontal size={14} strokeWidth={1} />
                Filter
              </button>
              <p className="text-xs text-velmora-taupe font-sans">
                {filtered.length} products
              </p>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={12}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe"
                />
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden mb-6 p-5 border border-velmora-sand/30 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso">
                    Category
                  </h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-velmora-taupe"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setFilterOpen(false);
                      }}
                      className={`px-4 py-2 font-sans text-xs uppercase tracking-wide transition-colors border ${
                        activeCategory === cat
                          ? 'border-velmora-gold text-velmora-gold bg-velmora-gold/5'
                          : 'border-velmora-sand/40 text-velmora-taupe'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-taupe italic">
                  No products found in this category.
                </p>
                <button
                  onClick={() => setCategory('All')}
                  className="btn-outline text-xs mt-6"
                >
                  View All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

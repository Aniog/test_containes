import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then((rows) => setProducts(rows))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = products.map((p) => p.data || p);
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'newest')
      list.sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
    return list;
  }, [products, activeCategory, priceRange, sort]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    const sp = new URLSearchParams(searchParams);
    if (cat === 'All') sp.delete('category');
    else sp.set('category', cat);
    setSearchParams(sp);
  };

  return (
    <main className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">
            Shop All
          </h1>
          <p className="text-sm text-warmgray max-w-md mx-auto">
            Explore our curated collection of demi-fine jewelry, designed to
            be treasured.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-2">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="flex items-center gap-2 text-sm text-charcoal uppercase tracking-widest font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-sm text-charcoal pr-6 focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warmgray" />
            </div>
          </div>

          {/* Sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-56 flex-shrink-0 space-y-8`}
          >
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`block text-sm w-full text-left transition-colors ${
                      activeCategory === cat
                        ? 'text-gold font-medium'
                        : 'text-taupe hover:text-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
                Price
              </h4>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-16 px-2 py-1.5 border border-stone bg-transparent text-sm text-charcoal focus:outline-none focus:border-gold"
                />
                <span className="text-warmgray">—</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-16 px-2 py-1.5 border border-stone bg-transparent text-sm text-charcoal focus:outline-none focus:border-gold"
                />
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8">
              <span className="text-sm text-warmgray">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              </span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal pr-6 focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warmgray" />
              </div>
            </div>

            {loading ? (
              <div className="text-center py-20 text-taupe text-sm uppercase tracking-widest">
                Loading...
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe mb-2">
                  No products found
                </p>
                <p className="text-sm text-warmgray">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <div key={p.id} className="group">
                    <div className="relative aspect-[3/4] bg-parchment rounded overflow-hidden mb-4">
                      <Link to={`/product/${p.slug}`} className="block absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                            <span className="font-serif text-2xl text-gold/60">V</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addItem({ id: p.id, name: p.name, price: p.price, image_url: '' });
                        }}
                        className="absolute bottom-4 left-4 right-4 py-3 bg-cream text-charcoal text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 z-10"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                    <Link to={`/product/${p.slug}`} className="block space-y-1">
                      <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-charcoal truncate">
                        {p.name}
                      </h3>
                      <StarRating rating={p.rating || 4.5} size={12} />
                      <p className="text-sm font-medium text-taupe">
                        ${p.price.toFixed(2)}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

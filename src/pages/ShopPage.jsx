import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: 'Over $70', min: 70, max: Infinity },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => {
        const label = `${r.min}-${r.max === Infinity ? 'above' : r.max}`;
        return label === activePrice;
      });
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
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
  }, [activeCategory, activePrice, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === '' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      material: 'gold',
      quantity: 1,
    });
  };

  const priceLabel = (r) => {
    if (r.max === Infinity) return `Over $${r.min}`;
    return `$${r.min} – $${r.max}`;
  };

  const priceKey = (r) => {
    return `${r.min}-${r.max === Infinity ? 'above' : r.max}`;
  };

  return (
    <div className="pt-18">
      {/* Page header */}
      <div className="bg-ivory py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-5xl text-foreground">Shop All</h1>
          <p className="text-stone text-sm mt-2">Demi-fine gold jewelry for every occasion</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 py-8">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="text-sm border border-border bg-background px-3 py-2 rounded-none focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters */}
          <aside
            className={`md:w-56 flex-shrink-0 ${
              showFilters ? 'block' : 'hidden'
            } md:block`}
          >
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', cat)}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      activeCategory === cat
                        ? 'text-accent font-medium'
                        : 'text-stone hover:text-foreground'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Price</h3>
              <div className="space-y-2">
                <button
                  onClick={() => updateFilter('price', '')}
                  className={`block text-sm w-full text-left py-1 transition-colors ${
                    !activePrice ? 'text-accent font-medium' : 'text-stone hover:text-foreground'
                  }`}
                >
                  All Prices
                </button>
                {priceRanges.map((r) => (
                  <button
                    key={priceKey(r)}
                    onClick={() => updateFilter('price', priceKey(r))}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      activePrice === priceKey(r)
                        ? 'text-accent font-medium'
                        : 'text-stone hover:text-foreground'
                    }`}
                  >
                    {priceLabel(r)}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop sort */}
            <div className="hidden md:block">
              <h3 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full text-sm border border-border bg-background px-3 py-2 rounded-none focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-accent text-sm mt-2 hover:underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-stone mb-6 hidden md:block">
                  Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group relative bg-card rounded-sm overflow-hidden"
                    >
                      <div className="aspect-square overflow-hidden bg-ivory relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => handleQuickAdd(e, product)}
                          className="absolute bottom-3 left-3 right-3 bg-foreground/90 text-white text-xs uppercase tracking-[0.1em] py-2.5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Quick Add
                        </button>
                      </div>
                      <div className="p-3 md:p-4">
                        <h3 className="font-serif text-xs md:text-sm uppercase tracking-wider truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs md:text-sm text-stone mt-1">${product.price}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-muted'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-[10px] text-stone">({product.reviewCount})</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
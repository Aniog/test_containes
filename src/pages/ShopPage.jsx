import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products, { categories, materials } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
        <img
          src={hovered && product.images[1] ? product.images[1].src : product.images[0].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, product.variants[0]);
          }}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-accent hover:text-white`}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
        </button>
      </div>
      <div className="mt-4">
        <p className="product-name">{product.name}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <Star size={12} fill="#A68A56" className="text-accent" />
          <span className="text-xs text-text-secondary">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="product-price mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'All';
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, selectedMaterial, priceRange, sort]);

  const setCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const clearFilters = () => {
    setSearchParams({});
    setSelectedMaterial('All');
    setPriceRange([0, 120]);
    setSort('featured');
  };

  const hasActiveFilters = activeCategory !== 'All' || selectedMaterial !== 'All' || sort !== 'featured';

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-wider font-medium text-text-primary mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-accent font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-wider font-medium text-text-primary mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {['All', ...materials].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-accent font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-wider font-medium text-text-primary mb-4">
          Price Range
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-text-secondary">
            <span>$0</span>
            <span>Up to ${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-base min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="section-heading">
              {activeCategory !== 'All' ? activeCategory : 'All Jewelry'}
            </h1>
            <p className="text-sm text-text-secondary mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs border border-border rounded-full px-4 py-2 bg-transparent text-text-secondary focus:outline-none focus:border-accent cursor-pointer appearance-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="text-xs text-text-secondary">Active filters:</span>
            {activeCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                {activeCategory}
                <button onClick={() => setSearchParams({})}><X size={12} /></button>
              </span>
            )}
            {selectedMaterial !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                {selectedMaterial}
                <button onClick={() => setSelectedMaterial('All')}><X size={12} /></button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-text-secondary hover:text-text-primary underline transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Layout: sidebar + grid */}
        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text-secondary">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}
    </div>
  );
}

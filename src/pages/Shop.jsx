import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Plus, SlidersHorizontal, X } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.variants[0].id);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velvet-surface mb-4">
        <div className="aspect-[3/4]">
          <img
            data-strk-img-id={`shop-${product.id}-main`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`shop-${product.id}-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] alternate view`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 bg-velvet-card p-2.5 rounded-full shadow-md transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-velvet-accent hover:text-white`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-[.12em] text-velvet-base mb-1">
        {product.name}
      </h3>
      <p id={product.descId} className="hidden">{product.description}</p>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velvet-accent text-velvet-accent'
                  : 'fill-velvet-border text-velvet-border'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-velvet-muted">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium tabular-nums">${product.price}</p>
    </Link>
  );
}

export default function Shop() {
  const { category: paramCategory } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState(paramCategory || 'all');
  const [filterMaterial, setFilterMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  const filtered = useMemo(() => {
    let result = [...products];
    if (filterCategory !== 'all') {
      result = result.filter((p) => p.category === filterCategory);
    }
    if (filterMaterial !== 'all') {
      result = result.filter((p) => p.material === filterMaterial);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
  }, [filterCategory, filterMaterial, priceRange, sortBy]);

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-velvet-base mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCategory(c.id)}
              className={`block text-sm transition-colors ${
                filterCategory === c.id ? 'text-velvet-accent font-medium' : 'text-velvet-muted hover:text-velvet-base'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-velvet-base mb-4">Material</h4>
        <div className="space-y-2">
          {[
            { id: 'all', name: 'All' },
            { id: 'gold', name: '18K Gold Plated' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setFilterMaterial(m.id)}
              className={`block text-sm transition-colors ${
                filterMaterial === m.id ? 'text-velvet-accent font-medium' : 'text-velvet-muted hover:text-velvet-base'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="pb-6 border-b border-velvet-border">
        <h4 className="text-xs uppercase tracking-widest text-velvet-base mb-4">Price</h4>
        <div className="flex items-center gap-2 text-sm text-velvet-muted">
          <span>${priceRange[0]}</span>
          <input
            type="range"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="flex-1 accent-velvet-accent"
          />
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-28 bg-velvet-card min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-2">Shop All</h1>
          <p className="text-velvet-muted text-sm">Demi-fine gold jewelry, crafted to be treasured.</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="bg-velvet-base text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute inset-y-0 left-0 w-72 bg-velvet-card p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-lg tracking-wider">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FiltersContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort + count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-velvet-muted">{filtered.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-velvet-border bg-transparent px-3 py-2 text-velvet-base focus:outline-none focus:border-velvet-accent"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-muted">No products match your filters.</p>
                <button
                  onClick={() => { setFilterCategory('all'); setFilterMaterial('all'); setPriceRange([0, 120]); }}
                  className="btn-ghost mt-4 text-xs"
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
    </div>
  );
}

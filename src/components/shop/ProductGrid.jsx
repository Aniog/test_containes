import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Filter } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import FilterSidebar from './FilterSidebar';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name-asc', label: 'Name: A-Z' },
];

export default function ProductGrid({ initialCategory }) {
  const [filters, setFilters] = useState({
    category: initialCategory || 'all',
    material: 'all',
    price: 'all',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addItem } = useCart();

  let filtered = [...products];

  // Category filter
  if (filters.category !== 'all') {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  // Material filter
  if (filters.material !== 'all') {
    filtered = filtered.filter((p) => p.material === filters.material);
  }

  // Price filter
  if (filters.price !== 'all') {
    filtered = filtered.filter((p) => {
      switch (filters.price) {
        case 'under-40': return p.price < 40;
        case '40-60': return p.price >= 40 && p.price <= 60;
        case '60-80': return p.price >= 60 && p.price <= 80;
        case 'over-80': return p.price > 80;
        default: return true;
      }
    });
  }

  // Sort
  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return (
    <div className="flex gap-8">
      {/* Filter sidebar */}
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        mobileOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden flex items-center gap-2 text-sm text-warm-600 hover:text-warm-900 transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-warm-500">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-warm-500 uppercase tracking-wider font-sans">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm text-warm-900 bg-transparent border-none focus:outline-none cursor-pointer font-sans"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-warm-500 text-sm">No pieces match your filters.</p>
            <button
              onClick={() => setFilters({ category: 'all', material: 'all', price: 'all' })}
              className="text-gold-300 text-sm hover:text-gold-400 mt-2 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} addItem={addItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product, addItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] bg-warm-100 overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white/90 text-warm-900 text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-sans">
              New
            </span>
          )}
        </div>
      </Link>

      <div
        className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <button
          onClick={() => addItem(product)}
          className="w-full bg-white/95 backdrop-blur-sm text-warm-900 text-xs uppercase tracking-widest py-2.5 flex items-center justify-center gap-2 hover:bg-gold-300 hover:text-white transition-all duration-300 shadow-sm"
        >
          <ShoppingBag className="w-3 h-3" />
          Add to Cart
        </button>
      </div>

      <div className="mt-3 px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-price mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductGrid({ products, onFilterMobileOpen }) {
  return (
    <div className="flex-1">
      {/* Sort & filter bar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-200">
        <p className="text-sm text-warm-500 font-sans">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={onFilterMobileOpen}
            className="lg:hidden flex items-center gap-2 text-xs tracking-wide-lg uppercase font-sans text-ink hover:text-gold-600 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            className="text-xs tracking-wide-lg uppercase font-sans bg-transparent border-none focus:outline-none text-ink cursor-pointer"
            defaultValue="featured"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-warm-400 text-sm font-sans">No products match your filters.</p>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-warm-200 overflow-hidden rounded-sm">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-gold-400 hover:text-white"
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-3 space-y-1">
        <h3 className="text-[11px] md:text-xs tracking-wide-lg uppercase font-sans font-medium text-ink">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-[10px] text-warm-500">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-ink">${product.price}</p>
      </div>
    </div>
  );
}
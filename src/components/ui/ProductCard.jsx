import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.images[0].desc}] [${product.images[0].title}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}
        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-foreground/90 backdrop-blur-sm text-background py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="product-name text-sm text-foreground mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
        </div>
        <p className="text-sm text-foreground">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

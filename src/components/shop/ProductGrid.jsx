import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductGrid({ products }) {
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <Link to={`/product/${product.id}`} className="block">
            <div className="aspect-[3/4] overflow-hidden bg-cream-dark">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          <button
            onClick={() => addItem(product, product.variants[0])}
            className="absolute top-3 right-3 w-9 h-9 bg-surface/90 backdrop-blur-sm border border-beige flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:border-gold hover:text-warm-charcoal"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>

          <div className="mt-3 space-y-1">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-[11px] md:text-xs uppercase tracking-widest font-medium text-warm-charcoal group-hover:text-gold transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-warm-gray">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
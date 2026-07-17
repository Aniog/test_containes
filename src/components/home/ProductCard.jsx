import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[0],
      quantity: 1,
    });
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand-100 overflow-hidden">
        {/* Placeholder image with warm gold tones */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-espresso-100 via-espresso-200 to-gold-600 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-2">
                <span className="text-gold-100 text-2xl font-serif">✦</span>
              </div>
            </div>
          </div>
        </div>
        {/* Hover image variant */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-espresso-50 via-espresso-100 to-gold-500 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/30 flex items-center justify-center mb-2">
                <span className="text-gold-50 text-xl font-serif">◆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-espresso/90 text-cream text-xs uppercase tracking-super py-3 transition-all duration-300 flex items-center justify-center gap-2 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag — ${product.price}
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm tracking-widest uppercase text-espresso group-hover:text-gold-500 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold text-gold'
                  : 'fill-cream-200 text-cream-200'
              }`}
            />
          ))}
          <span className="text-xs text-warm ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-espresso font-medium">${product.price}</p>
      </div>
    </Link>
  );
}

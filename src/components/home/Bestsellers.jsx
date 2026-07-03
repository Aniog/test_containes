import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-light-gray overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-base py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Quick Add</span>
            </span>
          </button>
        </div>
      </Link>
      
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-gray'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-warm-gray ml-1">({product.reviews})</span>
        </div>
        <p className="mt-1 text-velmora-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-velmora-base">Bestsellers</h2>
          <p className="mt-3 text-velmora-warm-gray">Our most loved pieces</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
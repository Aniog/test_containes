import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Star } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-soft-black mb-4 tracking-wide">
          Bestsellers
        </h2>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-velmora-light-gray">
          {/* Main Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />

          {/* Hover Image */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-soft-black px-6 py-2.5 text-sm tracking-wider uppercase font-sans transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-velmora-gold hover:text-white`}
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <h3 className="font-serif text-lg tracking-widest uppercase text-velmora-soft-black">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-velmora-warm-gray font-light">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-base font-medium text-velmora-soft-black">
            ${product.price}
          </span>
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-velmora-gold text-velmora-gold" />
            <span className="text-sm text-velmora-warm-gray">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

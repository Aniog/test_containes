import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-beige overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Second image on hover */}
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
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream text-velmora-charcoal text-sm font-medium transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-product uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'
              }`}
            />
          ))}
        </div>
        <p className="mt-1 text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          <p className="mt-2 text-velmora-gray">Our most loved pieces</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
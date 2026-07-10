import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-creamDark">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Secondary Image (on hover) */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream/95 backdrop-blur text-velmora-charcoal font-sans text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            QUICK ADD
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gray-light'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-gray ml-1">({product.reviews})</span>
        </div>
        <p className="mt-2 text-velmora-gold font-sans text-sm">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-velmora-charcoal">Bestsellers</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
          <p className="mt-4 text-velmora-charcoal/60 max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-velmora-charcoal/20 text-velmora-charcoal font-sans text-sm tracking-wider hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
          >
            VIEW ALL JEWELRY
          </Link>
        </div>
      </div>
    </section>
  );
}
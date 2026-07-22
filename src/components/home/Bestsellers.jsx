import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Bestsellers</h2>
          <p className="font-sans text-sm text-velmora-taupe mt-3 tracking-wide">
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`}>
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                  <img 
                    src={product.images[hoveredProduct === product.id ? 1 : 0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick Add Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, 'gold');
                    }}
                    className="absolute bottom-0 left-0 right-0 py-3 bg-velmora-charcoal/90 text-velmora-cream font-sans text-xs tracking-wide uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag size={14} strokeWidth={1.5} />
                    <span>Quick Add</span>
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-sm text-velmora-charcoal tracking-widest">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center mt-1 space-x-1">
                    <Star size={12} fill="#C9A962" stroke="#C9A962" />
                    <span className="font-sans text-xs text-velmora-taupe">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="font-sans text-sm text-velmora-gold mt-1">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-block font-sans text-sm tracking-widest text-velmora-charcoal border-b border-velmora-charcoal/30 pb-1 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
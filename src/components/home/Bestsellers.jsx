import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <p className="text-velmora-gray max-w-xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-velmora-taupe/20 overflow-hidden mb-4">
                  {/* Primary Image */}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Hover Image */}
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-velmora-cream text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal ${
                      hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    QUICK ADD
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-taupe'
                      }`}
                    />
                  ))}
                  <span className="text-velmora-gray text-xs ml-1">({product.reviews})</span>
                </div>
                <p className="text-velmora-gold font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-b border-velmora-charcoal pb-1 text-velmora-charcoal tracking-wide hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
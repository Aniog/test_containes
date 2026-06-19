import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const bestsellerProducts = products.filter(p => p.bestseller);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            Bestsellers
          </h2>
          <div className="hairline max-w-16 mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative">
                {/* Image Container */}
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                    {/* Primary Image */}
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    {/* Secondary Image (hover) */}
                    <img 
                      src={product.images[1]} 
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-velmora-cream py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                        hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                    <span className="text-xs text-velmora-taupe">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <p className="mt-1 text-sm text-velmora-charcoal">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
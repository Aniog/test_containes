import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-velmora-black">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-white mb-4">
            Bestsellers
          </h2>
          <p className="text-velmora-muted max-w-xl mx-auto">
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`}>
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-velmora-soft overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredProduct === product.id ? 0 : 1 }}
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  />
                  
                  {/* Quick Add Button */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-velmora-black/80 to-transparent transition-all duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-velmora-white line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                    <span className="text-xs text-velmora-muted">{product.rating}</span>
                  </div>
                  <p className="text-velmora-gold font-medium">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0].src,
    });
    openCart();
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velmora-base overflow-hidden">
                <img
                  src={hoveredId === product.id ? product.images[1].src : product.images[0].src}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Quick add */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-0 left-0 right-0 bg-velmora-base/90 backdrop-blur-sm text-white py-3 text-xs tracking-widest uppercase font-sans font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Bag
                </button>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-base">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-border'
                      }`}
                    />
                  ))}
                  <span className="text-[11px] text-velmora-muted ml-1">({product.reviews})</span>
                </div>
                <p className="font-sans text-sm mt-2 text-velmora-base">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors underline underline-offset-4"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: 'gold',
    });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-widest uppercase font-medium mb-3">
            The Edit
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-200 mb-3">
                <img
                  src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold-500 hover:text-white"
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xs uppercase tracking-wider text-ink-800">
                  {product.name}
                </h3>
                <p className="font-sans text-sm font-medium text-ink-900">
                  ${product.price}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-cream-300'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-ink-400 ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-ink-800 border-b border-ink-300 pb-0.5 hover:text-gold-600 hover:border-gold-400 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
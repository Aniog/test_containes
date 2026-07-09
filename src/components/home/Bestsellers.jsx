import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-3">
            Bestsellers
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.slug}`} className="block">
                <div className="aspect-[3/4] bg-brand-cream overflow-hidden relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 absolute inset-0 opacity-0 group-hover:opacity-100"
                  />
                  {product.id === 5 && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-white font-sans text-[10px] uppercase tracking-wider px-2.5 py-1">
                      Best Value
                    </span>
                  )}
                </div>
              </Link>

              <div className="mt-3 px-1">
                <Link to={`/product/${product.slug}`}>
                  <h3 className="product-name text-brand-charcoal hover:text-brand-gold transition-colors leading-relaxed">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  <span className="font-sans text-xs text-brand-taupe">{product.rating}</span>
                </div>
                <p className="font-sans text-sm font-medium text-brand-charcoal mt-1.5">
                  ${product.price}
                </p>
              </div>

              <button
                onClick={() => addItem(product)}
                className="absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 text-white font-sans text-xs uppercase tracking-wider py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
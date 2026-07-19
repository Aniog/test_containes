import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { dispatch } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            Bestsellers
          </h2>
          <p className="text-brand-warm-gray mt-3 text-sm md:text-base font-light max-w-md mx-auto">
            Our most-loved pieces, chosen by women who cherish quiet elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-gold-light">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </Link>

              {/* Quick add overlay */}
              <div
                className={`absolute top-2 right-2 transition-all duration-300 ${
                  hoveredId === product.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1'
                }`}
              >
                <button
                  onClick={() =>
                    dispatch({
                      type: 'ADD_ITEM',
                      payload: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                      },
                    })
                  }
                  className="bg-white/90 backdrop-blur-sm p-2.5 shadow-md hover:bg-brand-gold hover:text-white transition-colors"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 pb-1">
                <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-charcoal truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  <span className="text-[11px] text-brand-warm-gray">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-brand-charcoal mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
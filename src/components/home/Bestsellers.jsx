import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.variant);
    openCart();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-deep font-light">
            Bestsellers
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-white overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={hoveredId === product.id && product.images[1] ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Quick Add button on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-white/95 backdrop-blur-sm text-brand-deep py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center">
                <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-deep">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted font-medium">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
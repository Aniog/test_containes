import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.filter((p) => p.isBestseller);

export default function Bestsellers() {
  const { addItem } = useCart();
  const [addedIds, setAddedIds] = useState(new Set());

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1);
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl text-text-primary">
            Bestsellers
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Worn and loved by thousands</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group product-card"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-ivory overflow-hidden rounded-sm">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-card-image w-full h-full object-cover"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </Link>

                {/* Quick add button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`absolute bottom-3 left-3 right-3 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                    addedIds.has(product.id)
                      ? 'bg-text-primary text-white'
                      : 'bg-white/90 text-text-primary opacity-0 group-hover:opacity-100 hover:bg-gold-accent hover:text-white'
                  }`}
                >
                  {addedIds.has(product.id) ? 'Added ✓' : 'Add to Cart'}
                </button>
              </div>

              {/* Info */}
              <div className="mt-3 md:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xs md:text-sm uppercase tracking-wider text-text-primary font-medium">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-star-gold text-star-gold" />
                  <span className="text-xs text-warm-gray">{product.rating}</span>
                </div>
                <p className="mt-1 text-sm md:text-base font-medium text-text-primary">
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
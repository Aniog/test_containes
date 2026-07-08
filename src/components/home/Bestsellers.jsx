import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);
  const { addToCart } = useCart();

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-velmora-taupe">
            Most Loved
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-3">
            Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group product-card">
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Secondary Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className="secondary-image w-full h-full object-cover"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-white text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-velmora-taupe mt-1">${product.price}</p>
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-taupe/30'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-taupe ml-1">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}
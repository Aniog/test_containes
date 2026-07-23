import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory)] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover Image */}
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-warm-white)] text-xs font-sans font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-product-name text-xs" style={{ color: 'var(--color-charcoal)' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-[var(--color-gold)]" style={{ color: 'var(--color-gold)' }} />
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="mt-1 font-serif text-sm" style={{ color: 'var(--color-charcoal)' }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
            Bestsellers
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="btn-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
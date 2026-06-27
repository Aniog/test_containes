import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  // Get first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Customer Favorites
          </p>
          <h2 className="heading-2 text-[var(--color-charcoal)]">Our Bestsellers</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <article
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-[var(--color-ivory)] rounded mb-4 overflow-hidden">
                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredProduct === product.id ? 0 : 1 }}
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} - alternate view`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 badge z-10">
                    {product.badge}
                  </span>
                )}

                {/* Quick Add Button */}
                <button
                  onClick={() => addToCart(product, product.variants[0])}
                  className="absolute bottom-3 left-3 right-3 bg-[var(--color-charcoal)] text-white py-2.5 px-4 flex items-center justify-center gap-2 text-xs tracking-[0.1em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-espresso)]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  <span className="text-xs text-[var(--color-warm-gray)]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <p className="font-medium text-[var(--color-charcoal)]">
                  ${product.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn btn-secondary"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

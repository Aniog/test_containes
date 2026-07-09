import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import StarRating from '../../components/StarRating';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="bg-velmora-cream section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-charcoal">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addItem} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, product.defaultVariant, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-3 md:mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}-img1`}
          data-strk-img={`[bestseller-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with second image hint and add button */}
        <div
          className={`absolute inset-0 bg-velmora-charcoal/10 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Add to cart button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 backdrop-blur-sm text-velmora-charcoal font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-velmora-gold hover:text-white flex items-center justify-center gap-2 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>

        {/* Sale badge */}
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-velmora-gold text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1">
            Sale
          </span>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3
          id={`bestseller-${product.id}-title`}
          className="product-name mb-1.5 transition-colors group-hover:text-velmora-gold"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="font-sans text-sm font-medium text-velmora-charcoal">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-velmora-gray line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <StarRating rating={product.rating} size={12} showValue reviewCount={product.reviewCount} />
      </div>
    </Link>
  );
}
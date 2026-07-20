import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {/* Add to Cart Button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-velmora-charcoal/90 backdrop-blur-sm text-white font-sans font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-velmora-gold text-white text-xs font-sans font-medium tracking-wide">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-velmora-gold fill-velmora-gold'
                  : 'text-velmora-taupe'
              }`}
            />
          ))}
          <span className="text-xs font-sans text-velmora-text-muted ml-1">
            ({product.reviews})
          </span>
        </div>
        <h3 className="font-serif text-sm tracking-ultra-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-velmora-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const products = getBestsellers();

  return (
    <section className="py-20 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium tracking-ultra-wide text-velmora-gold mb-3 block">
            CUSTOMER FAVORITES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
            Our Bestsellers
          </h2>
          <p className="text-sm font-sans text-velmora-text-secondary max-w-md mx-auto">
            Discover the pieces our community can't stop wearing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-velmora-charcoal text-velmora-charcoal font-sans font-medium text-sm tracking-wide hover:bg-velmora-charcoal hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

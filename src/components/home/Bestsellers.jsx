import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-ivory-200 rounded-lg overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered && product.images[1] ? 0 : 1 }}
        />
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-espresso text-ivory-100 text-xs font-sans uppercase tracking-wider">
            Bestseller
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-ivory-100 text-espresso font-sans text-sm 
                      uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag className="w-4 h-4" />
          {addedToCart ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold-500 fill-gold-500'
                    : 'text-charcoal-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-500">({product.reviews})</span>
        </div>

        <p className="font-sans text-charcoal-800 font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellerProducts = products.filter((p) => p.isBestseller);

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs tracking-ultra-wide text-accent mb-4 uppercase">
            Customer Favorites
          </span>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">Our Bestsellers</h2>
          <p className="font-sans text-charcoal-600 max-w-md mx-auto">
            Discover the pieces our community can't stop wearing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

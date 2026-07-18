import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand-light overflow-hidden mb-4">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          data-strk-bg-id={`bestseller-${product.id}-1`}
          data-strk-bg={`[bestseller-name-${product.id}] gold jewelry on model`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          data-strk-bg-id={`bestseller-${product.id}-2`}
          data-strk-bg={`[bestseller-name-${product.id}] gold jewelry detail shot`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />
        {/* New tag */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-espresso text-[10px] tracking-widest uppercase px-2 py-0.5 font-medium">
            New
          </span>
        )}
        {/* Favorite */}
        <button
          className="absolute top-3 right-3 p-2 text-warmwhite/70 hover:text-warmwhite transition-colors"
          onClick={(e) => e.preventDefault()}
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
              added
                ? 'bg-gold text-espresso'
                : 'bg-espresso/90 backdrop-blur-sm text-warmwhite hover:bg-espresso'
            }`}
          >
            {added ? 'Added' : 'Add to Cart'} — ${product.price}
          </button>
        </div>
      </div>

      {/* Info */}
      <h3
        id={`bestseller-name-${product.id}`}
        className="font-serif text-sm md:text-base tracking-wider uppercase text-espresso mb-1"
      >
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
            />
          ))}
        </div>
        <span className="text-xs text-stone">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-espresso mt-1">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="container-max section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">View All Products</Link>
      </div>
    </section>
  );
}

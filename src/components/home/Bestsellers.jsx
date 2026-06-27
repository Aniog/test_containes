import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, setDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.material, 1);
    setDrawer(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={`https://placehold.co/600x800/f7f4ef/c9a96e?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Hover image */}
        <img
          src={`https://placehold.co/600x800/ede8df/b08d4a?text=${encodeURIComponent(product.name + ' Alt')}`}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 bg-ink/90 backdrop-blur-sm text-paper text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-ink ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </div>
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-ink group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-[11px] text-warm-gray">{product.rating}</span>
          </div>
          <span className="text-[11px] text-warm-gray-light">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-ink">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-ink text-ink text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-ink hover:text-paper transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

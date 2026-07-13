import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
          {/* Primary image — warm gold jewelry editorial */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            style={{
              background: hovered
                ? 'linear-gradient(145deg, #2C2018 0%, #3D2E1A 50%, #1A1614 100%)'
                : 'linear-gradient(145deg, #F2EDE4 0%, #E8D5A3 40%, #C9A96E 100%)',
            }}
          >
            <ProductImagePlaceholder product={product} dark={false} />
          </div>

          {/* Hover image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(145deg, #2C2018 0%, #3D2E1A 50%, #1A1614 100%)',
            }}
          >
            <ProductImagePlaceholder product={product} dark={true} />
          </div>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags?.includes('bestseller') && (
              <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-velmora-obsidian text-velmora-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 font-manrope text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-200 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-ivory hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-cormorant text-base uppercase tracking-widest text-velmora-obsidian leading-tight group-hover:text-velmora-gold transition-colors duration-200">
                {product.name}
              </h3>
              <p className="font-manrope text-xs text-velmora-stone mt-1">
                {product.shortDescription}
              </p>
            </div>
            <span className="font-manrope text-sm font-medium text-velmora-charcoal flex-shrink-0">
              ${product.price}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-2.5 h-2.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-velmora-gold fill-velmora-gold'
                      : 'text-velmora-gold/30'
                  }`}
                />
              ))}
            </div>
            <span className="font-manrope text-[10px] text-velmora-stone">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProductImagePlaceholder({ product, dark }) {
  const initials = product.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
      <div
        className={`w-16 h-16 rounded-full border flex items-center justify-center ${
          dark ? 'border-velmora-gold/30' : 'border-velmora-gold/50'
        }`}
      >
        <span className={`font-cormorant text-2xl font-light ${dark ? 'text-velmora-gold/60' : 'text-velmora-gold'}`}>
          {initials}
        </span>
      </div>
      <div className={`w-12 h-px ${dark ? 'bg-velmora-gold/20' : 'bg-velmora-gold/40'}`} />
      <span className={`font-manrope text-[9px] uppercase tracking-widest text-center ${dark ? 'text-velmora-ivory/30' : 'text-velmora-stone/60'}`}>
        {product.category}
      </span>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-widest px-10 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

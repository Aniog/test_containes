import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products, bestsellerIds } from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useCartDispatch();

  const imgId = `bestseller-${product.id}`;
  const titleId = `bestseller-title-${product.id}`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD', productId: product.id, variant: 'gold', quantity: 1 });
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
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden rounded-sm mb-4">
        <div
          data-strk-img-id={imgId}
          data-strk-img={`[${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Quick add button overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 px-3 pb-3 transition-all duration-300
            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-xs tracking-[0.1em] uppercase font-medium rounded-sm transition-all duration-300
              ${added
                ? 'bg-gold-500 text-velvet-950 border border-gold-500'
                : 'bg-white/95 text-velvet-900 border border-white/50 hover:bg-white'}`}
          >
            {added ? 'Added' : (
              <span className="flex items-center justify-center gap-1.5">
                <ShoppingBag className="w-3 h-3" />
                Add to Cart
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 id={titleId} className="product-name text-xs mb-1.5 group-hover:text-gold-600 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
        <span className="text-xs text-velvet-500">{product.rating} ({product.reviewCount})</span>
      </div>
      <p className="text-sm text-velvet-800 font-medium">${product.price}</p>
    </Link>
  );
}

export default function BestsellersGrid() {
  const ref = useRef(null);
  const bestsellers = products.filter((p) => bestsellerIds.includes(p.id));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">Bestsellers</h2>
        <p className="text-velvet-500 text-sm tracking-wide max-w-md mx-auto">
          The pieces our customers reach for every day
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

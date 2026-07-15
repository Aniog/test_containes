import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function ProductGrid({ products }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAddedId(product.id);
    window.dispatchEvent(new CustomEvent('velmora:open-cart'));
    setTimeout(() => setAddedId(null), 1500);
  };

  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-ink-muted text-lg font-serif">No products found</p>
        <p className="text-ink-muted text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group bg-white"
        >
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velvet-100">
            <img
              data-strk-img-id={`shop-${product.id}`}
              data-strk-img={`[shop-title-${product.id}] [shop-price-${product.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
              <button
                onClick={(e) => handleAddToCart(product, e)}
                disabled={addedId === product.id}
                className={`bg-white text-ink text-xs tracking-wider uppercase font-medium px-5 py-2.5 transition-all duration-300 hover:bg-gold-500 hover:text-white flex items-center gap-2 ${
                  addedId === product.id ? 'bg-gold-500 text-white' : ''
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                {addedId === product.id ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="pt-4 pb-2 px-0">
            <p id={`shop-title-${product.id}`} className="product-name mb-1 group-hover:text-gold-600 transition-colors">
              {product.name}
            </p>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
              <span className="text-xs text-ink-muted">{product.rating}</span>
            </div>
            <p id={`shop-price-${product.id}`} className="font-sans text-sm font-medium text-ink">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
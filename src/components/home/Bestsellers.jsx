import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const featuredProducts = products.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide" ref={containerRef}>
        <div className="text-center mb-14">
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, addItem }) {
  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-pearl overflow-hidden mb-4">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.imgId}-desc] [${product.imgId}-name] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, defaultVariant);
              }}
              className="w-full bg-charcoal text-white py-2.5 flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-button font-medium hover:bg-gold transition-colors"
            >
              <ShoppingBag size={13} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Text refs for image system */}
        <span id={`${product.imgId}-name`} className="sr-only">{product.name}</span>
        <span id={`${product.imgId}-desc`} className="sr-only">{product.description}</span>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1">{product.name}</h3>
        <p className="font-sans text-sm font-medium text-charcoal">${product.price}</p>
      </Link>
    </div>
  );
}

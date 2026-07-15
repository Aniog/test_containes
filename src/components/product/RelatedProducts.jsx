import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
      <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso text-center mb-10">
        You May Also Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {related.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`related-${product.id}`}
                data-strk-img={`[related-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <span id={`related-name-${product.id}`} className="hidden">{product.name}</span>
            <h3 className="product-name">{product.name}</h3>
            <p className="text-sm text-velmora-stone mt-0.5">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

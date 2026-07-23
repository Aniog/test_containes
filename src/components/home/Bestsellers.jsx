import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso font-inter text-xs tracking-widest uppercase px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}

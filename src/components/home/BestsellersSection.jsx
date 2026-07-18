import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 id="bestsellers-heading" className="font-serif text-3xl md:text-4xl tracking-wider text-foreground">
          Bestsellers
        </h2>
        <p id="bestsellers-subtitle" className="mt-3 text-sm text-muted-foreground tracking-widest uppercase">
          The pieces everyone is talking about
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">Curated for You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-text-dark font-light">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark border-b border-velmora-text-dark pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Hidden text nodes for image queries */}
        {products.map(p => (
          <span key={p.id} className="hidden">
            <span id={p.images[0].titleId}>{p.titleText}</span>
            <span id={p.images[0].descId}>{p.descText}</span>
            <span id={p.images[1].titleId}>{p.title2Text}</span>
            <span id={p.images[1].descId}>{p.desc2Text}</span>
          </span>
        ))}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imgId={product.images[0].id}
              imgQuery={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
              img2Id={product.images[1].id}
              img2Query={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

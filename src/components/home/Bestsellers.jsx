import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

const bestsellers = products.filter((p) => p.isBestseller);

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">
          Our Favorites
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All
        </Link>
      </div>
    </section>
  );
}

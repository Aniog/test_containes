import { useEffect, useRef } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-base md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-xs font-medium uppercase tracking-widest text-muted underline-offset-4 transition-colors hover:text-base hover:underline md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-widest text-muted underline-offset-4 hover:text-base hover:underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

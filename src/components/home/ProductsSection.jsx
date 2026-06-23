import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { productCategories } from '../../data/content';

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products we source"
          title="Categories we know inside out"
          description="We have hands-on experience across consumer and industrial categories, with established factory networks in the right manufacturing hubs."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.slice(0, 6).map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`home-product-${p.id}-img`}
                  data-strk-img={`[home-product-${p.id}-desc] [home-product-${p.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`home-product-${p.id}-title`} className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p id={`home-product-${p.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

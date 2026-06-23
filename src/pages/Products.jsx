import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Tag } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { productCategories } from '../data/content';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        breadcrumb="Products We Source"
        eyebrow="Products we source"
        title="Categories and product types we cover"
        description="We focus on categories where we can add real value. If your product is not listed, contact us — chances are we have done something similar."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`product-${p.id}-img`}
                    data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 id={`product-${p.id}-title`} className="text-xl font-semibold text-slate-900">
                    {p.title}
                  </h2>
                  <p id={`product-${p.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Examples
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.examples.map((e) => (
                        <span
                          key={e}
                          className="inline-flex items-center gap-1 text-xs text-slate-700 bg-slate-100 rounded-full px-2.5 py-1"
                        >
                          <Tag className="w-3 h-3 text-slate-400" />
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Don't see your product?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            We source many niche and custom products beyond this list. Send us a description and we will tell you honestly whether we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Ask about your product
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

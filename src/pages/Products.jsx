import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const ProductsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-charcoal pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-accent" />
            <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase">
              Our Machines
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sheet Metal Folding Machines
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            A complete range of double folding machines, sheet metal folders, and metal
            folder machines designed for every production requirement.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-xl group">
                    <img
                      data-strk-img-id={`product-page-${product.id}`}
                      data-strk-img={`[product-${product.id}-name] [product-${product.id}-cat] industrial sheet metal folding machine`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/90 text-amber text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded">
                      {product.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2
                    id={`product-${product.id}-name`}
                    className="text-2xl md:text-3xl font-bold text-charcoal mb-2"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={`product-${product.id}-cat`}
                    className="text-amber font-medium mb-4"
                  >
                    {product.tagline}
                  </p>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs Table */}
                  <div className="bg-warm-off rounded-lg p-5 mb-6">
                    <h4 className="text-charcoal font-semibold text-sm uppercase tracking-wider mb-3">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between border-b border-stone-200/60 py-1.5">
                          <span className="text-stone-400 text-sm">{spec.label}</span>
                          <span className="text-charcoal text-sm font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                        <span className="text-stone-500 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn-primary"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Folding Solution?
          </h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto">
            Our engineering team can design a bespoke metal folding machine tailored
            to your exact production requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Our Engineers
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

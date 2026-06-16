import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const featured = products.filter((p) => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-warm-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="gold-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Our Machine Range
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            From compact double folders to heavy-duty industrial folding machines,
            every model is engineered for precision and built to last.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div key={product.id} className="card-product group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  data-strk-img-id={`featured-${product.id}`}
                  data-strk-img={`[featured-${product.id}-name] [featured-${product.id}-cat] sheet metal folding machine`}
                  data-strk-img-ratio={product.imgRatio}
                  data-strk-img-width={product.imgWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-charcoal/90 text-amber text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3
                  id={`featured-${product.id}-name`}
                  className="text-xl font-bold text-charcoal mb-1"
                >
                  {product.name}
                </h3>
                <p
                  id={`featured-${product.id}-cat`}
                  className="text-amber text-sm font-medium mb-3"
                >
                  {product.tagline}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {product.description}
                </p>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber flex-shrink-0" />
                      <span className="text-xs text-stone-500">
                        <span className="font-medium text-charcoal">{spec.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/products#${product.id}`}
                  className="inline-flex items-center text-amber font-semibold text-sm tracking-wide hover:text-amber-dark transition-colors group/link"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Machines
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

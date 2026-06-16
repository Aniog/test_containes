import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'df-2500',
    title: 'DF-2500 Double Folder',
    description: 'High-capacity double folding machine for industrial sheet metal processing up to 2500mm.',
    specs: 'Up to 2500mm width',
    imgId: 'product-df2500-home-a1b2c3',
    titleId: 'product-df2500-title',
    descId: 'product-df2500-desc',
  },
  {
    id: 'sf-1800',
    title: 'SF-1800 Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine with programmable bend sequences and quick setup.',
    specs: 'Up to 1800mm width',
    imgId: 'product-sf1800-home-d4e5f6',
    titleId: 'product-sf1800-title',
    descId: 'product-sf1800-desc',
  },
  {
    id: 'mf-3200',
    title: 'MF-3200 Metal Folder',
    description: 'Heavy-duty metal folder machine designed for thick gauge materials and continuous operation.',
    specs: 'Up to 3200mm width',
    imgId: 'product-mf3200-home-g7h8i9',
    titleId: 'product-mf3200-title',
    descId: 'product-mf3200-desc',
  },
];

const HomeProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <h2 id="home-products-title" className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-3">
              Our Machines
            </h2>
            <p className="text-slate-600 text-lg max-w-lg">
              Explore our range of precision folding machines built for performance.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-500 font-semibold text-sm transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [home-products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">{product.specs}</span>
                <h3 id={product.titleId} className="text-lg font-semibold text-navy-900 mt-2 mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;

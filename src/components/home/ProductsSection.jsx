import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, cables, connectors, batteries, LED lighting, and semiconductor components.',
    imgId: 'products-electronics-7b1c3a',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    title: 'Machinery & Industrial Equipment',
    desc: 'Manufacturing machinery, packaging equipment, CNC machines, automation systems, and industrial tools.',
    imgId: 'products-machinery-8c2d4b',
    titleId: 'products-machinery-title',
    descId: 'products-machinery-desc',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, shoes, accessories, and home textiles from qualified manufacturers.',
    imgId: 'products-textiles-9d3e5c',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    title: 'Home & Hardware',
    desc: 'Furniture, kitchenware, bathroom fixtures, building hardware, and home decor products.',
    imgId: 'products-hardware-1a4f6d',
    titleId: 'products-hardware-title',
    descId: 'products-hardware-desc',
  },
  {
    title: 'Automotive Parts',
    desc: 'OEM and aftermarket auto parts, electric vehicle components, accessories, and maintenance tools.',
    imgId: 'products-automotive-2b5g7e',
    titleId: 'products-automotive-title',
    descId: 'products-automotive-desc',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, labels, bags, printed materials, and branded promotional items.',
    imgId: 'products-packaging-3c6h8f',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We source a wide range of product categories across multiple
            industries. If you do not see your product listed, contact us. We
            can likely help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-bold text-navy mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

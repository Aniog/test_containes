import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, consumer electronics, IoT devices, and accessories.',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
    imgId: 'prod-img-electronics-a1b2',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'CNC machines, packaging equipment, automation systems, pumps, and industrial tools.',
    titleId: 'prod-title-machinery',
    descId: 'prod-desc-machinery',
    imgId: 'prod-img-machinery-c3d4',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, home textiles, sportswear, bags, and fashion accessories.',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
    imgId: 'prod-img-textiles-e5f6',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, construction hardware, and metal components.',
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
    imgId: 'prod-img-hardware-g7h8',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, flexible packaging, paper products, and promotional materials.',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
    imgId: 'prod-img-packaging-i9j0',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor/outdoor furniture, kitchenware, decor, lighting, and storage solutions.',
    titleId: 'prod-title-furniture',
    descId: 'prod-desc-furniture',
    imgId: 'prod-img-furniture-k1l2',
  },
];

export default function ProductsSourced() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">Products We Source</h2>
          <p className="section-subheading mx-auto">
            We have experience sourcing across a wide range of industries and product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group block bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-slate-200">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-brand-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-sm text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-outline">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices',
    imgId: 'prod-electronics-4f1a2b',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware',
    imgId: 'prod-furniture-5c2d3e',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, bags, shoes, fabric and accessories',
    imgId: 'prod-apparel-6d3e4f',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Manufacturing equipment, tools, spare parts, automation systems',
    imgId: 'prod-machinery-7e4f5a',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, promotional materials',
    imgId: 'prod-packaging-8f5a6b',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, supplements, medical devices, cosmetics',
    imgId: 'prod-health-9a6b7c',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
];

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting buyers with
            the right Chinese manufacturers for their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-xl border border-slate-200 hover:shadow-card-hover transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-blue-700 transition-colors"
          >
            See all product categories →
          </Link>
        </div>
      </div>
    </section>
  );
}

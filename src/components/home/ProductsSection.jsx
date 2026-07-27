import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, and smart devices.',
    imgId: 'prod-electronics-7a8b9c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, and kitchenware.',
    imgId: 'prod-furniture-1d2e3f',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, bags, shoes, and fabric accessories.',
    imgId: 'prod-apparel-4g5h6i',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Tools',
    desc: 'Industrial equipment, power tools, hardware, and mechanical parts.',
    imgId: 'prod-machinery-7j8k9l',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, medical devices, supplements, and cosmetics.',
    imgId: 'prod-health-0m1n2o',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, outdoor equipment, fitness gear, and games.',
    imgId: 'prod-toys-3p4q5r',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Products We Source from China
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting you with the right
            factories for your specific needs.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow bg-slate-50"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-slate-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

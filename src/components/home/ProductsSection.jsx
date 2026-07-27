import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, and electronic accessories.',
    imgId: 'prod-electronics-7f3a1b',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, and household products.',
    imgId: 'prod-furniture-2c8d4e',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories.',
    imgId: 'prod-apparel-5e9f2a',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and manufacturing machinery.',
    imgId: 'prod-machinery-3b6c8d',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'plastics',
    title: 'Plastics & Packaging',
    desc: 'Plastic products, packaging materials, containers, and custom molded parts.',
    imgId: 'prod-plastics-1a4e7f',
    titleId: 'prod-plastics-title',
    descId: 'prod-plastics-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, medical devices, wellness items, and cosmetics.',
    imgId: 'prod-health-8d2b5c',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
];

export default function ProductsSection() {
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
          <span id="products-section-label" className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Product Categories</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            Products We Source from China
          </h2>
          <p id="products-section-subtitle" className="text-brand-muted text-lg max-w-2xl mx-auto">
            We have experience sourcing across 30+ product categories. Here are some of the most common.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden bg-brand-gray">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-brand-text mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-brand-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Categories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

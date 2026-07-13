import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, and electronic accessories.',
    imgId: 'prod-electronics-8a2f1b',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, and soft furnishings.',
    imgId: 'prod-furniture-3c9d4e',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories.',
    imgId: 'prod-apparel-5f7a2c',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Manufacturing equipment, tools, spare parts, and industrial components.',
    imgId: 'prod-machinery-1b4e8d',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, and branded packaging solutions.',
    imgId: 'prod-packaging-9e3f6a',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, outdoor equipment, fitness gear, and hobby products.',
    imgId: 'prod-toys-2d5c7b',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
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
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">Product Categories</p>
          <h2 className="section-heading mb-4">Products We Source</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow duration-200 bg-white">
              <div className="relative overflow-hidden h-48">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-brand-navy font-bold text-base mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-brand-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

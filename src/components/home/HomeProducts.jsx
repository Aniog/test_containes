import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, and accessories.',
    imgId: 'prod-electronics-4f8a2b',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, and soft furnishings.',
    imgId: 'prod-furniture-7c3d1e',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Garments, sportswear, workwear, fabrics, and accessories.',
    imgId: 'prod-apparel-2a9f5c',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Manufacturing equipment, tools, spare parts, and industrial supplies.',
    imgId: 'prod-machinery-8b4e6d',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and promotional materials.',
    imgId: 'prod-packaging-1d7c3a',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, supplements, medical devices, and wellness goods.',
    imgId: 'prod-health-5e2b8f',
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
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Product Categories</span>
          <h2 className="section-heading">Products We Source</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting buyers with
            the right manufacturers in China's key industrial regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow bg-white">
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-brand-dark mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-brand-mid text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, and electronic accessories.',
    imgId: 'prod-electronics-8a2f1c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, and household products.',
    imgId: 'prod-furniture-3b7d4e',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories.',
    imgId: 'prod-apparel-9c1e5f',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, spare parts, and manufacturing machinery.',
    imgId: 'prod-machinery-2d6a8b',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and promotional printed materials.',
    imgId: 'prod-packaging-5e3c7d',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories.',
    imgId: 'prod-toys-7f4b2a',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Products We Source
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow bg-white"
            >
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-brand-dark mb-1">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-brand-body text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

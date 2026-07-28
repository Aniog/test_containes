import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'cat-electronics',
    title: 'Consumer Electronics',
    description: 'Headphones, Bluetooth speakers, chargers, power banks, smart home devices, LED lighting, cables and adapters.',
    imgId: 'cat-electronics-img-x1y2z3',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'cat-textiles',
    title: 'Textiles & Apparel',
    description: 'Clothing, sportswear, uniforms, fabrics, accessories, bags, shoes, and custom fashion items.',
    imgId: 'cat-textiles-img-a4b5c6',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
  },
  {
    id: 'cat-home',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, bathroom accessories, home decor, garden tools, and outdoor living products.',
    imgId: 'cat-home-img-d7e8f9',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    id: 'cat-industrial',
    title: 'Industrial & Machinery',
    description: 'Power tools, CNC parts, auto accessories, hardware, fasteners, and industrial equipment.',
    imgId: 'cat-industrial-img-g1h2i3',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
  },
  {
    id: 'cat-beauty',
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair tools, salon equipment, packaging, and private label beauty.',
    imgId: 'cat-beauty-img-j4k5l6',
    titleId: 'cat-beauty-title',
    descId: 'cat-beauty-desc',
  },
  {
    id: 'cat-packaging',
    title: 'Packaging & Printing',
    description: 'Custom boxes, labels, shopping bags, promotional materials, and branded packaging solutions.',
    imgId: 'cat-packaging-img-m7n8o9',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
  {
    id: 'cat-toys',
    title: 'Toys & Baby Products',
    description: 'Educational toys, plush toys, baby gear, strollers, feeding products, and children\'s furniture.',
    imgId: 'cat-toys-img-p1q2r3',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
  },
  {
    id: 'cat-sports',
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, cycling accessories, water sports, and outdoor recreation products.',
    imgId: 'cat-sports-img-s4t5u6',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
  },
  {
    id: 'cat-medical',
    title: 'Health & Medical',
    description: 'Medical devices, PPE, health monitors, rehabilitation equipment, and wellness products.',
    imgId: 'cat-medical-img-v7w8x9',
    titleId: 'cat-medical-title',
    descId: 'cat-medical-desc',
  },
];

const Products = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-neutral-300 text-lg max-w-2xl mx-auto">
            We source across dozens of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-semibold text-neutral-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Don't See Your Product Category?</h2>
            <p className="text-neutral-600 text-lg mb-6 max-w-2xl mx-auto">
              We source products across virtually every manufacturing sector in China. Contact us with your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

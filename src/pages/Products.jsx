import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED products, and electronic assemblies. Sourced primarily from Shenzhen and Dongguan supplier clusters.',
    imgId: 'prod-electronics-t1u2v3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, home textiles, lighting, and decorative items. Key sourcing regions include Foshan, Yiwu, and Ningbo.',
    imgId: 'prod-home-garden-w4x5y6',
    titleId: 'prod-home-garden-title',
    descId: 'prod-home-garden-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, sportswear, bags, shoes, and textile accessories. Sourced from Guangzhou, Shaoxing, and Jiangsu textile hubs.',
    imgId: 'prod-textiles-z7a8b9',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Parts',
    desc: 'Processing equipment, CNC machines, pumps, valves, bearings, and industrial components. Key regions: Zhejiang, Jiangsu, and Liaoning.',
    imgId: 'prod-machinery-c1d2e3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bottles, flexible packaging, and printing materials. Sourced from Dongguan, Shenzhen, and Wenzhou.',
    imgId: 'prod-packaging-f4g5h6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, motorcycle components, EV parts, and vehicle accessories. Sourced from Changzhou, Ningbo, and Chongqing.',
    imgId: 'prod-auto-parts-i7j8k9',
    titleId: 'prod-auto-parts-title',
    descId: 'prod-auto-parts-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Ceramic tiles, sanitary ware, hardware, doors, windows, and construction materials. Key regions: Foshan, Fujian, and Guangdong.',
    imgId: 'prod-building-l1m2n3',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty Products',
    desc: 'Cosmetics, skincare, supplements, medical devices, and personal care items. Sourced from Guangzhou and Shanghai with regulatory compliance support.',
    imgId: 'prod-health-o4p5q6',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'food-agriculture',
    title: 'Food & Agriculture Products',
    desc: 'Processed foods, agricultural products, food packaging, and ingredients. Compliance with import regulations and food safety standards.',
    imgId: 'prod-food-r7s8t9',
    titleId: 'prod-food-title',
    descId: 'prod-food-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            We source across a wide range of product categories. If your product is made in China, we can help you find the right supplier in the right region.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-base font-semibold text-neutral-900 mb-1">{cat.title}</h3>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Need to Source a Specific Product?</h2>
          <p className="text-neutral-600 text-sm mb-6">Tell us what you need and we will find the right supplier for you.</p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

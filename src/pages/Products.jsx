import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, sensors, connectors, cables, LED products, and electronic assemblies. We source from certified manufacturers in Shenzhen and Dongguan.',
    imgId: 'products-page-electronics-l1m2n3',
    titleId: 'products-page-electronics-title',
    descId: 'products-page-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, sportswear, fashion accessories, and custom clothing. Sourced from established mills in Zhejiang and Jiangsu provinces.',
    imgId: 'products-page-textiles-o4p5q6',
    titleId: 'products-page-textiles-title',
    descId: 'products-page-textiles-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    description: 'Fasteners, hand tools, power tools, plumbing fixtures, construction materials, and industrial hardware. Verified suppliers in Wenzhou and Yongkang.',
    imgId: 'products-page-hardware-r7s8t9',
    titleId: 'products-page-hardware-title',
    descId: 'products-page-hardware-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, flexible packaging, corrugated cartons, and printing solutions. From certified packaging manufacturers across China.',
    imgId: 'products-page-packaging-u1v2w3',
    titleId: 'products-page-packaging-title',
    descId: 'products-page-packaging-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    description: 'Office furniture, home furnishings, kitchenware, decorative items, and outdoor furniture. Sourced from furniture hubs in Foshan and Anji.',
    imgId: 'products-page-furniture-x4y5z6',
    titleId: 'products-page-furniture-title',
    descId: 'products-page-furniture-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Auto components, motorcycle parts, EV accessories, vehicle maintenance tools, and rubber seals. From specialized manufacturers in Changzhou and Taizhou.',
    imgId: 'products-page-automotive-a7b8c9',
    titleId: 'products-page-automotive-title',
    descId: 'products-page-automotive-desc',
  },
  {
    id: 'chemicals',
    title: 'Chemicals & Raw Materials',
    description: 'Industrial chemicals, coatings, adhesives, plastics, and raw material compounds. Sourced from certified chemical manufacturers with proper documentation.',
    imgId: 'products-page-chemicals-d1e2f3',
    titleId: 'products-page-chemicals-title',
    descId: 'products-page-chemicals-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, CNC equipment, packaging machines, food processing equipment, and automation systems.',
    imgId: 'products-page-machinery-g4h5i6',
    titleId: 'products-page-machinery-title',
    descId: 'products-page-machinery-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    description: 'Educational toys, outdoor sporting equipment, fitness gear, and recreational products. From safety-certified manufacturers.',
    imgId: 'products-page-toys-j7k8l9',
    titleId: 'products-page-toys-title',
    descId: 'products-page-toys-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We work across a wide range of product categories. If it can be manufactured in China, we can find a reliable supplier for it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need a Product Not Listed Here?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Our sourcing capabilities extend far beyond these categories. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

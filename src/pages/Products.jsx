import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, LED lighting, PCB assemblies, cables, connectors, smart devices, and electronic components.',
    examples: ['LED lighting', 'Power supplies', 'PCB assemblies', 'Smart home devices', 'Cables & connectors', 'Consumer electronics'],
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
    imgId: 'prod-page-electronics-img-m3n4',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, home textiles, fabrics, and accessories from certified textile manufacturers.',
    examples: ['Workwear & uniforms', 'Sportswear', 'Home textiles', 'Bags & accessories', 'Fabrics & yarns', 'Fashion apparel'],
    titleId: 'prod-page-textiles-title',
    descId: 'prod-page-textiles-desc',
    imgId: 'prod-page-textiles-img-o5p6',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home furniture, kitchenware, bathroom fixtures, decorative items, and storage solutions.',
    examples: ['Office furniture', 'Home furniture', 'Kitchenware', 'Bathroom fixtures', 'Storage solutions', 'Decorative items'],
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
    imgId: 'prod-page-furniture-img-q7r8',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC machines, packaging equipment, agricultural machinery, and spare parts.',
    examples: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Industrial pumps', 'Spare parts', 'Tools & hardware'],
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
    imgId: 'prod-page-machinery-img-s9t0',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, shopping bags, display stands, and promotional materials.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Promotional items', 'Food packaging'],
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
    imgId: 'prod-page-packaging-img-u1v2',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, EV components, and aftermarket products.',
    examples: ['Brake components', 'Car accessories', 'Motorcycle parts', 'EV components', 'Filters & belts', 'Interior trim'],
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
    imgId: 'prod-page-auto-img-w3x4',
  },
  {
    id: 'construction',
    title: 'Construction & Building Materials',
    desc: 'Steel structures, tiles, sanitary ware, pipes, fittings, insulation materials, and construction hardware.',
    examples: ['Steel structures', 'Ceramic tiles', 'Sanitary ware', 'Pipes & fittings', 'Insulation', 'Hardware'],
    titleId: 'prod-page-construction-title',
    descId: 'prod-page-construction-desc',
    imgId: 'prod-page-construction-img-y5z6',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare products, medical devices, supplements, fitness equipment, and personal care items.',
    examples: ['Cosmetics', 'Skincare', 'Medical devices', 'Supplements', 'Fitness equipment', 'Personal care'],
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
    imgId: 'prod-page-health-img-a7b8',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Products We Source
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              We source across all major product categories from China's top manufacturing regions. 
              If it's made in China, we can find it for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-neutral-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex, i) => (
                      <span key={i} className="inline-block px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-md">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            We source virtually any product manufactured in China. Contact us with your specific requirements 
            and we'll find the right suppliers for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

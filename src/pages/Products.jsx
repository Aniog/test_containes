import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart devices, and electronic accessories.',
    examples: ['PCB assemblies', 'LED lighting', 'Smart home devices', 'Cables & connectors', 'Power supplies'],
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
    imgId: 'prod-page-electronics-img-n4o5p6',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, sportswear, workwear, accessories, and home textiles from certified factories.',
    examples: ['Custom garments', 'Sportswear', 'Workwear & uniforms', 'Home textiles', 'Bags & accessories'],
    titleId: 'prod-page-textiles-title',
    descId: 'prod-page-textiles-desc',
    imgId: 'prod-page-textiles-img-q7r8s9',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home furnishings, kitchenware, bathroom fixtures, and decorative items.',
    examples: ['Office furniture', 'Home decor', 'Kitchenware', 'Bathroom fixtures', 'Storage solutions'],
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
    imgId: 'prod-page-furniture-img-t1u2v3',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, agricultural equipment, and spare parts.',
    examples: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Industrial pumps', 'Spare parts'],
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
    imgId: 'prod-page-machinery-img-w4x5y6',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, flexible packaging, and printing services.',
    examples: ['Custom boxes', 'Flexible packaging', 'Labels & stickers', 'Display packaging', 'Printing services'],
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
    imgId: 'prod-page-packaging-img-z7a8b9',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, accessories, tools, and automotive electronics.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Automotive electronics', 'Tools & equipment'],
    titleId: 'prod-page-autoparts-title',
    descId: 'prod-page-autoparts-desc',
    imgId: 'prod-page-autoparts-img-c1d2e3',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing, electrical fittings, and architectural products.',
    examples: ['Steel products', 'Plumbing fixtures', 'Electrical fittings', 'Tiles & flooring', 'Hardware'],
    titleId: 'prod-page-building-title',
    descId: 'prod-page-building-desc',
    imgId: 'prod-page-building-img-f4g5h6',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, and personal care products with proper certifications.',
    examples: ['Skincare products', 'Cosmetics', 'Supplements', 'Medical devices', 'Personal care'],
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
    imgId: 'prod-page-health-img-i7j8k9',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We source across dozens of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-brand-light rounded-xl border border-brand-border hover:shadow-md transition"
              >
                <div className="w-full sm:w-40 h-40 sm:h-auto rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 id={cat.titleId} className="text-lg font-bold text-brand-navy mb-2">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-sm text-brand-muted mb-3">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex, i) => (
                      <span key={i} className="text-xs bg-white border border-brand-border px-2 py-1 rounded text-brand-dark">
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

      {/* Don't See Your Product */}
      <section className="py-16 bg-brand-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-brand-muted mb-8">
            We source virtually any product manufactured in China. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Describe Your Product <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

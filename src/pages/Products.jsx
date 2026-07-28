import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED lighting, and electronic components for OEM and ODM projects.',
    imgId: 'prod-elec-page-a1b2',
    titleId: 'prod-elec-p-title',
    descId: 'prod-elec-p-desc',
    items: ['Consumer Electronics', 'PCB & Circuit Boards', 'Sensors & Modules', 'LED Lighting', 'Connectors & Cables', 'Smart Home Devices'],
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, home textiles, and fashion accessories from established manufacturers with quality control systems.',
    imgId: 'prod-text-page-c3d4',
    titleId: 'prod-text-p-title',
    descId: 'prod-text-p-desc',
    items: ['Casual & Formal Wear', 'Sportswear & Activewear', 'Home Textiles', 'Technical Fabrics', 'Bags & Accessories', 'Custom Uniforms'],
  },
  {
    name: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, automation systems, and custom manufacturing equipment for production lines.',
    imgId: 'prod-mach-page-e5f6',
    titleId: 'prod-mach-p-title',
    descId: 'prod-mach-p-desc',
    items: ['CNC Machines', 'Packaging Equipment', 'Automation Systems', 'Material Handling', 'Industrial Robots', 'Custom Machinery'],
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, garden tools, home decor, and household products from quality-focused manufacturers.',
    imgId: 'prod-home-page-g7h8',
    titleId: 'prod-home-p-title',
    descId: 'prod-home-p-desc',
    items: ['Indoor Furniture', 'Outdoor Furniture', 'Kitchenware', 'Garden Tools', 'Home Decor', 'Storage Solutions'],
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, and vehicle accessories from certified automotive manufacturers.',
    imgId: 'prod-auto-page-i9j1',
    titleId: 'prod-auto-p-title',
    descId: 'prod-auto-p-desc',
    items: ['Engine Components', 'Body Parts', 'Interior Accessories', 'Lighting Systems', 'Brake Systems', 'Electric Vehicle Parts'],
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, and commercial printing solutions for brands and retailers worldwide.',
    imgId: 'prod-pack-page-k2l3',
    titleId: 'prod-pack-p-title',
    descId: 'prod-pack-p-desc',
    items: ['Custom Boxes', 'Flexible Packaging', 'Labels & Stickers', 'Retail Display', 'Corrugated Packaging', 'Specialty Printing'],
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, fixtures, hardware, and building supplies from certified manufacturers.',
    imgId: 'prod-build-page-m4n5',
    titleId: 'prod-build-p-title',
    descId: 'prod-build-p-desc',
    items: ['Tiles & Flooring', 'Sanitary Ware', 'Door & Window Hardware', 'Plumbing Supplies', 'Electrical Fittings', 'Structural Steel'],
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, and health devices from GMP-certified facilities.',
    imgId: 'prod-health-page-o6p7',
    titleId: 'prod-health-p-title',
    descId: 'prod-health-p-desc',
    items: ['Skincare Products', 'Cosmetics', 'Hair Care', 'Personal Care Devices', 'Supplements', 'Medical Devices'],
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
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of industries. If you need it manufactured in China, we can find the right supplier for it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {categories.map((cat, i) => (
              <div key={cat.name} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      alt={cat.name}
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 id={cat.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{cat.name}</h2>
                  <p id={cat.descId} className="text-slate-600 leading-relaxed mb-6">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            We source many more product types than listed here. Tell us what you need and we will find the right manufacturer.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

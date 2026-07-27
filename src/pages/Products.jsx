import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, connectors, cables, sensors, LED products, smart home devices, and electronic components from Shenzhen and Dongguan factories.',
    items: ['Consumer electronics', 'PCBs & circuit boards', 'Connectors & cables', 'LED lighting & displays', 'Smart home devices', 'Sensors & modules'],
    imgId: 'prod-elec-a1b2c3',
    nameId: 'prod-elec-name',
    descId: 'prod-elec-desc',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Fabrics, garments, sportswear, home textiles, bags, and accessories from factories in Guangdong, Zhejiang, and Jiangsu provinces.',
    items: ['Fabrics & raw textiles', 'Casual & formal garments', 'Sportswear & activewear', 'Home textiles & bedding', 'Bags & luggage', 'Fashion accessories'],
    imgId: 'prod-text-d4e5f6',
    nameId: 'prod-text-name',
    descId: 'prod-text-desc',
  },
  {
    name: 'Home & Garden Products',
    desc: 'Kitchenware, bathroom accessories, furniture, garden tools, decorative items, and household products from Yiwu and surrounding manufacturing areas.',
    items: ['Kitchenware & cookware', 'Bathroom accessories', 'Indoor & outdoor furniture', 'Garden tools & equipment', 'Decorative items & crafts', 'Storage & organization'],
    imgId: 'prod-home-g7h8i9',
    nameId: 'prod-home-name',
    descId: 'prod-home-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Industrial equipment, CNC machines, pumps, valves, motors, and manufacturing machinery from heavy industry hubs in Jiangsu, Shandong, and Liaoning.',
    items: ['CNC & machining equipment', 'Pumps & valves', 'Electric motors & drives', 'Welding & cutting equipment', 'Material handling systems', 'Industrial automation'],
    imgId: 'prod-indus-j1k2l3',
    nameId: 'prod-indus-name',
    descId: 'prod-indus-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, car accessories, motorcycle components, and EV parts from specialized automotive manufacturing zones.',
    items: ['Engine & drivetrain parts', 'Body & exterior parts', 'Interior accessories', 'Lighting & electrical', 'Motorcycle components', 'EV & battery parts'],
    imgId: 'prod-auto-m4n5o6',
    nameId: 'prod-auto-name',
    descId: 'prod-auto-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, flexible packaging, and printing services from specialized packaging factories across China.',
    items: ['Custom boxes & cartons', 'Flexible packaging & bags', 'Labels & stickers', 'Food-grade packaging', 'Display & retail packaging', 'Printing & finishing services'],
    imgId: 'prod-pack-p7q8r9',
    nameId: 'prod-pack-name',
    descId: 'prod-pack-desc',
  },
  {
    name: 'Building Materials & Hardware',
    desc: 'Construction materials, hardware, fasteners, tools, plumbing fixtures, and building supplies from established industrial zones.',
    items: ['Fasteners & hardware', 'Plumbing & sanitary', 'Door & window hardware', 'Power & hand tools', 'Flooring & tiles', 'Structural materials'],
    imgId: 'prod-build-s1t2u3',
    nameId: 'prod-build-name',
    descId: 'prod-build-desc',
  },
  {
    name: 'Health & Beauty Products',
    desc: 'Cosmetics, skincare, personal care, medical devices, health supplements, and beauty tools from GMP-certified factories.',
    items: ['Cosmetics & skincare', 'Personal care products', 'Hair care & styling', 'Beauty tools & devices', 'Health supplements', 'Medical devices & supplies'],
    imgId: 'prod-health-v4w5x6',
    nameId: 'prod-health-name',
    descId: 'prod-health-desc',
  },
  {
    name: 'Toys & Sporting Goods',
    desc: 'Educational toys, outdoor equipment, fitness products, board games, and recreational items from certified toy manufacturers.',
    items: ['Educational toys', 'Outdoor & adventure gear', 'Fitness & gym equipment', 'Board games & puzzles', 'Children\'s toys (EN71/ASTM)', 'Sporting accessories'],
    imgId: 'prod-toys-y7z8a9',
    nameId: 'prod-toys-name',
    descId: 'prod-toys-desc',
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
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="prod-page-title" className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p id="prod-page-subtitle" className="text-lg text-navy-200 max-w-2xl">
            We source across most product categories manufactured in China. Here are the major categories we work with, along with the key manufacturing regions for each.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.nameId}] [prod-page-subtitle] [prod-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.nameId} className="text-lg font-semibold text-navy-900 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-navy-500 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-navy-50 text-navy-600 px-2.5 py-1 rounded text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Key Manufacturing Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-navy-100">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Shenzhen / Dongguan</h3>
              <p className="text-sm text-navy-500">Electronics, hardware, smart devices, and precision manufacturing hub.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Guangzhou / Foshan</h3>
              <p className="text-sm text-navy-500">Furniture, ceramics, textiles, automotive, and general manufacturing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Yiwu / Ningbo</h3>
              <p className="text-sm text-navy-500">Small commodities, home goods, crafts, and daily consumer products.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Shanghai / Suzhou</h3>
              <p className="text-sm text-navy-500">Industrial equipment, machinery, chemicals, and high-tech manufacturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need to Source a Specific Product?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Tell us what you're looking for. Even if it's not listed here, our network covers factories across all major categories.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

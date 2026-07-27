import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED products, and electronic assemblies from Shenzhen and Dongguan manufacturing hubs.',
    imgId: 'cat-electronics-c1d2e3',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    subcategories: ['Consumer Electronics', 'PCBs & Components', 'LED & Lighting', 'Sensors & Modules', 'Smart Home Devices', 'Cables & Connectors'],
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, and home improvement products from Zhejiang and Fujian provinces.',
    imgId: 'cat-home-f4g5h6',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
    subcategories: ['Furniture', 'Kitchenware', 'Home Decor', 'Garden Tools', 'Storage Solutions', 'Home Improvement'],
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, accessories, sportswear, and textile products from Guangdong and Jiangsu textile manufacturing centers.',
    imgId: 'cat-apparel-i7j8k9',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    subcategories: ['Casual Wear', 'Sportswear', 'Fabrics & Textiles', 'Accessories', 'Workwear & Uniforms', 'Home Textiles'],
  },
  {
    name: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC tools, packaging equipment, and manufacturing systems from Jiangsu and Shandong industrial zones.',
    imgId: 'cat-machinery-l1m2n3',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
    subcategories: ['CNC Machines', 'Packaging Equipment', 'Industrial Tools', 'Processing Equipment', 'Automation Systems', '3D Printers'],
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, EV parts, car accessories, and vehicle electronics from Changchun, Shanghai, and Guangzhou auto clusters.',
    imgId: 'cat-auto-o4p5q6',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    subcategories: ['Engine Components', 'EV Parts', 'Body Parts', 'Interior Accessories', 'Lighting & Electronics', 'Brake Systems'],
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing solutions, and packaging materials from across China\'s packaging industry centers.',
    imgId: 'cat-packaging-r7s8t9',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    subcategories: ['Custom Boxes', 'Labels & Stickers', 'Flexible Packaging', 'Bottles & Containers', 'Printing Services', 'Eco-Friendly Packaging'],
  },
  {
    name: 'Health & Personal Care',
    desc: 'Medical devices, health products, personal care items, and wellness products from certified manufacturers.',
    imgId: 'cat-health-u1v2w3',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    subcategories: ['Medical Devices', 'Personal Care', 'Health Supplements', 'Beauty Products', 'Fitness Equipment', 'Wellness Products'],
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing, and building supplies from China\'s major building material production regions.',
    imgId: 'cat-building-x4y5z6',
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
    subcategories: ['Tiles & Flooring', 'Hardware & Fittings', 'Plumbing Supplies', 'Door & Window Systems', 'Insulation Materials', 'Structural Steel'],
  },
  {
    name: 'Sports & Outdoor',
    desc: 'Sporting goods, outdoor equipment, camping gear, and fitness products from Fujian and Zhejiang manufacturing centers.',
    imgId: 'cat-sports-a7b8c9',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    subcategories: ['Sporting Goods', 'Outdoor Gear', 'Camping Equipment', 'Fitness Products', 'Water Sports', 'Cycling Accessories'],
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
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">Products We Source</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sourcing Across Major Product Categories</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            We work with verified manufacturers across China's key industrial regions to source a wide range of products for global buyers.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="group rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow bg-white">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-navy-900 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <span key={sub} className="bg-navy-50 text-navy-700 text-xs px-2 py-1 rounded">{sub}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't Find Your Product Category?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            We source virtually any product made in China. Tell us what you need and we'll find the right supplier for you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline">
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

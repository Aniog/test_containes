import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'PCB assemblies', 'Power banks', 'Smart plugs'],
    hubs: 'Shenzhen, Dongguan',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    desc: 'Wood furniture, metal furniture, upholstered pieces, home décor, and storage solutions.',
    examples: ['Office chairs', 'Dining tables', 'Shelving units', 'Decorative items', 'Storage boxes'],
    hubs: 'Foshan, Guangzhou',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories for fashion and functional markets.',
    examples: ['T-shirts', 'Activewear', 'Uniforms', 'Bags', 'Hats and caps'],
    hubs: 'Guangzhou, Hangzhou',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-g7h8i9',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories.',
    examples: ['Wooden toys', 'Plush toys', 'Baby carriers', 'Ride-on toys', 'Puzzles'],
    hubs: 'Shantou, Yiwu',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-j1k2l3',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial components.',
    examples: ['Power drills', 'Wrenches', 'Screws and bolts', 'Safety equipment', 'Measuring tools'],
    hubs: 'Yongkang, Wenzhou',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    imgId: 'prod-hardware-img-m4n5o6',
  },
  {
    id: 'packaging',
    name: 'Packaging Materials',
    desc: 'Custom packaging, corrugated boxes, bags, labels, and branded packaging solutions.',
    examples: ['Custom boxes', 'Poly bags', 'Foam inserts', 'Paper bags', 'Printed labels'],
    hubs: 'Guangzhou, Dongguan',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-p7q8r9',
  },
  {
    id: 'sporting',
    name: 'Sporting Goods',
    desc: 'Fitness equipment, outdoor gear, sports accessories, and recreational products.',
    examples: ['Resistance bands', 'Yoga mats', 'Camping gear', 'Bicycle accessories', 'Gym equipment'],
    hubs: 'Xiamen, Quanzhou',
    titleId: 'prod-sporting-title',
    descId: 'prod-sporting-desc',
    imgId: 'prod-sporting-img-s1t2u3',
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics & Personal Care',
    desc: 'Skincare, haircare, beauty tools, and personal care products with OEM/ODM options.',
    examples: ['Face masks', 'Hair dryers', 'Makeup brushes', 'Skincare serums', 'Nail care tools'],
    hubs: 'Guangzhou, Shanghai',
    titleId: 'prod-cosmetics-title',
    descId: 'prod-cosmetics-desc',
    imgId: 'prod-cosmetics-img-v4w5x6',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipment',
    desc: 'Machinery, industrial components, automation equipment, and manufacturing supplies.',
    examples: ['CNC parts', 'Conveyor components', 'Pumps and valves', 'Safety gear', 'Sensors'],
    hubs: 'Suzhou, Wuxi',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-y7z8a9',
  },
  {
    id: 'food-packaging',
    name: 'Food & Beverage Packaging',
    desc: 'Food-grade packaging, containers, bottles, and labeling for food and beverage brands.',
    examples: ['Glass bottles', 'PET containers', 'Tin cans', 'Pouches', 'Food-grade bags'],
    hubs: 'Guangzhou, Zhejiang',
    titleId: 'prod-food-title',
    descId: 'prod-food-desc',
    imgId: 'prod-food-img-b2c3d4',
  },
];

const Products = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? categories : categories.filter((c) => c.id === active);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              Products We Source from China
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source across 30+ product categories from China's major manufacturing hubs. If you don't see your product, contact us — we likely cover it.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-slate-bg border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === 'all' ? 'bg-navy text-white' : 'bg-white border border-gray-200 text-text-main hover:bg-navy hover:text-white'
              }`}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c.id ? 'bg-navy text-white' : 'bg-white border border-gray-200 text-text-main hover:bg-navy hover:text-white'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-bg overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="font-bold text-navy text-lg mb-2">{cat.name}</h2>
                  <p id={cat.descId} className="text-text-muted text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Examples</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="bg-slate-bg text-navy text-xs px-2.5 py-1 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <span className="font-medium">Main hubs:</span>
                    <span>{cat.hubs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Don't See Your Product?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            We source a wide range of products beyond the categories listed here. Contact us with your product details and we'll confirm whether we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-china-dark transition-colors"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Tech',
    imgId: 'prod-img-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, smart devices, LED lighting, cables, chargers, PCBs, and electronic components.',
    examples: ['Bluetooth speakers', 'LED lighting', 'Smart home devices', 'Power banks', 'PCB assemblies'],
    hubs: 'Shenzhen, Dongguan',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home',
    imgId: 'prod-img-furniture-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Indoor and outdoor furniture, home décor, storage solutions, and soft furnishings.',
    examples: ['Office chairs', 'Dining tables', 'Outdoor furniture', 'Storage units', 'Decorative items'],
    hubs: 'Foshan, Guangzhou',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    imgId: 'prod-img-apparel-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    desc: 'Clothing, sportswear, workwear, accessories, and technical textiles for retail and wholesale.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear', 'Bags & accessories', 'Fabric rolls'],
    hubs: 'Guangzhou, Hangzhou',
  },
  {
    id: 'machinery',
    name: 'Machinery & Equipment',
    imgId: 'prod-img-machinery-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial machinery, tools, agricultural equipment, and manufacturing equipment.',
    examples: ['CNC machines', 'Hydraulic tools', 'Agricultural machinery', 'Packaging equipment', 'Power tools'],
    hubs: 'Shandong, Jiangsu',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    imgId: 'prod-img-packaging-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and printed materials.',
    examples: ['Custom boxes', 'Paper bags', 'Product labels', 'Hang tags', 'Poly mailers'],
    hubs: 'Guangdong, Zhejiang',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    imgId: 'prod-img-toys-p7q8r9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with safety certification support.',
    examples: ['Plush toys', 'Educational toys', 'Baby strollers', 'Ride-on toys', 'Puzzles'],
    hubs: 'Shantou, Dongguan',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    imgId: 'prod-img-health-s1t2u3',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care products, cosmetics, fitness equipment, and wellness accessories.',
    examples: ['Skincare products', 'Fitness equipment', 'Massage devices', 'Hair accessories', 'Supplements packaging'],
    hubs: 'Guangzhou, Shanghai',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    imgId: 'prod-img-auto-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Automotive parts, accessories, tools, and aftermarket components for passenger and commercial vehicles.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Tires & wheels', 'Diagnostic tools'],
    hubs: 'Guangzhou, Wenzhou',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    imgId: 'prod-img-sports-y7z8a9',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Camping gear', 'Gym equipment', 'Cycling accessories', 'Water sports gear', 'Team sports equipment'],
    hubs: 'Xiamen, Ningbo',
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Products We Source</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Source Across All Major Product Categories
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              From electronics to furniture, apparel to machinery — our team has experience sourcing a wide range of products from China's key manufacturing regions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="What Can We Source for You?"
            subtitle="Browse our main product categories. Don't see yours? Contact us — we source across many industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="font-bold text-text-dark text-lg mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-text-muted text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cat.examples.slice(0, 3).map((ex) => (
                      <span key={ex} className="bg-light-blue text-primary text-xs px-2 py-1 rounded-md font-medium">{ex}</span>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted">
                    <span className="font-medium">Key hubs:</span> {cat.hubs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Don't See Your Product?</h2>
          <p className="text-text-muted text-lg mb-8">
            We source across many industries. If your product is manufactured in China, we can likely help. Contact us with your requirements.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Submit a Sourcing Inquiry
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

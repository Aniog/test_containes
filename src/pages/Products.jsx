import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Solid wood and engineered wood furniture, upholstered pieces, home accessories, and decorative items.',
    examples: ['Dining tables', 'Sofas', 'Wardrobes', 'Wall art', 'Candles & holders'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Clothing & Textiles',
    desc: 'Garments, activewear, workwear, uniforms, fabrics, and textile accessories for retail and wholesale.',
    examples: ['T-shirts & hoodies', 'Activewear', 'Workwear uniforms', 'Bags & accessories', 'Fabric rolls'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, safety equipment, and manufacturing machinery.',
    examples: ['Power tools', 'Safety equipment', 'Hydraulic components', 'Conveyor systems', 'Welding equipment'],
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories with safety certifications.',
    examples: ['Educational toys', 'Ride-on vehicles', 'Baby monitors', 'Strollers', 'Plush toys'],
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness devices, medical supplies, and health accessories.',
    examples: ['Skincare products', 'Massage devices', 'Fitness equipment', 'Medical gloves', 'Supplements packaging'],
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sporting goods, outdoor gear, camping equipment, fitness accessories, and recreational products.',
    examples: ['Yoga mats', 'Camping tents', 'Bicycle accessories', 'Gym equipment', 'Water bottles'],
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, bags, and branded packaging solutions.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Hang tags', 'Mailer boxes'],
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, replacement parts, and vehicle care products.',
    examples: ['Car seat covers', 'LED headlights', 'Brake pads', 'Car chargers', 'Dash cameras'],
    imgId: 'prod-auto-img-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Products We Source from China
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source across a wide range of product categories. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">What We Source</p>
            <h2 className="section-title mb-4">Product Categories</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Click any category to learn more about what we source and the types of factories we work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-xl overflow-hidden border cursor-pointer transition-all duration-200 ${
                  active === cat.id
                    ? 'border-navy-800 shadow-card-hover'
                    : 'border-gray-200 hover:border-navy-200 hover:shadow-card'
                }`}
                onClick={() => setActive(active === cat.id ? null : cat.id)}
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
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
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-navy-800 font-bold text-base mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  {active === cat.id && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Examples</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.examples.map((ex) => (
                          <span key={ex} className="bg-navy-50 text-navy-800 text-xs px-2.5 py-1 rounded-full font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-eyebrow mb-2">Don't See Your Product?</p>
            <h2 className="section-title mb-4">We Source Almost Anything Made in China</h2>
            <p className="section-subtitle mb-8">
              If your product is manufactured in China, we can likely help. Contact us with your product details and we will assess feasibility.
            </p>
            <Link to="/contact" className="btn-gold">
              Submit a Custom Inquiry <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

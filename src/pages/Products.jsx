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
    examples: ['Wireless earbuds', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    imgId: 'prod-electronics-img-a1b2',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Sofas, beds, tables, chairs, shelving, decorative items, and home accessories from Guangdong and Zhejiang.',
    examples: ['Upholstered sofas', 'Dining tables', 'Bedroom sets', 'Wall art', 'Storage solutions'],
    imgId: 'prod-furniture-img-c3d4',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories from established textile hubs in Guangzhou and Hangzhou.',
    examples: ['T-shirts and hoodies', 'Activewear', 'Uniforms', 'Bags and accessories', 'Fabrics by the meter'],
    imgId: 'prod-apparel-img-e5f6',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and machinery components from manufacturing clusters in Jiangsu and Shandong.',
    examples: ['CNC machines', 'Hydraulic tools', 'Conveyor systems', 'Pumps and motors', 'Safety equipment'],
    imgId: 'prod-machinery-img-g7h8',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories from Guangdong\'s toy manufacturing belt.',
    examples: ['Educational toys', 'Plush toys', 'Baby strollers', 'Ride-on vehicles', 'Outdoor play equipment'],
    imgId: 'prod-toys-img-i9j0',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, supplements, medical devices, and wellness products.',
    examples: ['Skincare products', 'Hair tools', 'Massage devices', 'Fitness equipment', 'OTC health products'],
    imgId: 'prod-health-img-k1l2',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Camping tents', 'Gym equipment', 'Cycling accessories', 'Water sports gear', 'Team sports equipment'],
    imgId: 'prod-sports-img-m3n4',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, and branded packaging solutions.',
    examples: ['Custom boxes', 'Paper bags', 'Labels and stickers', 'Display stands', 'Promotional materials'],
    imgId: 'prod-packaging-img-o5p6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts',
    desc: 'Automotive components, accessories, and aftermarket parts from China\'s established auto parts industry.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Tires and wheels', 'Interior accessories'],
    imgId: 'prod-auto-img-q7r8',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">Products We Source</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We source across most consumer and industrial product categories. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-brand-light">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 id={cat.titleId} className="text-brand-navy font-bold text-lg mb-2">{cat.name}</h2>
                  <p id={cat.descId} className="text-brand-muted text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-brand-light text-brand-blue text-xs px-2.5 py-1 rounded-full font-medium">
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

      {/* Not listed */}
      <section className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-brand-muted text-lg mb-8">
            We source a wide range of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded font-bold hover:bg-amber-600 transition-colors"
          >
            Submit Your Sourcing Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

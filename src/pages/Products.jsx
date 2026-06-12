import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic accessories.',
    examples: ['LED bulbs and strips', 'Power banks and chargers', 'Smart home devices', 'PCBs and components', 'Cables and connectors'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products from Guangdong and Zhejiang factories.',
    examples: ['Office chairs and desks', 'Storage shelving', 'Kitchen utensils', 'Decorative items', 'Outdoor furniture'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, workwear, fabrics, and fashion accessories from China\'s major textile manufacturing regions.',
    examples: ['T-shirts and hoodies', 'Sports and activewear', 'Corporate uniforms', 'Bags and accessories', 'Fabrics and materials'],
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, hand tools, power tools, spare parts, and industrial automation components.',
    examples: ['Power tools', 'Hand tools and hardware', 'Spare parts', 'Pneumatic equipment', 'Safety equipment'],
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, promotional products, and branded merchandise for retail and e-commerce.',
    examples: ['Custom printed boxes', 'Paper bags and pouches', 'Labels and stickers', 'Promotional merchandise', 'Display stands'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Plastic toys, educational products, baby gear, and children\'s accessories with CE and EN71 certification support.',
    examples: ['Plastic and wooden toys', 'Educational games', 'Baby clothing and gear', 'Outdoor play equipment', 'Stuffed animals'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness accessories.',
    examples: ['Skincare and cosmetics', 'Fitness equipment', 'Medical devices', 'Supplements packaging', 'Personal care tools'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts & Accessories',
    desc: 'Car accessories, replacement parts, tools, and aftermarket components from China\'s automotive supply chain.',
    examples: ['Car accessories', 'Replacement parts', 'Tyres and wheels', 'Lighting and electronics', 'Workshop tools'],
    titleId: 'prod-automotive-title',
    descId: 'prod-automotive-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories for retail and wholesale buyers.',
    examples: ['Camping and hiking gear', 'Gym equipment', 'Team sports gear', 'Water sports products', 'Cycling accessories'],
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Products We Source</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            We have hands-on experience sourcing across a wide range of product categories from China's key manufacturing regions.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48 bg-neutral-100 overflow-hidden">
                  <img
                    data-strk-img-id={`prod-${cat.id}-img-7d3f`}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 id={cat.titleId} className="text-neutral-900 font-bold text-base mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <ul className="flex flex-col gap-1">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="text-xs text-neutral-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-blue rounded-full flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-navy rounded-2xl p-8 md:p-12 text-center">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Don't See Your Product?</p>
            <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
              We Source Almost Any Product Made in China
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mb-6 leading-relaxed">
              If your product is manufactured in China, we can source it. Contact us with your requirements and we will assess feasibility at no charge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-white font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Submit a Sourcing Request
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

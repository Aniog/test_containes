import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const categories = [
  {
    id: 'cat-electronics',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    emoji: '⚡',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB accessories', 'Smart home devices', 'PCB assemblies'],
  },
  {
    id: 'cat-furniture',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    emoji: '🪑',
    title: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, home décor, kitchenware, storage solutions, and soft furnishings.',
    examples: ['Office chairs', 'Dining tables', 'Storage shelves', 'Decorative items', 'Bedding & textiles'],
  },
  {
    id: 'cat-apparel',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    emoji: '👕',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fashion accessories, fabrics, and private-label garment manufacturing.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Fashion accessories', 'Custom fabrics'],
  },
  {
    id: 'cat-industrial',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    emoji: '⚙️',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components for manufacturing and construction.',
    examples: ['Power tools', 'Safety equipment', 'Hydraulic components', 'Fasteners & hardware', 'Pumps & valves'],
  },
  {
    id: 'cat-packaging',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    emoji: '📦',
    title: 'Packaging & Labels',
    desc: 'Custom packaging, corrugated boxes, plastic packaging, labels, and branded retail packaging solutions.',
    examples: ['Custom printed boxes', 'Poly bags', 'Hang tags & labels', 'Foam inserts', 'Gift packaging'],
  },
  {
    id: 'cat-toys',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    emoji: '🧸',
    title: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with EN71, ASTM, and CPSC compliance support.',
    examples: ['Plush toys', 'Educational toys', 'Baby furniture', 'Outdoor play equipment', 'Board games'],
  },
  {
    id: 'cat-health',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    emoji: '💊',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness products.',
    examples: ['Skincare products', 'Fitness equipment', 'Medical supplies', 'Supplements packaging', 'Beauty tools'],
  },
  {
    id: 'cat-sports',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    emoji: '🏕️',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, fitness accessories, and recreational items.',
    examples: ['Camping gear', 'Gym equipment', 'Cycling accessories', 'Water sports gear', 'Team sports equipment'],
  },
  {
    id: 'cat-auto',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    emoji: '🔧',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle maintenance products.',
    examples: ['Car accessories', 'Replacement parts', 'Motorcycle gear', 'Truck components', 'EV accessories'],
  },
  {
    id: 'cat-building',
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
    emoji: '🏗️',
    title: 'Building Materials',
    desc: 'Construction materials, flooring, tiles, hardware, plumbing, and building components.',
    examples: ['Ceramic tiles', 'Flooring materials', 'Plumbing fittings', 'Door hardware', 'Insulation materials'],
  },
  {
    id: 'cat-food',
    titleId: 'cat-food-title',
    descId: 'cat-food-desc',
    emoji: '🌾',
    title: 'Food & Agriculture',
    desc: 'Food products, agricultural goods, food processing equipment, and food packaging with compliance support.',
    examples: ['Dried foods', 'Spices & seasonings', 'Food processing equipment', 'Agricultural tools', 'Food packaging'],
  },
  {
    id: 'cat-oem',
    titleId: 'cat-oem-title',
    descId: 'cat-oem-desc',
    emoji: '🏭',
    title: 'Custom OEM / ODM',
    desc: 'Custom product development, private label manufacturing, and OEM/ODM projects across all categories.',
    examples: ['Product design support', 'Prototype development', 'Private label branding', 'Custom molds', 'Mass production'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We have experience sourcing across a wide range of product categories from verified Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Source"
            title="12 Major Product Categories"
            subtitle="Don't see your product? Contact us — if it's made in China, we can likely source it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`${cat.id}-img-prod`}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{cat.emoji}</span>
                    <h3 id={cat.titleId} className="font-semibold text-slate-900">{cat.title}</h3>
                  </div>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.slice(0, 3).map((ex) => (
                      <span key={ex} className="text-xs bg-navy-50 text-navy-700 px-2 py-0.5 rounded-full">
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

      <CTABanner />
    </div>
  );
}

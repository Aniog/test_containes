import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-electronics',
    titleId: 'cat-title-electronics',
    descId: 'cat-desc-electronics',
    imgId: 'cat-img-electronics-a1f2e3',
    name: 'Electronics & Components',
    emoji: '⚡',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting', 'PCB assemblies', 'Cables & connectors', 'Smart home devices', 'Power banks', 'Surveillance cameras'],
  },
  {
    id: 'cat-furniture',
    titleId: 'cat-title-furniture',
    descId: 'cat-desc-furniture',
    imgId: 'cat-img-furniture-b4c5d6',
    name: 'Furniture & Home Décor',
    emoji: '🪑',
    desc: 'Office furniture, bedroom sets, outdoor furniture, decorative items, and custom upholstered pieces.',
    examples: ['Office chairs', 'Dining sets', 'Outdoor furniture', 'Decorative mirrors', 'Shelving units', 'Custom upholstery'],
  },
  {
    id: 'cat-apparel',
    titleId: 'cat-title-apparel',
    descId: 'cat-desc-apparel',
    imgId: 'cat-img-apparel-e7f8g9',
    name: 'Apparel & Textiles',
    emoji: '👕',
    desc: 'Clothing, sportswear, workwear, uniforms, bags, and textile accessories for private label and wholesale.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & backpacks', 'Hats & caps', 'Socks & underwear'],
  },
  {
    id: 'cat-hardware',
    titleId: 'cat-title-hardware',
    descId: 'cat-desc-hardware',
    imgId: 'cat-img-hardware-h1i2j3',
    name: 'Hardware & Tools',
    emoji: '🔧',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial components.',
    examples: ['Hand tools', 'Power tools', 'Fasteners & bolts', 'Door hardware', 'Safety equipment', 'Industrial parts'],
  },
  {
    id: 'cat-packaging',
    titleId: 'cat-title-packaging',
    descId: 'cat-desc-packaging',
    imgId: 'cat-img-packaging-k4l5m6',
    name: 'Packaging & Printing',
    emoji: '📦',
    desc: 'Custom packaging boxes, bags, labels, promotional materials, and branded packaging solutions.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional items', 'Gift packaging', 'Retail displays'],
  },
  {
    id: 'cat-homegoods',
    titleId: 'cat-title-homegoods',
    descId: 'cat-desc-homegoods',
    imgId: 'cat-img-homegoods-n7o8p9',
    name: 'Home & Kitchen',
    emoji: '🏠',
    desc: 'Kitchenware, cookware, storage solutions, cleaning products, and household appliances.',
    examples: ['Cookware sets', 'Storage containers', 'Kitchen gadgets', 'Cleaning tools', 'Small appliances', 'Bathroom accessories'],
  },
  {
    id: 'cat-sports',
    titleId: 'cat-title-sports',
    descId: 'cat-desc-sports',
    imgId: 'cat-img-sports-q1r2s3',
    name: 'Sports & Outdoor',
    emoji: '🏋️',
    desc: 'Fitness equipment, outdoor gear, camping products, sports accessories, and protective gear.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports gear', 'Protective equipment'],
  },
  {
    id: 'cat-beauty',
    titleId: 'cat-title-beauty',
    descId: 'cat-desc-beauty',
    imgId: 'cat-img-beauty-t4u5v6',
    name: 'Beauty & Personal Care',
    emoji: '💄',
    desc: 'Cosmetics, skincare tools, hair care accessories, and personal care products for private label.',
    examples: ['Skincare tools', 'Hair accessories', 'Makeup brushes', 'Nail products', 'Massage devices', 'Grooming tools'],
  },
  {
    id: 'cat-toys',
    titleId: 'cat-title-toys',
    descId: 'cat-desc-toys',
    imgId: 'cat-img-toys-w7x8y9',
    name: 'Toys & Baby Products',
    emoji: '🧸',
    desc: 'Educational toys, plush toys, baby gear, and children\'s products with safety certification support.',
    examples: ['Educational toys', 'Plush toys', 'Baby furniture', 'Outdoor play', 'Board games', 'STEM kits'],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products We Source from China
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We have active supplier networks across all major manufacturing categories.
              If your product is not listed, contact us — we can likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelected(selected?.id === cat.id ? null : cat)}
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h2 id={cat.titleId} className="font-bold text-gray-900">{cat.name}</h2>
                  </div>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  {selected?.id === cat.id && (
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Examples</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.examples.map((ex) => (
                          <span key={ex} className="text-xs bg-blue-50 text-navy px-2.5 py-1 rounded-full font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button className="text-sm font-medium text-navy hover:text-navy-dark mt-3 flex items-center gap-1">
                    {selected?.id === cat.id ? 'Show less' : 'See examples'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not listed */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't See Your Product Category?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our sourcing network covers most manufacturing categories in China.
              Send us your product brief and we will assess feasibility within 48 hours.
            </p>
            <Link
              to="/contact"
              className="bg-china-red hover:bg-china-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Submit a Sourcing Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Quality Standards</p>
            <h2 className="section-heading">What We Check for Every Product</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Compliance with your product specifications',
              'Material quality and consistency',
              'Workmanship and finish standards',
              'Packaging integrity and labeling accuracy',
              'Required certifications (CE, RoHS, FDA, etc.)',
              'Correct quantities and SKU accuracy',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

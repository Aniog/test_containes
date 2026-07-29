import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Tech',
    desc: 'Consumer electronics, smart home devices, Bluetooth accessories, LED lighting, power banks, and electronic components.',
    examples: ['Bluetooth speakers & headphones', 'Smart home devices', 'LED lighting products', 'Power banks & chargers', 'Electronic components'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home décor accessories, storage solutions, and interior design products.',
    examples: ['Office & home furniture', 'Outdoor & garden furniture', 'Home décor accessories', 'Storage & organization', 'Lighting fixtures'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fashion accessories, and textile products for retail and wholesale buyers.',
    examples: ['Casual & fashion clothing', 'Sportswear & activewear', 'Workwear & uniforms', 'Bags & accessories', 'Fabric & textiles'],
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-g7h8i9',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Industrial equipment, tools, hardware, safety products, and machinery for manufacturing and construction.',
    examples: ['Power tools & hand tools', 'Industrial machinery', 'Safety equipment', 'Hardware & fasteners', 'Construction materials'],
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-j1k2l3',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    examples: ['Educational & STEM toys', 'Outdoor play equipment', 'Baby care products', 'Plush & stuffed toys', 'Board games & puzzles'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-m4n5o6',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Personal care products, beauty tools, wellness accessories, and health monitoring devices.',
    examples: ['Beauty tools & devices', 'Personal care products', 'Wellness accessories', 'Health monitoring devices', 'Cosmetic packaging'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-p7q8r9',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, fitness gear, outdoor recreation products, and camping accessories.',
    examples: ['Fitness equipment', 'Outdoor & camping gear', 'Water sports products', 'Cycling accessories', 'Team sports equipment'],
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, and promotional merchandise.',
    examples: ['Custom boxes & packaging', 'Labels & stickers', 'Promotional merchandise', 'Paper bags & pouches', 'Display stands'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-v4w5x6',
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
      {/* Page Header */}
      <section className="bg-[#1A2332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products We Source from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of product categories. If it's manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
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

      {/* Not Listed */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We source a wide variety of products beyond the categories listed above. If it's made in China, we can likely help. Contact us to discuss your specific product requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

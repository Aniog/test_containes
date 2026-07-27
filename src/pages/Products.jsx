import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
    description: 'Consumer electronics, components, LED lighting, smart home devices, and industrial equipment.',
    examples: ['LED lighting', 'Smart home devices', 'PCB assemblies', 'Power tools', 'Cables & connectors'],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
    description: 'Indoor and outdoor furniture, home décor, storage solutions, and kitchenware.',
    examples: ['Office furniture', 'Outdoor furniture', 'Home décor', 'Storage & shelving', 'Kitchenware'],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-g7h8i9',
    description: 'Clothing, sportswear, workwear, bags, and textile accessories for retail and wholesale.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & backpacks', 'Hats & accessories'],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-j1k2l3',
    description: 'Custom printed boxes, bags, labels, and sustainable packaging solutions for brands.',
    examples: ['Custom printed boxes', 'Paper bags', 'Plastic packaging', 'Labels & stickers', 'Eco-friendly packaging'],
  },
  {
    id: 'hardware',
    label: 'Hardware & Tools',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    imgId: 'prod-hardware-img-m4n5o6',
    description: 'Hand tools, power tools, fasteners, construction hardware, and industrial components.',
    examples: ['Hand tools', 'Power tools', 'Fasteners & fixings', 'Safety equipment', 'Industrial components'],
  },
  {
    id: 'beauty',
    label: 'Beauty & Personal Care',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
    imgId: 'prod-beauty-img-p7q8r9',
    description: 'Cosmetics, skincare, hair care, and personal care products with OEM/ODM options.',
    examples: ['Skincare products', 'Hair care', 'Cosmetics', 'Personal care tools', 'OEM formulations'],
  },
  {
    id: 'toys',
    label: 'Toys & Baby Products',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-s1t2u3',
    description: 'Toys, educational products, baby gear, and children\'s accessories with safety certification support.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Baby gear', 'Plush toys', 'Board games'],
  },
  {
    id: 'sports',
    label: 'Sports & Outdoors',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-v4w5x6',
    description: 'Fitness equipment, outdoor gear, camping products, and sports accessories.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCat = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of product categories, working with verified
              manufacturers in China's major production hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-navy mb-4">Browse by Category</h2>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === cat.id
                        ? 'bg-navy text-white'
                        : 'text-slate-600 hover:bg-white hover:text-navy'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            {activeCat && (
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <div className="h-64 bg-slate-100">
                    <img
                      alt={activeCat.label}
                      data-strk-img-id={activeCat.imgId}
                      data-strk-img={`[${activeCat.descId}] [${activeCat.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 id={activeCat.titleId} className="text-2xl font-bold text-navy mb-3">{activeCat.label}</h2>
                    <p id={activeCat.descId} className="text-slate-600 leading-relaxed mb-6">{activeCat.description}</p>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">Common Products</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {activeCat.examples.map((ex) => (
                        <span key={ex} className="bg-surface text-navy text-sm font-medium px-3 py-1.5 rounded-full border border-slate-200">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="bg-china-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      Source This Product <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">All Product Categories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't see your product? We source across many more categories. Contact us to discuss your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-surface hover:bg-navy hover:text-white text-navy border border-slate-200 rounded-xl p-5 text-center font-semibold text-sm transition-colors group"
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="bg-navy hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Inquire About Your Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

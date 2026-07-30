import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['Wireless earbuds', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Solid wood and engineered wood furniture, upholstered pieces, home accessories, and decorative items.',
    examples: ['Dining sets', 'Office chairs', 'Bed frames', 'Wall art', 'Storage solutions'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, activewear, workwear, accessories, and home textiles from certified fabric suppliers.',
    examples: ['Activewear sets', 'Corporate uniforms', 'Bags and accessories', 'Bed linen', 'Towels'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and machinery for manufacturing and construction sectors.',
    examples: ['CNC machines', 'Power tools', 'Hydraulic equipment', 'Safety gear', 'Fasteners'],
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
    imgId: 'cat-machinery-img-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with EN71 and ASTM compliance support.',
    examples: ['Educational toys', 'Plush toys', 'Baby strollers', 'Wooden puzzles', 'Outdoor play equipment'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, wellness devices, cosmetics packaging, and health equipment.',
    examples: ['Massage devices', 'Cosmetic packaging', 'Fitness equipment', 'Medical supplies', 'Skincare tools'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-p7q8r9',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports gear', 'Team sports equipment'],
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, and promotional items.',
    examples: ['Custom boxes', 'Paper bags', 'Labels and stickers', 'Promotional merchandise', 'Display stands'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-v4w5x6',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, and aftermarket parts for global distributors.',
    examples: ['Car seat covers', 'LED headlights', 'Brake pads', 'Car electronics', 'Tires and wheels'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-y7z8a9',
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
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across a wide range of product categories. If your product is manufactured in China, we can help you find the right supplier and manage the process.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse by Category"
            title="What Can We Source for You?"
            subtitle="Select a category to learn more about the products we source and the suppliers we work with."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-bodytext border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {activeCategory.name}
                  </span>
                  <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-darktext mt-2 mb-4">
                    {activeCategory.name}
                  </h2>
                  <p id={activeCategory.descId} className="text-bodytext leading-relaxed mb-6">
                    {activeCategory.desc}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-darktext text-sm mb-3">Common Products We Source:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.examples.map((ex) => (
                        <span key={ex} className="bg-lightbg text-bodytext text-xs px-3 py-1.5 rounded-full border border-border">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a93226] transition-colors text-sm"
                  >
                    Source This Product Category <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="aspect-auto min-h-[300px] lg:min-h-0">
                  <img
                    data-strk-img-id={activeCategory.imgId}
                    data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Categories"
            title="Full Range of Sourcing Categories"
            subtitle="We have experience sourcing across these product categories and more."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left bg-lightbg rounded-xl border border-border p-6 hover:border-primary hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-darktext mb-2">{cat.name}</h3>
                <p className="text-bodytext text-sm leading-relaxed line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

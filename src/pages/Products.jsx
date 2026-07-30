import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED Lighting', 'Smart Home Devices', 'Cables & Chargers', 'PCB Assemblies', 'Surveillance Cameras'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Office furniture, home furniture, decorative items, storage solutions, and soft furnishings.',
    examples: ['Office Chairs', 'Wooden Tables', 'Storage Shelves', 'Decorative Items', 'Bedding & Textiles'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'OEM and private label clothing, sportswear, workwear, accessories, and fabric sourcing.',
    examples: ['T-Shirts & Hoodies', 'Sportswear', 'Workwear & Uniforms', 'Bags & Accessories', 'Fabric & Yarn'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, power tools, agricultural machinery, and manufacturing components.',
    examples: ['Power Tools', 'CNC Machines', 'Agricultural Equipment', 'Pumps & Motors', 'Safety Equipment'],
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    examples: ['Educational Toys', 'Outdoor Play Sets', 'Baby Care Items', 'Stuffed Animals', 'Board Games'],
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness products.',
    examples: ['Skincare Products', 'Fitness Equipment', 'Medical Devices', 'Supplements Packaging', 'Beauty Tools'],
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, cycling accessories, and fitness items.',
    examples: ['Camping Gear', 'Cycling Accessories', 'Gym Equipment', 'Water Sports', 'Team Sports Gear'],
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, bags, and promotional items.',
    examples: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Promotional Items', 'Display Stands'],
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle care products.',
    examples: ['Car Accessories', 'Motorcycle Parts', 'Lighting Systems', 'Filters & Fluids', 'Tires & Wheels'],
    imgId: 'prod-auto-img-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
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

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories from verified Chinese manufacturers. If your product isn't listed, contact us — we likely source it.
          </p>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse Categories"
            title="Explore Our Sourcing Categories"
            subtitle="Select a category to learn more about the products we source and our experience in that sector."
          />

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActive(cat.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-border last:border-0 transition-colors ${
                      active === cat.id
                        ? 'bg-primary text-white'
                        : 'text-darktext hover:bg-lightbg'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {activeCategory && (
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      data-strk-img-id={activeCategory.imgId}
                      data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={activeCategory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 id={activeCategory.titleId} className="text-2xl font-bold text-primary mb-3">{activeCategory.name}</h2>
                    <p id={activeCategory.descId} className="text-muted leading-relaxed mb-5">{activeCategory.desc}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-3">Common Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.examples.map((ex) => (
                          <span key={ex} className="bg-lightbg text-primary text-sm px-3 py-1.5 rounded-full border border-border font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <CTAButton size="sm">Source This Category</CTAButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Categories"
            title="Full Category Overview"
            subtitle="A quick reference of all product categories we actively source from China."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActive(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all bg-lightbg"
              >
                <h3 className="font-semibold text-darktext mb-1.5">{cat.name}</h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-red-100 mb-8">We source a wide variety of products beyond the categories listed. Contact us with your requirements and we'll let you know if we can help.</p>
          <CTAButton variant="secondary" size="lg">Submit a Custom Inquiry</CTAButton>
        </div>
      </section>
    </div>
  );
}

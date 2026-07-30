import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { Package } from 'lucide-react';

const categories = [
  {
    id: 'cat-electronics',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'prod-img-electronics-a1b2c3',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting', 'PCB assemblies', 'Smart home devices', 'Cables & chargers', 'Consumer electronics'],
  },
  {
    id: 'cat-furniture',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'prod-img-furniture-d4e5f6',
    title: 'Furniture & Home Décor',
    desc: 'Office furniture, bedroom sets, sofas, decorative items, kitchenware, and home accessories.',
    examples: ['Office furniture', 'Bedroom sets', 'Decorative items', 'Kitchenware', 'Storage solutions'],
  },
  {
    id: 'cat-apparel',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'prod-img-apparel-g7h8i9',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, bags, and accessories for retail and wholesale buyers.',
    examples: ['Sportswear', 'Workwear & uniforms', 'Fashion apparel', 'Bags & accessories', 'Technical fabrics'],
  },
  {
    id: 'cat-industrial',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'prod-img-industrial-j1k2l3',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components for B2B buyers.',
    examples: ['Power tools', 'Safety equipment', 'Hardware & fasteners', 'Machinery parts', 'Industrial supplies'],
  },
  {
    id: 'cat-toys',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'prod-img-toys-m4n5o6',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    examples: ['Educational toys', 'Outdoor play sets', 'Baby care items', 'Plush toys', 'Board games'],
  },
  {
    id: 'cat-packaging',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'prod-img-packaging-p7q8r9',
    title: 'Packaging Materials',
    desc: 'Custom printed boxes, bags, labels, protective packaging, and eco-friendly packaging solutions.',
    examples: ['Custom printed boxes', 'Poly bags', 'Labels & stickers', 'Foam inserts', 'Eco packaging'],
  },
  {
    id: 'cat-auto',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'prod-img-auto-s1t2u3',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, car accessories, tools, and aftermarket components for automotive distributors.',
    examples: ['Replacement parts', 'Car accessories', 'Lighting upgrades', 'Interior accessories', 'Tools & equipment'],
  },
  {
    id: 'cat-health',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'prod-img-health-v4w5x6',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness items, medical devices, and beauty accessories.',
    examples: ['Skincare products', 'Beauty tools', 'Wellness devices', 'Personal care', 'Medical accessories'],
  },
  {
    id: 'cat-sports',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'prod-img-sports-y7z8a9',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sporting goods, and activewear.',
    examples: ['Fitness equipment', 'Camping gear', 'Outdoor furniture', 'Sporting goods', 'Activewear'],
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source from China</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We have hands-on experience sourcing across a wide range of industries. If your product is manufactured in China, we can source it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Source"
            title="Browse by Category"
            subtitle="From consumer goods to industrial equipment, our sourcing team covers all major manufacturing sectors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="font-bold text-gray-900 text-lg mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-navy-50 text-navy text-xs font-medium px-2.5 py-1 rounded-full">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-12 h-12 text-navy mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Don't See Your Product?</h2>
          <p className="text-gray-600 mb-8">
            If it's manufactured in China, we can likely source it. Contact us with your product details and we'll assess feasibility at no charge.
          </p>
          <CTAButton to="/contact" variant="primary">Discuss Your Product</CTAButton>
        </div>
      </section>
    </div>
  );
}

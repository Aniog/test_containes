import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, LED lighting, cables, batteries, and electronic components from certified manufacturers.',
    imgId: 'prod-img-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    examples: ['PCBs & circuit boards', 'LED lighting', 'Consumer electronics', 'Cables & connectors', 'Batteries & chargers'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions from Guangdong and Zhejiang factories.',
    imgId: 'prod-img-furniture-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    examples: ['Living room furniture', 'Office furniture', 'Outdoor furniture', 'Home accessories', 'Storage & organization'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories from compliant garment factories with social audit capabilities.',
    imgId: 'prod-img-apparel-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    examples: ['Casual & fashion wear', 'Sportswear & activewear', 'Workwear & uniforms', 'Fabrics & textiles', 'Bags & accessories'],
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components from verified manufacturers with export experience.',
    imgId: 'prod-img-industrial-j1k2l3',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    examples: ['Power tools', 'Hand tools & hardware', 'Safety equipment', 'Machinery parts', 'Industrial fasteners'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Toys, games, baby gear, and children\'s products from factories with EN71, ASTM, and CPSC compliance capabilities.',
    imgId: 'prod-img-toys-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    examples: ['Educational toys', 'Outdoor play equipment', 'Baby gear & accessories', 'Board games', 'Plush & stuffed toys'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Gear',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting goods from specialized manufacturers.',
    imgId: 'prod-img-sports-p7q8r9',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    examples: ['Fitness equipment', 'Camping & hiking gear', 'Water sports products', 'Team sports equipment', 'Yoga & wellness'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Labels',
    desc: 'Custom packaging, printed boxes, labels, bags, and display materials from packaging specialists.',
    imgId: 'prod-img-packaging-s1t2u3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    examples: ['Custom printed boxes', 'Poly bags & mailers', 'Labels & stickers', 'Display stands', 'Eco-friendly packaging'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, and replacement parts from manufacturers with IATF and ISO/TS certifications.',
    imgId: 'prod-img-auto-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    examples: ['Car accessories', 'Replacement parts', 'Lighting & electrical', 'Interior accessories', 'Tools & equipment'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness items, and health devices from GMP-certified manufacturers.',
    imgId: 'prod-img-health-y7z8a9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    examples: ['Skincare & cosmetics', 'Hair care products', 'Wellness devices', 'Supplements packaging', 'Personal care tools'],
  },
  {
    id: 'pet-products',
    title: 'Pet Products',
    desc: 'Pet food, accessories, toys, grooming products, and pet care items from manufacturers with relevant safety certifications.',
    imgId: 'prod-img-pet-b1c2d3',
    titleId: 'prod-pet-title',
    descId: 'prod-pet-desc',
    examples: ['Pet accessories', 'Pet toys', 'Grooming products', 'Pet beds & furniture', 'Feeding & watering'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source from China
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We have hands-on experience sourcing across a wide range of product categories. If your product isn't listed, contact us — we likely have relevant factory connections.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-[#EEF2F7]">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-lg font-bold text-[#1A1A2E] mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-[#4A5568] text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-[#EEF2F7] text-[#1A3C6E] px-2 py-1 rounded">
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Don't See Your Product?</h2>
          <p className="text-[#4A5568] text-lg mb-8">
            We source a wide variety of products beyond this list. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors no-underline"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

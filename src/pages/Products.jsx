import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    icon: '⚡',
    desc: 'Consumer electronics, PCBs, LED lighting, batteries, cables, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCB assemblies', 'Power banks', 'Cables & connectors'],
    titleId: 'cat-elec-title',
    descId: 'cat-elec-desc',
    imgId: 'cat-img-elec-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    icon: '🪑',
    desc: 'Office furniture, bedroom sets, kitchen accessories, home décor, storage solutions, and soft furnishings.',
    examples: ['Office chairs', 'Bedroom furniture', 'Kitchen accessories', 'Storage solutions', 'Home décor'],
    titleId: 'cat-furn-title',
    descId: 'cat-furn-desc',
    imgId: 'cat-img-furn-d4e5f6',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    icon: '👕',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and accessories for retail and wholesale buyers.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Fabrics & textiles', 'Bags & accessories'],
    titleId: 'cat-app-title',
    descId: 'cat-app-desc',
    imgId: 'cat-img-app-g7h8i9',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipment',
    icon: '⚙️',
    desc: 'Machinery, tools, safety equipment, construction materials, and industrial components for B2B buyers.',
    examples: ['Power tools', 'Safety equipment', 'Machinery parts', 'Construction materials', 'Hydraulic components'],
    titleId: 'cat-ind-title',
    descId: 'cat-ind-desc',
    imgId: 'cat-img-ind-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    icon: '🧸',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories with safety certifications.',
    examples: ['Educational toys', 'Outdoor play sets', 'Baby care items', 'Plush toys', 'Board games'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-img-toys-m4n5o6',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    icon: '💊',
    desc: 'Personal care products, cosmetics, wellness devices, medical supplies, and health accessories.',
    examples: ['Skincare products', 'Wellness devices', 'Medical supplies', 'Fitness accessories', 'Personal care'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-img-health-p7q8r9',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    icon: '🏋️',
    desc: 'Fitness equipment, outdoor gear, camping supplies, cycling accessories, and sports apparel.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-img-sports-s1t2u3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Labels',
    icon: '📦',
    desc: 'Custom packaging, printed boxes, labels, bags, and branded packaging solutions for retail and e-commerce.',
    examples: ['Custom printed boxes', 'Retail packaging', 'Labels & stickers', 'Poly bags', 'Gift packaging'],
    titleId: 'cat-pack-title',
    descId: 'cat-pack-desc',
    imgId: 'cat-img-pack-v4w5x6',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    icon: '🚗',
    desc: 'Automotive parts, car accessories, motorcycle components, and vehicle maintenance products.',
    examples: ['Car accessories', 'Motorcycle parts', 'Auto lighting', 'Maintenance tools', 'Interior accessories'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-img-auto-y7z8a9',
  },
  {
    id: 'food',
    name: 'Food & Agriculture',
    icon: '🌾',
    desc: 'Food processing equipment, agricultural machinery, food packaging, and organic food products.',
    examples: ['Food processing equipment', 'Agricultural tools', 'Food packaging', 'Organic products', 'Spices & herbs'],
    titleId: 'cat-food-title',
    descId: 'cat-food-desc',
    imgId: 'cat-img-food-b1c2d3',
  },
  {
    id: 'pet',
    name: 'Pet Products',
    icon: '🐾',
    desc: 'Pet food, accessories, grooming products, pet furniture, and veterinary supplies.',
    examples: ['Pet food & treats', 'Pet accessories', 'Grooming products', 'Pet furniture', 'Veterinary supplies'],
    titleId: 'cat-pet-title',
    descId: 'cat-pet-desc',
    imgId: 'cat-img-pet-e4f5g6',
  },
  {
    id: 'office',
    name: 'Office & Stationery',
    icon: '📎',
    desc: 'Office supplies, stationery, promotional items, corporate gifts, and business accessories.',
    examples: ['Office supplies', 'Promotional items', 'Corporate gifts', 'Stationery sets', 'Desk accessories'],
    titleId: 'cat-office-title',
    descId: 'cat-office-desc',
    imgId: 'cat-img-office-h7i8j9',
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
      <section className="bg-[#1A3C6E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source from China
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We have established supplier networks across 12+ product categories. If you don't see your product, contact us — we source almost anything manufactured in China.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative h-44 bg-[#EBF2FA]">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 text-2xl bg-white/90 rounded-lg w-10 h-10 flex items-center justify-center">
                    {cat.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-bold text-[#1E293B] mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-[#475569] text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#EBF2FA] text-[#1A3C6E] text-xs px-2 py-1 rounded-md font-medium">
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

      {/* Custom Product Note */}
      <section className="py-12 bg-[#EBF2FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Don't See Your Product?</h2>
          <p className="text-[#475569] mb-6">
            We source a wide range of products beyond the categories listed above. If it's manufactured in China, we can likely source it for you. Contact us with your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200"
          >
            Submit a Custom Sourcing Request <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

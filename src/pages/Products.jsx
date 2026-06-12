import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '@/components/shared/CtaBanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Technology',
    desc: 'Consumer electronics, components, accessories, smart devices, and industrial electronics.',
    items: ['Smartphones & Accessories', 'LED Lighting', 'PCBs & Components', 'Smart Home Devices', 'Power Banks & Chargers', 'Surveillance Equipment'],
    imgId: 'prod-electronics-img-a1b2',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, home décor, storage solutions, and kitchenware.',
    items: ['Office Furniture', 'Outdoor & Garden Furniture', 'Storage & Organization', 'Kitchenware & Cookware', 'Bedding & Textiles', 'Home Décor'],
    imgId: 'prod-furniture-img-c3d4',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories.',
    items: ['Men\'s & Women\'s Clothing', 'Sportswear & Activewear', 'Workwear & Uniforms', 'Bags & Luggage', 'Hats & Caps', 'Fabrics & Raw Textiles'],
    imgId: 'prod-apparel-img-e5f6',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, tools, hardware, and industrial components.',
    items: ['Hand & Power Tools', 'Machinery Parts', 'Safety Equipment', 'Fasteners & Hardware', 'Pumps & Valves', 'Packaging Machinery'],
    imgId: 'prod-industrial-img-g7h8',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, medical supplies, wellness items, and cosmetics.',
    items: ['Skincare & Cosmetics', 'Medical Devices', 'Fitness Equipment', 'Supplements & Nutrition', 'Personal Protective Equipment', 'Dental Products'],
    imgId: 'prod-health-img-i9j0',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Children\'s toys, educational products, baby gear, and outdoor play equipment.',
    items: ['Educational Toys', 'Outdoor Play Equipment', 'Baby Gear & Accessories', 'Board Games', 'RC & Electronic Toys', 'Plush & Stuffed Animals'],
    imgId: 'prod-toys-img-k1l2',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'auto',
    title: 'Automotive & Parts',
    desc: 'Car accessories, spare parts, tools, and vehicle components.',
    items: ['Car Accessories', 'Spare Parts & Components', 'Tires & Wheels', 'Car Care Products', 'Electric Vehicle Parts', 'Motorcycle Accessories'],
    imgId: 'prod-auto-img-m3n4',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, camping gear, cycling products, and outdoor accessories.',
    items: ['Camping & Hiking Gear', 'Cycling Equipment', 'Water Sports', 'Gym & Fitness Equipment', 'Team Sports Equipment', 'Outdoor Apparel'],
    imgId: 'prod-sports-img-o5p6',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and promotional materials.',
    items: ['Custom Boxes & Cartons', 'Plastic Packaging', 'Paper Bags & Pouches', 'Labels & Stickers', 'Promotional Materials', 'Gift Packaging'],
    imgId: 'prod-packaging-img-q7r8',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
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
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Products We Source from China
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We source across a wide range of product categories. If it's manufactured in China, we can help you find a reliable supplier and manage the process.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-dark-text mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-body-text text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 bg-light-blue text-navy text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {item}
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
      <section className="py-12 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-3">
            Don't See Your Product Category?
          </h2>
          <p className="text-body-text mb-6">
            We source a wide variety of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Send Us Your Requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    imgId: 'prod-page-electronics-a1b2',
    titleId: 'prod-page-title-electronics',
    descId: 'prod-page-desc-electronics',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting systems', 'USB cables and chargers', 'Smart home devices', 'PCBs and electronic components', 'Surveillance cameras', 'Power banks'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    imgId: 'prod-page-furniture-c3d4',
    titleId: 'prod-page-title-furniture',
    descId: 'prod-page-desc-furniture',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products.',
    examples: ['Office chairs and desks', 'Sofas and bedroom furniture', 'Kitchen utensils and cookware', 'Storage and organization', 'Home décor and accessories', 'Outdoor furniture'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    imgId: 'prod-page-apparel-e5f6',
    titleId: 'prod-page-title-apparel',
    descId: 'prod-page-desc-apparel',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories for private label and wholesale.',
    examples: ['T-shirts and casual wear', 'Sportswear and activewear', 'Workwear and uniforms', 'Bags and accessories', 'Fabrics and textiles', 'Footwear'],
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    imgId: 'prod-page-machinery-g7h8',
    titleId: 'prod-page-title-machinery',
    descId: 'prod-page-desc-machinery',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial supplies.',
    examples: ['Power tools and hand tools', 'CNC machinery', 'Hydraulic equipment', 'Spare parts and components', 'Safety equipment', 'Welding supplies'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    imgId: 'prod-page-packaging-i9j0',
    titleId: 'prod-page-title-packaging',
    descId: 'prod-page-desc-packaging',
    desc: 'Custom packaging, labels, promotional materials, and printed products for retail and e-commerce.',
    examples: ['Custom cardboard boxes', 'Poly bags and mailers', 'Labels and stickers', 'Promotional materials', 'Gift packaging', 'Retail display stands'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    imgId: 'prod-page-toys-k1l2',
    titleId: 'prod-page-title-toys',
    descId: 'prod-page-desc-toys',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with CE and EN71 compliance.',
    examples: ['Plastic and wooden toys', 'Educational toys', 'Baby clothing and gear', 'Outdoor play equipment', 'Board games', 'Stuffed animals'],
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    imgId: 'prod-page-health-m3n4',
    titleId: 'prod-page-title-health',
    descId: 'prod-page-desc-health',
    desc: 'Personal care products, cosmetics, wellness items, and medical supplies.',
    examples: ['Skincare and cosmetics', 'Hair care products', 'Fitness equipment', 'Medical disposables', 'Supplements packaging', 'Personal protective equipment'],
  },
  {
    id: 'auto',
    title: 'Automotive Parts',
    imgId: 'prod-page-auto-o5p6',
    titleId: 'prod-page-title-auto',
    descId: 'prod-page-desc-auto',
    desc: 'Aftermarket auto parts, accessories, and components for passenger and commercial vehicles.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Tires and wheels', 'Interior accessories', 'Truck and van parts'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    imgId: 'prod-page-sports-q7r8',
    titleId: 'prod-page-title-sports',
    descId: 'prod-page-desc-sports',
    desc: 'Sports equipment, outdoor gear, camping supplies, and fitness products.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports equipment', 'Team sports gear', 'Outdoor furniture'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Products We Source"
        subtitle="We have hands-on experience sourcing across a wide range of industries and product categories from China."
        breadcrumb="Products We Source"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="card-base overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-brand-blue mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <ul className="grid grid-cols-2 gap-1">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"></span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't See Your Product Category?"
        subtitle="We source a wide range of products beyond this list. Contact us to discuss your specific requirements."
      />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionCTA from '../components/shared/SectionCTA';
import SectionHeader from '../components/shared/SectionHeader';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic components.',
    examples: ['LED lighting systems', 'Smart home devices', 'PCBs and electronic components', 'Cables and connectors', 'Power banks and chargers'],
    imgId: 'pcat-electronics-a1b2c3',
    titleId: 'pcat-electronics-title',
    descId: 'pcat-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, bedding, and household accessories.',
    examples: ['Office chairs and desks', 'Sofas and bedroom furniture', 'Kitchen and dining accessories', 'Storage and organization', 'Home décor and lighting'],
    imgId: 'pcat-furniture-d4e5f6',
    titleId: 'pcat-furniture-title',
    descId: 'pcat-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, workwear, fabrics, accessories, and private-label fashion.',
    examples: ['T-shirts, hoodies, and casual wear', 'Sportswear and activewear', 'Corporate uniforms and workwear', 'Bags and accessories', 'Fabrics and raw textiles'],
    imgId: 'pcat-apparel-g7h8i9',
    titleId: 'pcat-apparel-title',
    descId: 'pcat-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, tools, agricultural equipment, construction equipment, and spare parts.',
    examples: ['CNC machines and tools', 'Agricultural machinery', 'Construction equipment', 'Industrial pumps and motors', 'Spare parts and components'],
    imgId: 'pcat-machinery-j1k2l3',
    titleId: 'pcat-machinery-title',
    descId: 'pcat-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, promotional materials, and branded packaging solutions.',
    examples: ['Custom printed boxes', 'Paper and plastic bags', 'Labels and stickers', 'Promotional materials', 'Eco-friendly packaging'],
    imgId: 'pcat-packaging-m4n5o6',
    titleId: 'pcat-packaging-title',
    descId: 'pcat-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Toys, games, outdoor equipment, fitness gear, bicycles, and recreational products.',
    examples: ['Children\'s toys and games', 'Outdoor and camping gear', 'Fitness equipment', 'Bicycles and scooters', 'Sports accessories'],
    imgId: 'pcat-toys-p7q8r9',
    titleId: 'pcat-toys-title',
    descId: 'pcat-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, supplements, and wellness products.',
    examples: ['Skincare and cosmetics', 'Personal care accessories', 'Medical devices and equipment', 'Dietary supplements', 'Wellness and fitness products'],
    imgId: 'pcat-health-s1t2u3',
    titleId: 'pcat-health-title',
    descId: 'pcat-health-desc',
  },
  {
    id: 'food',
    title: 'Food & Agriculture',
    desc: 'Food ingredients, agricultural products, food processing equipment, and packaging for food products.',
    examples: ['Food ingredients and additives', 'Agricultural products', 'Food processing equipment', 'Food packaging solutions', 'Tea, spices, and dried goods'],
    imgId: 'pcat-food-v4w5x6',
    titleId: 'pcat-food-title',
    descId: 'pcat-food-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Products</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            We source across all major manufacturing sectors in China. If it's made in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="What We Can Source for You"
            subtitle="Our team has experience sourcing across a wide range of industries and product types."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-52 bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Examples</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Don't See Your Product Category?"
        subtitle="We source a wide range of products beyond the categories listed. Contact us with your requirements and we'll let you know if we can help."
        ctaLabel="Get a Free Sourcing Quote"
      />
    </>
  );
}

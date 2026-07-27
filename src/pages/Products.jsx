import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import SectionCTA from '@/components/shared/SectionCTA';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic accessories.',
    examples: ['LED lighting', 'Smart home devices', 'PCB assemblies', 'Cables & connectors', 'Power banks'],
    imgId: 'prod-page-electronics-1a2b3c',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products.',
    examples: ['Office chairs & desks', 'Storage furniture', 'Kitchen accessories', 'Home décor', 'Outdoor furniture'],
    imgId: 'prod-page-furniture-2b3c4d',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, bags, shoes, fabric, and fashion accessories for retail and wholesale.',
    examples: ['Sportswear & activewear', 'Private label clothing', 'Bags & luggage', 'Footwear', 'Fabric & yarn'],
    imgId: 'prod-page-apparel-3c4d5e',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and automation systems.',
    examples: ['CNC machines', 'Power tools', 'Hydraulic equipment', 'Spare parts', 'Automation components'],
    imgId: 'prod-page-machinery-4d5e6f',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, promotional materials, and branded packaging solutions.',
    examples: ['Custom printed boxes', 'Paper bags', 'Labels & stickers', 'Promotional items', 'Gift packaging'],
    imgId: 'prod-page-packaging-5e6f7a',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, supplements, medical devices, cosmetics, and wellness products.',
    examples: ['Skincare products', 'Dietary supplements', 'Medical devices', 'Fitness equipment', 'Cosmetics'],
    imgId: 'prod-page-health-6f7a8b',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Gifts',
    desc: 'Children\'s toys, educational products, promotional gifts, and novelty items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Seasonal items', 'Board games'],
    imgId: 'prod-page-toys-7a8b9c',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    desc: 'OEM and aftermarket automotive components, accessories, and replacement parts.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting', 'Filters & fluids'],
    imgId: 'prod-page-auto-8b9c0d',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'construction',
    title: 'Construction & Hardware',
    desc: 'Building materials, hardware, fasteners, tools, and construction equipment.',
    examples: ['Fasteners & bolts', 'Pipes & fittings', 'Safety equipment', 'Hand tools', 'Building materials'],
    imgId: 'prod-page-construction-9c0d1e',
    titleId: 'prod-page-construction-title',
    descId: 'prod-page-construction-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHero
        badge="Product Categories"
        title="Products We Source from China"
        subtitle="We work across a wide range of industries, connecting global buyers with qualified Chinese manufacturers for their specific product needs."
      />

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Don't See Your Product Category?</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond the categories listed above.
              Contact us with your specific requirements and we'll let you know if we can help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-accent hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Ask About Your Product
            </a>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Ready to Source Your Product?"
        subtitle="Tell us what you need and we'll find the right Chinese manufacturer for you."
      />
    </>
  );
}

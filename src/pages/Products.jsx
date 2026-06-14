import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';
import SectionHeader from '../components/shared/SectionHeader';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, power banks, and electronic accessories.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & chargers'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products.',
    examples: ['Office chairs & desks', 'Storage furniture', 'Home décor', 'Kitchenware'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, accessories, and private label fashion.',
    examples: ['Sportswear', 'Workwear & uniforms', 'Private label fashion', 'Fabrics & textiles'],
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial components.',
    examples: ['Power tools', 'Industrial equipment', 'Spare parts', 'Safety equipment'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, promotional materials, and branded packaging solutions.',
    examples: ['Custom boxes', 'Labels & stickers', 'Promotional bags', 'Branded packaging'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Plastic toys, educational products, baby gear, outdoor play equipment, and hobby items.',
    examples: ['Educational toys', 'Baby gear', 'Outdoor play', 'Hobby & craft'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair care, wellness products, and beauty tools.',
    examples: ['Skincare products', 'Hair care', 'Beauty tools', 'Wellness products'],
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Car parts, accessories, tools, EV components, and aftermarket products.',
    examples: ['Car accessories', 'EV components', 'Auto tools', 'Aftermarket parts'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting goods.',
    examples: ['Fitness equipment', 'Camping gear', 'Outdoor furniture', 'Sports accessories'],
  },
  {
    id: 'medical',
    title: 'Medical & Health Devices',
    desc: 'Non-prescription health devices, wellness equipment, and medical accessories.',
    examples: ['Health monitors', 'Rehabilitation equipment', 'Medical accessories', 'Wellness devices'],
  },
  {
    id: 'pet',
    title: 'Pet Products',
    desc: 'Pet food accessories, toys, grooming products, and pet care equipment.',
    examples: ['Pet toys', 'Grooming tools', 'Pet accessories', 'Pet care equipment'],
  },
  {
    id: 'construction',
    title: 'Building & Construction',
    desc: 'Building materials, hardware, fixtures, and construction accessories.',
    examples: ['Hardware & fixtures', 'Building materials', 'Flooring', 'Lighting fixtures'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Products We Source</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We have experience sourcing across a wide range of product categories from verified Chinese manufacturers.
              If your product is not listed, contact us — we likely have relevant supplier contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="What We Can Source for You"
            subtitle="From consumer goods to industrial equipment — our team has sourced across all major manufacturing sectors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-44 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={`prod-page-${cat.id}-img-b2c3d4`}
                    data-strk-img={`[prod-page-${cat.id}-desc] [prod-page-${cat.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`prod-page-${cat.id}-title`} className="text-brand-navy font-semibold text-lg mb-2">{cat.title}</h3>
                  <p id={`prod-page-${cat.id}-desc`} className="text-brand-slate text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-brand-light text-brand-navy px-2 py-1 rounded">
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

      {/* Note */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Don't See Your Product?</h2>
          <p className="text-brand-slate mb-6">
            Our sourcing network covers hundreds of product types. If your category is not listed above,
            contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Send Us Your Requirements
          </Link>
        </div>
      </section>

      <CtaBanner
        title="Ready to Source Your Product?"
        subtitle="Tell us what you need and we'll identify the right suppliers within days."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}

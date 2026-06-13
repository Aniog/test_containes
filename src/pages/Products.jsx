import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, LED lighting, sensors, connectors, cables, and electronic assemblies.',
    items: ['PCBs & Circuit Boards', 'Consumer Electronics', 'LED Lighting', 'Sensors & Modules', 'Cables & Connectors', 'Electronic Assemblies'],
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, sportswear, and fashion accessories from established textile hubs.',
    items: ['Garments & Clothing', 'Fabrics & Textiles', 'Sportswear', 'Home Textiles', 'Bags & Accessories', 'Workwear & Uniforms'],
    imgId: 'prod-textiles-d4e5f6',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, and home decoration items.',
    items: ['Furniture', 'Kitchenware', 'Bathroom Fixtures', 'Garden Tools', 'Home Decoration', 'Storage & Organization'],
    imgId: 'prod-home-g7h8i9',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Machinery & Industrial Parts',
    desc: 'Industrial equipment, CNC parts, molds, pumps, valves, and custom mechanical components.',
    items: ['CNC Machined Parts', 'Molds & Tooling', 'Pumps & Valves', 'Industrial Equipment', 'Castings & Forgings', 'Custom Fabrication'],
    imgId: 'prod-machinery-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, electric vehicle components, and automotive accessories.',
    items: ['Engine Components', 'Body Parts', 'EV Components', 'Lighting & Electrical', 'Interior Accessories', 'Brake & Suspension'],
    imgId: 'prod-auto-m4n5o6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    name: 'Consumer Goods',
    desc: 'Pet products, stationery, toys, sporting goods, and general consumer merchandise.',
    items: ['Pet Products', 'Stationery & Office', 'Toys & Games', 'Sporting Goods', 'Health & Beauty', 'Promotional Items'],
    imgId: 'prod-consumer-p7q8r9',
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, and printing solutions for product branding and shipping.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Flexible Packaging', 'Corrugated Packaging', 'Printing Services', 'Display Packaging'],
    imgId: 'prod-packaging-s1t2u3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    name: 'Building Materials',
    desc: 'Tiles, sanitary ware, hardware, doors, windows, and construction materials.',
    items: ['Tiles & Flooring', 'Sanitary Ware', 'Hardware & Fittings', 'Doors & Windows', 'Plumbing Supplies', 'Construction Materials'],
    imgId: 'prod-building-v4w5x6',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    name: 'Medical & Health',
    desc: 'Medical devices, PPE, health monitoring equipment, and pharmaceutical packaging.',
    items: ['Medical Devices', 'PPE & Safety', 'Health Monitors', 'Lab Equipment', 'Pharma Packaging', 'Rehabilitation Aids'],
    imgId: 'prod-medical-y7z8a9',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
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
        subtitle="We source across all major manufacturing categories in China. If it's made in China, we can help you find the right supplier."
        breadcrumb="Products"
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="group bg-white rounded-lg border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">
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

      <section className="bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source a wide range of products beyond what's listed here. Tell us what you need and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

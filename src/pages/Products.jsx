import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '@/components/home/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    imgId: 'prod-page-electronics-1a2b3c',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Solid wood and engineered wood furniture, upholstered pieces, home décor, kitchenware, and storage solutions.',
    examples: ['Dining tables', 'Office chairs', 'Sofas', 'Kitchen organizers', 'Decorative items'],
    imgId: 'prod-page-furniture-4d5e6f',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, activewear, workwear, accessories, fabrics, and private label fashion for all market segments.',
    examples: ['T-shirts & hoodies', 'Activewear', 'Uniforms', 'Bags & accessories', 'Fabric rolls'],
    imgId: 'prod-page-apparel-7g8h9i',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Equipment',
    desc: 'Manufacturing equipment, tools, agricultural machinery, construction equipment, and industrial components.',
    examples: ['CNC machines', 'Hydraulic tools', 'Pumps & motors', 'Welding equipment', 'Conveyor systems'],
    imgId: 'prod-page-machinery-0j1k2l',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, promotional materials, and branded packaging solutions.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Hang tags', 'Promotional materials'],
    imgId: 'prod-page-packaging-3m4n5o',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, educational products, outdoor sports equipment, fitness gear, and recreational products.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Fitness accessories', 'Bicycles', 'Sports apparel'],
    imgId: 'prod-page-toys-6p7q8r',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty Products',
    desc: 'Personal care products, cosmetics, medical devices, wellness products, and health supplements.',
    examples: ['Skincare products', 'Hair care', 'Medical masks', 'Massage devices', 'Supplements'],
    imgId: 'prod-page-health-9s0t1u',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'auto',
    title: 'Automotive Parts & Accessories',
    desc: 'Car parts, accessories, tools, and aftermarket components for passenger vehicles and commercial vehicles.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting', 'Tools & equipment', 'Tires & wheels'],
    imgId: 'prod-page-auto-2v3w4x',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'construction',
    title: 'Building & Construction Materials',
    desc: 'Construction materials, hardware, plumbing, electrical fittings, and building components.',
    examples: ['Tiles & flooring', 'Hardware fittings', 'Plumbing supplies', 'Electrical components', 'Steel products'],
    imgId: 'prod-page-construction-5y6z7a',
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
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Product Categories</p>
            <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mb-5">
              Products We Source from China
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              We have experience sourcing across a wide range of industries. If your product category isn't listed, contact us — we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-[#dde3ec] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-lg font-bold text-[#0d2340] mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-[#5a6a7e] text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#f4f6f9] text-[#1a4f8a] text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-[#f4f6f9] rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-[#0d2340] mb-3">Don't See Your Product Category?</h2>
            <p className="text-[#5a6a7e] mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond those listed here. Contact us with your requirements and we'll let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Submit Your Sourcing Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

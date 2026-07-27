import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '@/components/home/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, LED lighting, PCBs, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED bulbs & strips', 'Smart home devices', 'Power banks & chargers', 'PCBs & components', 'Surveillance cameras', 'Audio equipment'],
    hubs: 'Shenzhen, Dongguan',
    imgId: 'cat-electronics-a1b2c3',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Wooden and metal furniture, shelving, decorative items, rugs, cushions, and home accessories.',
    examples: ['Wooden furniture', 'Metal shelving', 'Decorative items', 'Rugs & carpets', 'Lighting fixtures', 'Storage solutions'],
    hubs: 'Foshan, Guangzhou',
    imgId: 'cat-furniture-b2c3d4',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
  },
  {
    id: 'clothing',
    title: 'Clothing & Textiles',
    desc: 'Apparel, sportswear, uniforms, workwear, fabrics, and fashion accessories for brands and retailers.',
    examples: ['Activewear & sportswear', 'Uniforms & workwear', 'Fashion apparel', 'Fabrics & materials', 'Bags & accessories', 'Socks & underwear'],
    hubs: 'Guangzhou, Yiwu',
    imgId: 'cat-clothing-c3d4e5',
    titleId: 'cat-clothing-title',
    descId: 'cat-clothing-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'CNC machined parts, tools, industrial equipment, hardware, and custom metal fabrication.',
    examples: ['CNC machined parts', 'Hand & power tools', 'Industrial equipment', 'Metal fabrication', 'Fasteners & hardware', 'Pneumatic tools'],
    hubs: 'Ningbo, Shanghai',
    imgId: 'cat-machinery-d4e5f6',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Plastic toys, educational toys, baby gear, plush items, and children\'s accessories.',
    examples: ['Educational toys', 'Plush & stuffed toys', 'Baby gear', 'Outdoor play equipment', 'Board games', 'RC toys'],
    hubs: 'Shantou, Dongguan',
    imgId: 'cat-toys-e5f6a7',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, supplements, medical devices, and wellness accessories.',
    examples: ['Skincare products', 'Hair care', 'Supplements', 'Medical devices', 'Fitness equipment', 'Personal care tools'],
    hubs: 'Guangzhou, Shanghai',
    imgId: 'cat-health-f6a7b8',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, fitness accessories, and protective gear.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment', 'Protective gear'],
    hubs: 'Xiamen, Ningbo',
    imgId: 'cat-sports-a7b8c9',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, promotional materials, and branded merchandise.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional items', 'Gift packaging', 'Branded merchandise'],
    hubs: 'Shenzhen, Guangzhou',
    imgId: 'cat-packaging-b8c9d1',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, car accessories, tools, and aftermarket components for automotive applications.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting upgrades', 'Interior accessories', 'Tools & equipment', 'Motorcycle parts'],
    hubs: 'Guangzhou, Wenzhou',
    imgId: 'cat-auto-c9d1e2',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
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
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Products We Source from China
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We have established supplier networks across China's major manufacturing hubs, covering a wide range of product categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
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
                  <div className="flex items-center justify-between mb-2">
                    <h2 id={cat.titleId} className="font-bold text-navy text-lg">{cat.title}</h2>
                  </div>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Examples</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-lightblue text-primary px-2.5 py-1 rounded-full font-medium">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 border-t border-gray-100 pt-3">
                    <span className="font-medium">Manufacturing Hub:</span>
                    <span>{cat.hubs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-lightblue rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-navy mb-3">Don't See Your Product Category?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond the categories listed above. Contact us with your specific requirements and we'll assess whether we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Ask About Your Product
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, smart devices, accessories, LED lighting, power banks, and audio equipment.',
    examples: ['Bluetooth speakers', 'Smart home devices', 'LED lighting', 'Phone accessories', 'Wearables'],
    imgQuery: 'consumer electronics gadgets China factory manufacturing',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions.',
    examples: ['Office chairs', 'Outdoor furniture', 'Shelving units', 'Decorative items', 'Rugs & textiles'],
    imgQuery: 'furniture home decor manufacturing China factory',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, bags, and textile products for private label and wholesale.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & backpacks', 'Hats & caps'],
    imgQuery: 'clothing apparel textile factory China manufacturing',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial components.',
    examples: ['Hand tools', 'Power tools', 'Fasteners & bolts', 'Safety equipment', 'Industrial parts'],
    imgQuery: 'hardware tools manufacturing China factory industrial',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for retail and e-commerce brands.',
    examples: ['Custom boxes', 'Poly bags', 'Labels & stickers', 'Retail packaging', 'Paper bags'],
    imgQuery: 'custom packaging printing boxes China factory',
  },
  {
    id: 'homegoods',
    name: 'Home & Kitchen',
    desc: 'Kitchenware, cookware, cleaning products, bathroom accessories, and household goods.',
    examples: ['Cookware sets', 'Kitchen gadgets', 'Storage containers', 'Bathroom accessories', 'Cleaning tools'],
    imgQuery: 'kitchen home goods products China factory manufacturing',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Toys, games, educational products, baby gear, and children\'s accessories with safety certifications.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Baby gear', 'Board games', 'Plush toys'],
    imgQuery: 'toys baby products China factory manufacturing safety',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, and sports accessories.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Yoga products'],
    imgQuery: 'sports outdoor fitness equipment China factory',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair care, personal care devices, and beauty accessories.',
    examples: ['Skincare products', 'Hair tools', 'Cosmetic brushes', 'Beauty devices', 'Packaging'],
    imgQuery: 'beauty cosmetics personal care products China factory',
  },
  {
    id: 'auto',
    name: 'Automotive Accessories',
    desc: 'Car accessories, motorcycle parts, cleaning products, and vehicle electronics.',
    examples: ['Car organizers', 'Dash cams', 'Seat covers', 'Cleaning kits', 'Lighting'],
    imgQuery: 'automotive accessories car parts China factory manufacturing',
  },
  {
    id: 'pet',
    name: 'Pet Products',
    desc: 'Pet food accessories, toys, grooming products, carriers, and pet care items.',
    examples: ['Pet toys', 'Grooming tools', 'Carriers & beds', 'Feeding accessories', 'Apparel'],
    imgQuery: 'pet products accessories China factory manufacturing',
  },
  {
    id: 'industrial',
    name: 'Industrial & B2B',
    desc: 'Industrial components, machinery parts, safety equipment, and OEM manufacturing.',
    examples: ['Machine parts', 'Safety equipment', 'OEM components', 'Electrical parts', 'Valves & fittings'],
    imgQuery: 'industrial components machinery parts China factory OEM',
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
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We have established supplier networks across 30+ product categories. If your product is manufactured in China, we can source it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map(({ id, name, desc, examples, imgQuery }) => (
              <div key={id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={`prod-img-${id}-ss`}
                    data-strk-img={`[prod-title-${id}] ${imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`prod-title-${id}`} className="text-lg font-bold text-[#0d2340] mb-2">{name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {examples.map((ex) => (
                      <span key={ex} className="text-xs bg-[#f4f6f9] text-gray-700 px-2.5 py-1 rounded-full font-medium">
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

      {/* Not Listed */}
      <section className="py-16 bg-[#f4f6f9]">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-4">Don't See Your Product?</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            If it's manufactured in China, we can source it. Contact us with your product details and we'll assess feasibility within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

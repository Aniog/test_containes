import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, PCBs, LED lighting, smart home devices, cables, and accessories.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB accessories', 'Smart home sensors', 'Power banks'],
    imgId: 'prod-cat-elec-img-a1b2c3',
    titleId: 'prod-cat-elec-title',
    descId: 'prod-cat-elec-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, decorative items, storage solutions, and home accessories.',
    examples: ['Office chairs', 'Wooden tables', 'Outdoor furniture', 'Wall art', 'Storage organizers'],
    imgId: 'prod-cat-furn-img-d4e5f6',
    titleId: 'prod-cat-furn-title',
    descId: 'prod-cat-furn-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, activewear, workwear, fabrics, and textile accessories for retail and wholesale.',
    examples: ['T-shirts and hoodies', 'Activewear', 'Workwear uniforms', 'Bags and backpacks', 'Hats and caps'],
    imgId: 'prod-cat-app-img-g7h8i9',
    titleId: 'prod-cat-app-title',
    descId: 'prod-cat-app-desc',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components.',
    examples: ['Power tools', 'Safety equipment', 'Metal hardware', 'Pneumatic tools', 'Industrial fasteners'],
    imgId: 'prod-cat-ind-img-j1k2l3',
    titleId: 'prod-cat-ind-title',
    descId: 'prod-cat-ind-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories.',
    examples: ['Educational toys', 'Ride-on vehicles', 'Baby monitors', 'Plush toys', 'Outdoor play sets'],
    imgId: 'prod-cat-toy-img-m4n5o6',
    titleId: 'prod-cat-toy-title',
    descId: 'prod-cat-toy-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, wellness devices, cosmetic packaging, and health accessories.',
    examples: ['Skincare packaging', 'Massage devices', 'Fitness accessories', 'Hair tools', 'Supplement bottles'],
    imgId: 'prod-cat-hlt-img-p7q8r9',
    titleId: 'prod-cat-hlt-title',
    descId: 'prod-cat-hlt-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting accessories.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports gear', 'Yoga products'],
    imgId: 'prod-cat-spt-img-s1t2u3',
    titleId: 'prod-cat-spt-title',
    descId: 'prod-cat-spt-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Labels',
    desc: 'Custom packaging, printed boxes, labels, bags, and branded packaging solutions.',
    examples: ['Custom printed boxes', 'Poly mailer bags', 'Product labels', 'Gift packaging', 'Retail hang tags'],
    imgId: 'prod-cat-pkg-img-v4w5x6',
    titleId: 'prod-cat-pkg-title',
    descId: 'prod-cat-pkg-desc',
  },
  {
    id: 'kitchenware',
    name: 'Kitchenware & Cookware',
    desc: 'Kitchen tools, cookware, tableware, and food storage products for retail and hospitality.',
    examples: ['Stainless steel cookware', 'Kitchen gadgets', 'Ceramic tableware', 'Food containers', 'Cutlery sets'],
    imgId: 'prod-cat-kit-img-y7z8a9',
    titleId: 'prod-cat-kit-title',
    descId: 'prod-cat-kit-desc',
  },
  {
    id: 'automotive',
    name: 'Automotive Accessories',
    desc: 'Car accessories, tools, cleaning products, and aftermarket automotive parts.',
    examples: ['Car organizers', 'Dash cameras', 'Car cleaning kits', 'Seat covers', 'Phone mounts'],
    imgId: 'prod-cat-auto-img-b1c2d3',
    titleId: 'prod-cat-auto-title',
    descId: 'prod-cat-auto-desc',
  },
  {
    id: 'pet',
    name: 'Pet Products',
    desc: 'Pet accessories, toys, grooming products, and pet care equipment.',
    examples: ['Pet beds', 'Dog leashes', 'Cat toys', 'Grooming tools', 'Pet carriers'],
    imgId: 'prod-cat-pet-img-e4f5g6',
    titleId: 'prod-cat-pet-title',
    descId: 'prod-cat-pet-desc',
  },
  {
    id: 'stationery',
    name: 'Stationery & Office',
    desc: 'Office supplies, promotional items, notebooks, pens, and branded merchandise.',
    examples: ['Custom notebooks', 'Branded pens', 'Desk organizers', 'Promotional merchandise', 'Calendars'],
    imgId: 'prod-cat-sta-img-h7i8j9',
    titleId: 'prod-cat-sta-title',
    descId: 'prod-cat-sta-desc',
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
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0F2A5C 0%, #1A4B8C 100%)" }} className="text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We have hands-on experience sourcing across a wide range of product categories.
              If your product isn't listed, contact us — we likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-[#1E293B] mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-blue-50 text-[#1A4B8C] px-2 py-1 rounded-full font-medium">
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

      {/* Not Listed CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            China manufactures an enormous range of products. Contact us with your requirements
            and we'll assess whether we can source it for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
